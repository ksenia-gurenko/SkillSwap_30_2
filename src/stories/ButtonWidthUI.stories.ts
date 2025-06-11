import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../shared/ui/button';

/**
 * Демонстрация пропса width - размеры из макетов Figma
 */
const meta: Meta<typeof Button> = {
  title: 'UI/Button/Width',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Демонстрация пропса width с точными размерами из макетов Figma.'
      }
    }
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof meta>;

// Размеры из макета Figma
const WIDTHS = {
  AUTO: undefined,
  SMALL: 92,      // "Войти"
  MEDIUM: 147,    // "Закрыть" 
  LARGE: 208,     // "Зарегистрироваться", "Продолжить"
  XLARGE: 284,    // "Подробнее" в карточках
  XXLARGE: 399,   // "Предложить обмен"
  FORM: 436       // Кнопки в формах
};

/**
 * Автоматическая ширина
 */
export const Auto: Story = {
  args: {
    children: 'Авто',
    fill: true,
    width: WIDTHS.AUTO
  }
};

/**
 * 92px - кнопка "Войти"
 */
export const Small: Story = {
  args: {
    children: 'Войти',
    fill: false,
    width: WIDTHS.SMALL
  }
};

/**
 * 147px - кнопка "Закрыть" с крестиком
 */
export const Medium: Story = {
  args: {
    children: 'Закрыть',
    variant: 'close',
    width: WIDTHS.MEDIUM
  }
};

/**
 * 208px - стандартные кнопки
 */
export const Large: Story = {
  args: {
    children: 'Продолжить',
    fill: true,
    width: WIDTHS.LARGE
  }
};

/**
 * 284px - кнопки в карточках
 */
export const XLarge: Story = {
  args: {
    children: 'Подробнее',
    fill: true,
    width: WIDTHS.XLARGE
  }
};

/**
 * 399px - кнопка обмена
 */
export const XXLarge: Story = {
  args: {
    children: 'Предложить обмен',
    fill: true,
    width: WIDTHS.XXLARGE
  }
};

/**
 * 436px - кнопки в формах
 */
export const Form: Story = {
  args: {
    children: 'Готово',
    fill: true,
    width: WIDTHS.FORM
  }
}; 