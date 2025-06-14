import type { Meta, StoryObj } from '@storybook/react';
import { LogoUI } from '../shared/ui';

const meta = {
  title: 'LogoUI',
  component: LogoUI,
  tags: ['autodocs'],
  parameters: {
    layout: 'center'
  }
} satisfies Meta<typeof LogoUI>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Logo: Story = {};
