import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../shared/ui/button';

/**
 * Реальные случаи использования кнопок из макета SkillSwap
 */
const meta: Meta<typeof Button> = {
  title: 'UI/Button/UseCase',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Примеры кнопок в том виде, как они используются в макете SkillSwap.'
      }
    }
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Авторизация - кнопка "Войти" (92px)
 */
export const Login: Story = {
  args: {
    children: 'Войти',
    fill: false,
    width: 92
  }
};

/**
 * Регистрация - кнопка "Зарегистрироваться" (208px)
 */
export const Register: Story = {
  args: {
    children: 'Зарегистрироваться',
    fill: true,
    width: 208
  }
};

/**
 * Карточка навыка - кнопка "Подробнее" (284px)
 */
export const SkillDetails: Story = {
  args: {
    children: 'Подробнее',
    fill: true,
    width: 284
  }
};

/**
 * Страница навыка - кнопка "Предложить обмен" (399px)
 */
export const ProposeExchange: Story = {
  args: {
    children: 'Предложить обмен',
    fill: true,
    width: 399
  }
};

/**
 * Формы - кнопка "Готово" (436px)
 */
export const FormSubmit: Story = {
  args: {
    children: 'Готово',
    fill: true,
    width: 436
  }
};

/**
 * Состояние после обмена - кнопка отключена
 */
export const ExchangeProposed: Story = {
  args: {
    children: 'Обмен предложен',
    fill: false,
    disabled: true
  }
};
