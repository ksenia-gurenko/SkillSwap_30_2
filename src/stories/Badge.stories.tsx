import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '../shared/ui';

const meta: Meta<typeof Badge> = {
  title: 'UI/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    count: {
      control: { type: 'number', min: 0 },
      description: 'Число для отображения в бейдже'
    },
    onClick: {
      action: 'clicked',
      description: 'Обработчик клика на бейдж'
    }
  }
};

export default meta;
type Story = StoryObj<typeof Badge>;

// Базовая история
export const Primary: Story = {
  args: {
    count: 5
  }
};

// Бейдж с кликом
export const Clickable: Story = {
  args: {
    count: 10,
    onClick: () => console.log('Badge clicked!')
  }
};

// Бейдж с нулевым значением
export const ZeroCount: Story = {
  args: {
    count: 0
  }
};

// Бейдж с большим числом
export const LargeNumber: Story = {
  args: {
    count: 99
  }
};
