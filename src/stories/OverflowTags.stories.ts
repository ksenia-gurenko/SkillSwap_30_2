import type { Meta, StoryObj } from '@storybook/react';
import { OverflowTags } from '../widgets';

const meta = {
  title: 'Widgets/OverflowTags',
  component: OverflowTags,
  tags: ['autodocs'],
  parameters: {
    layout: 'center'
  }
} satisfies Meta<typeof OverflowTags>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OverflowTagsNotOver: Story = {
  args: {
    items: ['Медитация', 'Лень', 'Танцы'],
    containerWidth: 284,
    gap: 8
  }
};

export const OverflowTags2Over: Story = {
  args: {
    items: [
      'Тайм менеджмент',
      'Медитация',
      'Французский язык',
      'Немецкий язык'
    ],
    containerWidth: 284,
    gap: 8
  }
};

export const OverflowTags3Over: Story = {
  args: {
    items: [
      'Тайм менеджмент',
      'Медитация',
      'Французский язык',
      'Немецкий язык',
      'Японский язык'
    ],
    containerWidth: 284,
    gap: 8
  }
};
