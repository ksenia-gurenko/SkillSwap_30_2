import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../shared/ui/button';

/**
 * Демонстрация кнопки закрытия с крестиком
 */
const meta: Meta<typeof Button> = {
  title: 'UI/Button/Close',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Специальная кнопка "Закрыть" с белым фоном, без бордера и крестиком. Используется для закрытия модальных окон, панелей и форм.'
      }
    }
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Стандартная кнопка закрытия
 */
export const Default: Story = {
  args: {
    children: 'Закрыть',
    variant: 'close',
    width: 147
  }
};

/**
 * Кнопка закрытия без фиксированной ширины
 */
export const AutoWidth: Story = {
  args: {
    children: 'Закрыть',
    variant: 'close'
  }
};

/**
 * Отключенная кнопка закрытия
 */
export const Disabled: Story = {
  args: {
    children: 'Закрыть',
    variant: 'close',
    width: 147,
    disabled: true
  }
};

/**
 * Кнопка закрытия с длинным текстом
 */
export const LongText: Story = {
  args: {
    children: 'Отменить и закрыть',
    variant: 'close'
  }
}; 