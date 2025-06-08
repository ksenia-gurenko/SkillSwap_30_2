import type { Meta, StoryObj } from '@storybook/react';
import { UserInfoUI } from '../shared/ui';

const meta = {
  title: 'UserInfoUI',
  component: UserInfoUI,
  tags: ['autodocs'],
  parameters: {
    layout: 'center'
  }
} satisfies Meta<typeof UserInfoUI>;

export default meta;
type Story = StoryObj<typeof meta>;

export const UserInfoVictoria: Story = {
  args: {
    src: 'src/stories/assets/avatar.png',
    name: 'Виктория',
    city: 'Кемерово',
    age: 30
  }
};
