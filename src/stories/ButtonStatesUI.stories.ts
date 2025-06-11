import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../shared/ui/button';

/**
 * Различные состояния и комбинации кнопок
 * Показывает как кнопки выглядят в разных ситуациях
 */
const meta: Meta<typeof Button> = {
  title: 'UI/Button States',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Демонстрация различных состояний кнопок: активные, отключенные, с разными размерами и комбинациями пропсов.'
      }
    }
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof meta>;

// ==================== ОТКЛЮЧЕННЫЕ СОСТОЯНИЯ ====================

/**
 * Отключенная незаполненная кнопка
 */
export const DisabledDefault: Story = {
  args: {
    children: 'Войти',
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

/**
 * Отключенная кнопка закрытия
 */
export const DisabledClose: Story = {
  args: {
    children: 'Закрыть',
    variant: 'close',
    disabled: true
  }
};

/**
 * Отключенная кнопка редактирования
 */
export const DisabledEdit: Story = {
  args: {
    children: 'Редактировать',
    variant: 'edit',
    disabled: true
  }
};

// ==================== РАЗНЫЕ РАЗМЕРЫ ====================

/**
 * Автоматическая ширина
 */
export const AutoWidth: Story = {
  args: {
    children: 'Авто',
    fill: true
  }
};

/**
 * Маленькая кнопка (92px)
 */
export const SmallWidth: Story = {
  args: {
    children: 'Войти',
    width: 92
  }
};

/**
 * Средняя кнопка (147px)
 */
export const MediumWidth: Story = {
  args: {
    children: 'Закрыть',
    variant: 'close',
    width: 147
  }
};

/**
 * Большая кнопка (399px)
 */
export const LargeWidth: Story = {
  args: {
    children: 'Предложить обмен',
    fill: true,
    width: 399
  }
};

// ==================== ДЛИННЫЙ ТЕКСТ ====================

/**
 * Кнопка с очень длинным текстом
 */
export const LongText: Story = {
  args: {
    children: 'Редактировать профиль пользователя',
    variant: 'edit'
  }
};

/**
 * Кнопка закрытия с длинным текстом
 */
export const LongTextClose: Story = {
  args: {
    children: 'Отменить и закрыть',
    variant: 'close'
  }
};

/**
 * Кнопка ожидания с длинным текстом
 */
export const LongTextPending: Story = {
  args: {
    children: 'Запрос на обмен отправлен',
    variant: 'pending',
    disabled: true
  }
}; 