import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '../shared/ui/checkbox/checkbox';

const meta = {
  title: 'UI/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    layout: 'center',
    docs: {
      description: {
        component:
          'Компонент Checbox подходит для отображения чекбоксов у которых есть дочерние элементы и у которых их нет.'
      }
    }
  }
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Category: Story = {
  args: {
    id: '1',
    chekboxCategory: true,
    isChecked: false,
    onChange: () => {},
    label: 'Иностранные языки'
  }
};

export const Category_isChecked: Story = {
  args: {
    id: '1',
    chekboxCategory: true,
    isChecked: true,
    onChange: () => {},
    label: 'Иностранные языки'
  }
};

export const Subcategory: Story = {
  args: {
    id: '1',
    chekboxCategory: false,
    isChecked: false,
    onChange: () => {},
    label: 'Английский'
  }
};

export const Subcategory_isChecked: Story = {
  args: {
    id: '1',
    chekboxCategory: false,
    isChecked: true,
    onChange: () => {},
    label: 'Английский'
  }
};
