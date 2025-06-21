import axios from 'axios';
import type { Skill } from '../../entities/skill/model';

const API_URL = '/db/skills.json';

// Нормализация данных навыка
const normalizeSkill = (rawSkill: any): Skill => {
  if (!rawSkill._id) {
    console.error('Некорректные данные навыка:', rawSkill);
    throw new Error('Invalid skill data: missing _id');
  }

  return {
    _id: rawSkill._id.toString(), // Приводим к строке на всякий случай
    title: rawSkill.title || rawSkill.canTeach?.[0] || 'Без названия',
    description: rawSkill.description || '',
    category: rawSkill.category || 'other',
    isAvailable: rawSkill.isAvailable ?? true,
    user: {
      _id: rawSkill.user?._id?.toString() || '',
      avatar: rawSkill.user?.avatar || '',
      name: rawSkill.user?.name || 'Неизвестный',
      city: rawSkill.user?.city || '',
      age: typeof rawSkill.user?.age === 'string' 
        ? parseInt(rawSkill.user.age) || 0 
        : rawSkill.user?.age || 0
    },
    canTeach: rawSkill.canTeach || [],
    wantsToLearn: rawSkill.wantsToLearn || []
  };
};

export const fetchSkillById = async (_id: string): Promise<Skill> => {
  try {
    console.log(`Загрузка навыка с ID: ${_id}`); // Логируем запрос
    
    const response = await axios.get<any[]>(API_URL);
    
    // Проверяем структуру ответа
    if (!Array.isArray(response.data)) {
      console.error('Некорректный формат данных:', response.data);
      throw new Error('Неверный формат данных');
    }
    
    // Ищем навык (приводим оба ID к строке для сравнения)
    const rawSkill = response.data.find(s => s._id?.toString() === _id?.toString());
    
    if (!rawSkill) {
      console.error('Навык не найден. Доступные ID:', 
        response.data.map(s => s._id?.toString()));
      throw new Error(`Навык с ID ${_id} не найден`);
    }
    
    return normalizeSkill(rawSkill);
  } catch (error) {
    console.error('Ошибка при загрузке навыка:', error);
    throw new Error(error instanceof Error ? error.message : 'Не удалось загрузить данные');
  }
};

export const fetchRelatedSkills = async (category: string, excludeId: string): Promise<Skill[]> => {
  try {
    console.log(`Загрузка связанных навыков для категории: ${category}`);
    
    const response = await axios.get<any[]>(API_URL);
    
    if (!Array.isArray(response.data)) {
      console.error('Некорректный формат данных:', response.data);
      return [];
    }
    
    return response.data
      .filter(s => s._id?.toString() !== excludeId?.toString())
      .map(normalizeSkill)
      .filter(skill => skill.category === category)
      .sort(() => Math.random() - 0.5)
      .slice(0, 4);
  } catch (error) {
    console.error('Ошибка при загрузке связанных навыков:', error);
    return [];
  }
};