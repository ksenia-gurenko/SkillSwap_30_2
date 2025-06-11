import type { Meta, StoryObj } from '@storybook/react';
import { AppHeaderUI } from '../shared/ui';
import { MemoryRouter } from 'react-router-dom';

const meta = {
  title: 'AppHeaderUI',
  component: AppHeaderUI,
  tags: ['autodocs'],
  parameters: {
    layout: 'center'
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ]
} satisfies Meta<typeof AppHeaderUI>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CompactHeader: Story = {
  args: {
    isAuth: false,
    isCompact: true,
    bgColor: '#F9FAF7'
  }
};

export const FullHeader: Story = {
  args: {
    isAuth: true,
    userName: 'Мария',
    userAvatarUrl: 'src/stories/assets/avatar_maria.png',
    isCompact: false,
    bgColor: '#F9FAF7'
  }
};

export const UnauthorizedHeader: Story = {
  args: {
    isAuth: false,
    isCompact: false,
    bgColor: '#F9FAF7'
  }
};
