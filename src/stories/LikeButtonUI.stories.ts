import type { Meta, StoryObj } from '@storybook/react';
import { LikeButtonUI } from '../shared/ui';

const meta = {
  title: 'LikeButtonUI',
  component: LikeButtonUI,
  tags: ['autodocs'],
  parameters: {
    layout: 'center'
  }
} satisfies Meta<typeof LikeButtonUI>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ActiveLike: Story = {
  args: {
    isActive: true,
    onClick: () => {}
  }
};

export const InactiveLike: Story = {
  args: {
    isActive: false,
    onClick: () => {}
  }
};