import axios from 'axios';
import type { Skill } from '../../entities/skill/model';

const API_URL = '/db/skills.json';

export const fetchSkillById = async (id: string): Promise<Skill> => {
  try {
    const response = await axios.get<{ skills: Skill[] }>(API_URL); // Указываем тип ответа
    const skill = response.data.skills.find((s: Skill) => s.id === id);
    if (!skill) throw new Error('Навык не найден');
    return skill;
  } catch (error) {
    console.error('Ошибка при загрузке навыка:', error);
    throw new Error('Не удалось загрузить данные');
  }
};

export const fetchRelatedSkills = async (category: string, excludeId: string): Promise<Skill[]> => {
  try {
    const response = await axios.get<{ skills: Skill[] }>(API_URL);
    return response.data.skills
      .filter((s: Skill) => s.category === category && s.id !== excludeId)
      .sort(() => Math.random() - 0.5);
  } catch (error) {
    console.error('Ошибка при загрузке связанных навыков:', error);
    return []; // Возвращаем пустой массив в случае ошибки
  }
};