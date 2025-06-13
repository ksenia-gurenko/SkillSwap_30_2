import type { Meta, StoryObj } from '@storybook/react';
import { UserInfoUI } from '../shared/ui';

const meta = {
  title: 'UI/UserInfoUI',
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
    src: 'src/stories/assets/avatar_victoria.png',
    name: 'Виктория',
    city: 'Кемерово',
    age: 30
  }
};

export const UserInfoSofia: Story = {
  args: {
    src: 'src/stories/assets/avatar_sofia.png',
    name: 'София',
    city: 'Абакан',
    age: 24
  }
};

export const UserInfoMichailWithInvalidAge: Story = {
  args: {
    src: 'src/stories/assets/avatar_michail.png',
    name: 'Михаил',
    city: 'Новосибирск',
    age: -5
  }
};
