import type { Meta, StoryObj } from '@storybook/react';
import { SkillPage } from './skillPage';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import type { Skill } from '../../entities/skill/model';

const mockSkill: Skill = {
  id: '1',
  title: 'React разработка',
  description: 'Научу создавать современные SPA-приложения',
  category: 'Программирование',
  isAvailable: true,
  wantsToLearn: ['UI/UX дизайн'],
  author: {
    name: 'Иван Петров',
    avatarUrl: 'https://i.pravatar.cc/150?img=1',
    city: 'Москва',
    age: 28
  }
};

const mockRelatedSkills: Skill[] = [
  {
    id: '2',
    title: 'UI/UX дизайн',
    description: 'Основы Figma и проектирование интерфейсов',
    category: 'Дизайн',
    isAvailable: true,
    author: { name: 'Анна Сидорова', city: 'Санкт-Петербург', age: 25 }
  }
];

const meta = {
  title: 'Pages/SkillPage',
  component: SkillPage,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/skill/1']}>
        <Routes>
          <Route path="/skill/:id" element={<Story />} />
        </Routes>
      </MemoryRouter>
    )
  ],
  parameters: {
    layout: 'fullscreen'
  }
} satisfies Meta<typeof SkillPage>;

export default meta;

type Story = StoryObj<typeof SkillPage>;

export const Default: Story = {
  args: {
    mockSkill,
    mockRelatedSkills,
    mockLoading: false
  }
};

export const LoadingState: Story = {
  args: {
    mockLoading: true
  }
};

export const ErrorState: Story = {
  args: {
    mockError: 'Ошибка загрузки данных'
  }
};

export const NoSkillFound: Story = {
  args: {
    mockSkill: undefined,
    mockLoading: false
  }
};