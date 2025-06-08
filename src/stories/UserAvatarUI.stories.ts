import type { Meta, StoryObj } from '@storybook/react';
import { UserAvatarUI } from '../shared/ui';
import { USER_AVATAR_SIZE } from '../shared/lib/constants';

const meta = {
  title: 'UserAvatarUI',
  component: UserAvatarUI,
  tags: ['autodocs'],
  parameters: {
    layout: 'center'
  }
} satisfies Meta<typeof UserAvatarUI>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SmallUserAvatar: Story = {
  args: {
    src: './assets/avatar.jpg',
    size: USER_AVATAR_SIZE.SMALL
  }
};

export const MediumUserAvatar: Story = {
  args: {
    src: './assets/avatar.jpg',
    size: USER_AVATAR_SIZE.MEDIUM
  }
};

export const LargeUserAvatar: Story = {
  args: {
    src: './assets/avatar.jpg',
    size: USER_AVATAR_SIZE.LARGE
  }
};
