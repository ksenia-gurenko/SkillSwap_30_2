import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../shared/ui/button';

/**
 * Демонстрация пропса fill - заполненные и незаполненные кнопки
 */
const meta: Meta<typeof Button> = {
  title: 'UI/Button/Fill',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Демонстрация основного пропса fill: заполненные (fill=true) и незаполненные (fill=false) кнопки.'
      }
    }
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Незаполненная кнопка (fill=false) - для вторичных действий
 */
export const Unfilled: Story = {
  args: {
    children: 'Войти',
    fill: false
  }
};

/**
 * Заполненная кнопка (fill=true) - для основных действий
 */
export const Filled: Story = {
  args: {
    children: 'Зарегистрироваться',
    fill: true
  }
}; 