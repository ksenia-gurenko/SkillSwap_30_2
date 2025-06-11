import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../shared/ui/button';

/**
 * Демонстрация кнопки редактирования с иконкой
 */
const meta: Meta<typeof Button> = {
  title: 'UI/Button/Edit',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Кнопка "Редактировать" с белым фоном, зеленой рамкой и иконкой справа. Используется для действий редактирования.'
      }
    }
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Стандартная кнопка редактирования
 */
export const Default: Story = {
  args: {
    children: 'Редактировать',
    variant: 'edit'
  }
};

/**
 * Кнопка редактирования с фиксированной шириной
 */
export const FixedWidth: Story = {
  args: {
    children: 'Редактировать',
    variant: 'edit',
    width: 200
  }
};

/**
 * Отключенная кнопка редактирования
 */
export const Disabled: Story = {
  args: {
    children: 'Редактировать',
    variant: 'edit',
    disabled: true
  }
};

/**
 * Кнопка редактирования с коротким текстом
 */
export const Short: Story = {
  args: {
    children: 'Изменить',
    variant: 'edit'
  }
};

/**
 * Кнопка редактирования с длинным текстом
 */
export const Long: Story = {
  args: {
    children: 'Редактировать профиль',
    variant: 'edit'
  }
}; 