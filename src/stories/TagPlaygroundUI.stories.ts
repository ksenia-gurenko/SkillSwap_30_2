import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from '../shared/ui/Tag';

/**
 * Мета-конфигурация для интерактивной истории компонента Tag
 */
const meta: Meta<typeof Tag> = {
  title: 'UI/Tag/SkillSwap',
  component: Tag,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Компонент Tag автоматически определяет цвет по названию навыка. Если навык не найден, используется цвет по умолчанию.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: 'text',
      description: 'Название навыка (цвет определяется автоматически)',
    },
    backgroundColor: {
      control: 'color',
      description: 'Цвет фона тега (опционально, переопределяет автоматический)',
    },
    className: {
      control: 'text',
      description: 'Дополнительные CSS классы',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Примеры навыков из разных категорий
 */
export const LanguageSkill: Story = {
  args: {
    text: 'Английский',
  },
};

export const BusinessSkill: Story = {
  args: {
    text: 'Маркетинг и реклама',
  },
};

export const CreativeSkill: Story = {
  args: {
    text: 'Фотография',
  },
};

export const HealthSkill: Story = {
  args: {
    text: 'Йога и медитация',
  },
}; 