import type { Meta, StoryObj } from '@storybook/react';
import { Tag, SKILL_CATEGORIES } from '../shared/ui/Tag';

/**
 * Мета-конфигурация для отображения всех категорий тегов
 */
const meta: Meta<typeof Tag> = {
  title: 'UI/Tag/All Categories',
  component: Tag,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Все навыки сгруппированы по категориям с автоматическим определением цветов.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Компонент для отображения всех навыков по категориям
 */
const AllSkillsDemo = () => (
  <div style={{ maxWidth: '800px' }}>
    {Object.entries(SKILL_CATEGORIES).map(([category, { skills }]) => (
      <div key={category} style={{ marginBottom: '24px' }}>
        <h3 style={{ 
          margin: '0 0 12px 0', 
          fontSize: '16px', 
          fontWeight: '600',
          color: '#253017'
        }}>
          {category}
        </h3>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {skills.map((skill: string) => (
            <Tag key={skill} text={skill} />
          ))}
        </div>
      </div>
    ))}
  </div>
);

/**
 * История показывающая все навыки по категориям
 */
export const AllSkillsByCategories: Story = {
  render: () => <AllSkillsDemo />,
};

/**
 * Отдельные категории для демонстрации
 */
export const ForeignLanguages: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      {SKILL_CATEGORIES['Иностранные языки'].skills.map((skill: string) => (
        <Tag key={skill} text={skill} />
      ))}
    </div>
  ),
};

export const BusinessCareer: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      {SKILL_CATEGORIES['Бизнес и карьера'].skills.map((skill: string) => (
        <Tag key={skill} text={skill} />
      ))}
    </div>
  ),
};

export const CreativeArt: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      {SKILL_CATEGORIES['Творчество и искусство'].skills.map((skill: string) => (
        <Tag key={skill} text={skill} />
      ))}
    </div>
  ),
};

export const EducationDevelopment: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      {SKILL_CATEGORIES['Образование и развитие'].skills.map((skill: string) => (
        <Tag key={skill} text={skill} />
      ))}
    </div>
  ),
};

export const HomeComfort: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      {SKILL_CATEGORIES['Дом и уют'].skills.map((skill: string) => (
        <Tag key={skill} text={skill} />
      ))}
    </div>
  ),
};

export const HealthLifestyle: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      {SKILL_CATEGORIES['Здоровье и лайфстайл'].skills.map((skill: string) => (
        <Tag key={skill} text={skill} />
      ))}
    </div>
  ),
}; 