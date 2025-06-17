import type { Meta, StoryObj } from '@storybook/react';
import { SkillCard } from '../widgets';

const meta = {
  title: 'Widgets/SkillCard',
  component: SkillCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'center'
  }
} satisfies Meta<typeof SkillCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SkillCardVictoria: Story = {
  args: {
    user: {
      avatar: 'src/stories/assets/avatar_victoria.png',
      name: 'Виктория',
      city: 'Кемерово',
      age: 30
    },
    canTeach: ['Игра на барабанах'],
    wantsToLearn: [
      'Тайм менеджмент',
      'Медитация',
      'Французский язык',
      'Немецкий язык'
    ],
    onLikeToggle: () => {},
    isLiked: false,
    onDetailsClick: () => {}
  }
};

export const SkillCardSofia: Story = {
  args: {
    user: {
      avatar: 'src/stories/assets/avatar_sofia.png',
      name: 'София',
      city: 'Абакан',
      age: 24
    },
    canTeach: ['Медитация'],
    wantsToLearn: [
      'Французский язык',
      'Немецкий язык',
      'Тайм менеджмент',
      'Игра на барабанах'
    ],
    onLikeToggle: () => {},
    isLiked: false,
    onDetailsClick: () => {}
  }
};

export const SkillCardMichail: Story = {
  args: {
    user: {
      avatar: 'src/stories/assets/avatar_michail.png',
      name: 'Михаил',
      city: 'Москва',
      age: 33
    },
    canTeach: ['Прокрастинация', 'Лень', 'Бурятский язык'],
    wantsToLearn: ['Бегать', 'Прыгать', 'Сидеть'],
    onLikeToggle: () => {},
    isLiked: false,
    onDetailsClick: () => {}
  }
};
