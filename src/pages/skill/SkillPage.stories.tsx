import type { Meta, StoryObj } from '@storybook/react';
import { SkillPage } from './skillPage';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import type { Skill } from '../../entities/skill/model';

const mockSkill: Skill = {
  _id: '1',
  title: 'React разработка',
  description: 'Научу создавать современные SPA-приложения',
  category: 'Программирование',
  isAvailable: true,
  canTeach: ['React', 'TypeScript', 'Redux'],
  wantsToLearn: ['UI/UX дизайн', 'Node.js'],
  user: {
    _id: 'user1',
    name: 'Иван Петров',
    avatar: 'https://i.pravatar.cc/150?img=1',
    city: 'Москва',
    age: 28
  }
};

const mockRelatedSkills: Skill[] = [
  {
    _id: '2',
    title: 'UI/UX дизайн',
    description: 'Основы Figma и проектирование интерфейсов',
    category: 'Дизайн',
    isAvailable: true,
    canTeach: ['Figma', 'Adobe XD'],
    wantsToLearn: ['Прототипирование'],
    user: { 
      _id: 'user2',
      name: 'Анна Сидорова', 
      avatar: 'https://i.pravatar.cc/150?img=3',
      city: 'Санкт-Петербург', 
      age: 25 
    }
  },
  {
    _id: '3',
    title: 'JavaScript продвинутый',
    description: 'Современный ES6+ и паттерны проектирования',
    category: 'Программирование',
    isAvailable: true,
    canTeach: ['JavaScript', 'ES6+'],
    wantsToLearn: ['WebAssembly'],
    user: { 
      _id: 'user3',
      name: 'Максим Иванов', 
      avatar: 'https://i.pravatar.cc/150?img=5',
      city: 'Казань', 
      age: 32 
    }
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
    layout: 'fullscreen',
    mockData: [
      {
        url: '/db/skills.json',
        method: 'GET',
        status: 200,
        response: [mockSkill, ...mockRelatedSkills]
      }
    ]
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
    mockSkill: null,
    mockLoading: false,
    mockError: 'Навык не найден'
  }
};

export const WithMultiplePhotos: Story = {
  args: {
    mockSkill: {
      ...mockSkill,
      user: {
        ...mockSkill.user,
        avatar: '/photo1.jpg' // Первая фото для галереи
      }
    },
    mockRelatedSkills,
    mockLoading: false
  }
};

export const MinimalData: Story = {
  args: {
    mockSkill: {
      _id: '4',
      title: 'Минимальные данные',
      description: '',
      category: 'Другое',
      isAvailable: true,
      canTeach: [],
      wantsToLearn: [],
      user: {
        _id: 'user4',
        name: '',
        avatar: '',
        city: '',
        age: 0
      }
    },
    mockLoading: false
  }
};