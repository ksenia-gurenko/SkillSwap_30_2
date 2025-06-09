/**
 * Константы цветов для категорий тегов
 * Строго по макету из дизайна
 */

/**
 * Цвета категорий - точные значения из макета
 */
export const CATEGORY_COLORS = {
  /** Бизнес и карьера */
  BUSINESS_CAREER: '#EEE7F7',
  
  /** Творчество и искусство */
  CREATIVE_ART: '#F7E7F2',
  
  /** Иностранные языки */
  FOREIGN_LANGUAGES: '#EBE5C5',
  
  /** Образование и развитие */
  EDUCATION_DEVELOPMENT: '#E7F2F6',
  
  /** Дом и уют */
  HOME_COMFORT: '#F7EBE5',
  
  /** Здоровье и лайфстайл */
  HEALTH_LIFESTYLE: '#E9F7E7',
  
  /** Дополнительная категория */
  ADDITIONAL: '#E8ECF7',
} as const;

/**
 * Категории навыков
 */
export const SKILL_CATEGORIES = {
  BUSINESS_CAREER: 'Бизнес и карьера',
  CREATIVE_ART: 'Творчество и искусство', 
  FOREIGN_LANGUAGES: 'Иностранные языки',
  EDUCATION_DEVELOPMENT: 'Образование и развитие',
  HOME_COMFORT: 'Дом и уют',
  HEALTH_LIFESTYLE: 'Здоровье и лайфстайл',
  ADDITIONAL: 'Дополнительная категория',
} as const;

/**
 * Навыки по категориям
 */
export const SKILLS_BY_CATEGORY = {
  [SKILL_CATEGORIES.FOREIGN_LANGUAGES]: [
    'Английский',
    'Испанский', 
    'Французский',
    'Немецкий',
    'Китайский',
    'Японский',
    'Подготовка к экзаменам (IELTS, TOEFL)',
  ],
  [SKILL_CATEGORIES.CREATIVE_ART]: [
    'Рисование и иллюстрация',
    'Фотография',
    'Видеомонтаж', 
    'Музыка и звук',
    'Актёрское мастерство',
    'Креативное письмо',
    'Арт-терапия',
    'Декор и DIY',
  ],
  [SKILL_CATEGORIES.BUSINESS_CAREER]: [
    'Управление командой',
    'Маркетинг и реклама',
    'Продажи и переговоры',
    'Личный бренд', 
    'Резюме и собеседование',
    'Тайм-менеджмент',
    'Проектное управление',
    'Предпринимательство',
  ],
  [SKILL_CATEGORIES.EDUCATION_DEVELOPMENT]: [
    'Личностное развитие',
    'Навыки обучения',
    'Когнитивные техники',
    'Скорочтение',
    'Навыки преподавания',
    'Коучинг',
  ],
  [SKILL_CATEGORIES.HOME_COMFORT]: [
    'Уборка и организация',
    'Домашние финансы',
    'Приготовление еды',
    'Домашние растения',
    'Ремонт',
    'Хранение вещей',
  ],
  [SKILL_CATEGORIES.HEALTH_LIFESTYLE]: [
    'Йога и медитация',
    'Питание и ЗОЖ',
    'Ментальное здоровье',
    'Осознанность',
    'Физические тренировки',
    'Сон и восстановление',
    'Баланс жизни и работы',
  ],
} as const;

/**
 * Маппинг навыков к категориям для быстрого поиска цвета
 */
export const SKILL_TO_CATEGORY_MAP = Object.entries(SKILLS_BY_CATEGORY).reduce(
  (acc, [category, skills]) => {
    skills.forEach(skill => {
      acc[skill] = category as keyof typeof SKILL_CATEGORIES;
    });
    return acc;
  },
  {} as Record<string, string>
);

/**
 * Функция для получения цвета по категории
 */
export const getCategoryColor = (category: string): string => {
  switch (category) {
    case SKILL_CATEGORIES.BUSINESS_CAREER:
      return CATEGORY_COLORS.BUSINESS_CAREER;
    case SKILL_CATEGORIES.CREATIVE_ART:
      return CATEGORY_COLORS.CREATIVE_ART;
    case SKILL_CATEGORIES.FOREIGN_LANGUAGES:
      return CATEGORY_COLORS.FOREIGN_LANGUAGES;
    case SKILL_CATEGORIES.EDUCATION_DEVELOPMENT:
      return CATEGORY_COLORS.EDUCATION_DEVELOPMENT;
    case SKILL_CATEGORIES.HOME_COMFORT:
      return CATEGORY_COLORS.HOME_COMFORT;
    case SKILL_CATEGORIES.HEALTH_LIFESTYLE:
      return CATEGORY_COLORS.HEALTH_LIFESTYLE;
    default:
      return CATEGORY_COLORS.ADDITIONAL;
  }
};

/**
 * Типы для TypeScript
 */
export type CategoryColor = typeof CATEGORY_COLORS[keyof typeof CATEGORY_COLORS]; 