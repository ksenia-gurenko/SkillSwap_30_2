import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../shared/ui';

/**
 * Универсальный компонент кнопки для проекта SkillSwap
 * Поддерживает различные варианты оформления согласно дизайну
 */
const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Компонент Button поддерживает различные варианты: обычные, заполненные, с иконками. Используется во всех интерактивных элементах приложения.'
      }
    }
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof meta>;

// ==================== ОСНОВНЫЕ ВАРИАНТЫ ====================

/**
 * Незаполненная кнопка - для второстепенных действий
 */
export const Default: Story = {
  args: {
    children: 'Войти'
  }
};

/**
 * Заполненная кнопка - для основных действий
 */
export const Filled: Story = {
  args: {
    children: 'Зарегистрироваться',
    fill: true
  }
};

/**
 * Кнопка закрытия - для модальных окон и панелей
 */
export const Close: Story = {
  args: {
    children: 'Закрыть',
    variant: 'close',
    width: 147
  }
};

/**
 * Кнопка редактирования - для действий редактирования
 */
export const Edit: Story = {
  args: {
    children: 'Редактировать',
    variant: 'edit'
  }
};

/**
 * Кнопка ожидания - для отображения завершенных действий
 */
export const Pending: Story = {
  args: {
    children: 'Обмен предложен',
    variant: 'pending',
    disabled: true
  }
};

// ==================== ПРИМЕРЫ ИЗ МАКЕТА ====================

/**
 * Кнопка "Войти" (92px)
 */
export const Login: Story = {
  args: {
    children: 'Войти',
    fill: false,
    width: 92
  }
};

/**
 * Кнопка "Зарегистрироваться" (208px)
 */
export const Register: Story = {
  args: {
    children: 'Зарегистрироваться',
    fill: true,
    width: 208
  }
};

/**
 * Кнопка "Подробнее" (284px)
 */
export const Details: Story = {
  args: {
    children: 'Подробнее',
    fill: true,
    width: 284
  }
};

/**
 * Кнопка "Предложить обмен" (399px)
 */
export const ProposeExchange: Story = {
  args: {
    children: 'Предложить обмен',
    fill: true,
    width: 399
  }
};

/**
 * Кнопка "Готово" для форм (с паддингом 12px 55px)
 */
export const FormButton: Story = {
  args: {
    children: 'Готово',
    fill: true,
    paddingX: 55
  }
};

// ==================== НОВЫЕ КНОПКИ ====================

/**
 * Кнопка "Далее" (с паддингом 12px 192px)
 */
export const Next: Story = {
  args: {
    children: 'Далее',
    fill: true,
    paddingX: 192
  }
};

/**
 * Кнопка "Назад" (с паддингом 12px 80px)
 */
export const Back: Story = {
  args: {
    children: 'Назад',
    fill: false,
    paddingX: 80
  }
};

/**
 * Кнопка "Продолжить" (с паддингом 12px 55px)
 */
export const Continue: Story = {
  args: {
    children: 'Продолжить',
    fill: true,
    paddingX: 55
  }
};

/**
 * Кнопка "Смотреть все" (с паддингом 12px 24px и иконкой vector.svg)
 */
export const ViewAll: Story = {
  args: {
    children: 'Смотреть все',
    variant: 'view-all',
    width: 187
  }
};

/**
 * Кнопка "Перейти" (с паддингом 12px 24px)
 */
export const Navigate: Story = {
  args: {
    children: 'Перейти',
    fill: true
  }
};
