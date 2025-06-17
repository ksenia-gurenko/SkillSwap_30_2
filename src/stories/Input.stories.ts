import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../shared/ui/input/input';

const meta: Meta<typeof Input> = {
  title: 'UI/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  }
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: 'Имя',
    placeholder: 'Введите ваше имя'
  }
};

export const Password: Story = {
  args: {
    label: 'Пароль',
    placeholder: 'Введите ваш пароль',
    type: 'password',
    hint: 'Пароль должен содержать не менее 8 знаков'
  }
};

export const Error: Story = {
  args: {
    label: 'Пароль',
    placeholder: 'Введите ваш пароль',
    type: 'password',
    error: 'Пароль должен содержать не менее 8 знаков'
  }
};
