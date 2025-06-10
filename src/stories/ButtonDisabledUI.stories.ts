import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../shared/ui/button';

/**
 * Демонстрация пропса disabled - активные и отключенные кнопки
 */
const meta: Meta<typeof Button> = {
  title: 'UI/Button/Disabled',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Демонстрация пропса disabled: активные (disabled=false) и отключенные (disabled=true) кнопки.'
      }
    }
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Активная незаполненная кнопка
 */
export const ActiveUnfilled: Story = {
  args: {
    children: 'Войти',
    fill: false,
    disabled: false
  }
};

/**
 * Активная заполненная кнопка
 */
export const ActiveFilled: Story = {
  args: {
    children: 'Зарегистрироваться',
    fill: true,
    disabled: false
  }
};

/**
 * Отключенная незаполненная кнопка
 */
export const DisabledUnfilled: Story = {
  args: {
    children: 'Войти',
    fill: false,
    disabled: true
  }
};

/**
 * Отключенная заполненная кнопка  
 */
export const DisabledFilled: Story = {
  args: {
    children: 'Зарегистрироваться',
    fill: true,
    disabled: true
  }
}; 