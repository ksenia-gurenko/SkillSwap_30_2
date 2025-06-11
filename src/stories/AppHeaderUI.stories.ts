import type { Meta, StoryObj } from '@storybook/react';
import { AppHeaderUI } from '../shared/ui';

const meta = {
  title: 'AppHeaderUI',
  component: AppHeaderUI,
  tags: ['autodocs'],
  parameters: {
    layout: 'center'
  }
} satisfies Meta<typeof AppHeaderUI>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Header: Story = {
  args: {
    isAuth: true,
    isCompact: true
  }
};
