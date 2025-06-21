import type { Option } from './type';

export const CITIES: Option[] = [
  { label: 'Смоленск', value: 'Smolensk' },
  { label: 'Москва', value: 'Moscow' },
  { label: 'Минск', value: 'Minsk' }
]

export const GENDER: Option[] = [
  { label: 'Мужской', value: 'male' },
  { label: 'Женский', value: 'female' }
]

export const SKILL_CATEGORIES: Option[] = [
  { label: 'Бизнес и карьера', value: 'business' },
  { label: 'Творчество и искусство', value: 'art' },
  { label: 'Иностранные языки', value: 'languages' },
  { label: 'Здоровье и лайфстайл', value: 'lifestyle' },
  { label: 'Дом и уют', value: 'home' },
  { label: 'Образование и развитие', value: 'education' },
];

export const SKILL_SUBCATEGORIES: Record<string, Option[]> = {
  business: [
    { label: 'Управление командой', value: 'team' },
    { label: 'Маркетинг и реклама', value: 'marketing' },
    { label: 'Продажи и переговоры', value: 'sales' },
    { label: 'Личный бренд', value: 'brand' },
    { label: 'Резюме и собеседование', value: 'resume' },
    { label: 'Тайм-менеджмент', value: 'timemanagement' },
    { label: 'Проектное управление', value: 'project' },
    { label: 'Предпринимательство', value: 'entrepreneurship' },
  ],
  art: [
    { label: 'Рисование и иллюстрация', value: 'drawing' },
    { label: 'Фотография', value: 'photo' },
    { label: 'Видеомонтаж', value: 'video' },
    { label: 'Музыка и звук', value: 'music' },
    { label: 'Актёрское мастерство', value: 'acting' },
    { label: 'Креативное письмо', value: 'writing' },
    { label: 'Арт-терапия', value: 'arttherapy' },
    { label: 'Декор и DIY', value: 'diy' },
  ],
  languages: [
    { label: 'Английский', value: 'english' },
    { label: 'Французский', value: 'french' },
    { label: 'Испанский', value: 'spanish' },
    { label: 'Немецкий', value: 'german' },
    { label: 'Китайский', value: 'chinese' },
    { label: 'Японский', value: 'japanese' },
    { label: 'Подготовка к экзаменам (IELTS, TOEFL)', value: 'exams' },
  ],
  lifestyle: [
    { label: 'Йога и медитация', value: 'yoga' },
    { label: 'Питание и ЗОЖ', value: 'food' },
    { label: 'Ментальное здоровье', value: 'mental' },
    { label: 'Осознанность', value: 'mindfulness' },
    { label: 'Физические тренировки', value: 'fitness' },
    { label: 'Сон и восстановление', value: 'sleep' },
    { label: 'Баланс жизни и работы', value: 'balance' },
  ],
  home: [
    { label: 'Уборка и организация', value: 'cleaning' },
    { label: 'Домашние финансы', value: 'finance' },
    { label: 'Приготовление еды', value: 'cooking' },
    { label: 'Домашние растения', value: 'plants' },
    { label: 'Ремонт', value: 'repair' },
    { label: 'Хранение вещей', value: 'storage' },
  ],
  education: [
    { label: 'Личностное развитие', value: 'personal' },
    { label: 'Навыки обучения', value: 'learning' },
    { label: 'Когнитивные техники', value: 'cognitive' },
    { label: 'Скорочтение', value: 'speedreading' },
    { label: 'Навыки преподавания', value: 'teaching' },
    { label: 'Коучинг', value: 'coaching' },
  ],
}; 