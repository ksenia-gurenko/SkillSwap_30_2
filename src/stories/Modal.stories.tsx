// src/stories/Modal.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from '../shared/ui/modal/modal';

const meta: Meta<typeof Modal> = {
  title: 'UI/Modal',
  component: Modal,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Базовое модальное окно. Может отображать заголовок, иконку, контент и кнопки.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: 'Видимость модального окна'
    },
    onClose: {
      action: 'closed',
      description: 'Функция закрытия модалки'
    },
    title: {
      control: 'text',
      description: 'Заголовок модального окна'
    },
    icon: {
      table: {
        disable: true
      },
      description: 'SVG-иконка в модальном окне'
    },
    children: {
      control: 'text',
      description: 'Основной контент модального окна'
    },
    primaryButtonText: {
      control: 'text',
      description: 'Текст на основной кнопке'
    },
    secondaryButtonText: {
      control: 'text',
      description: 'Текст на вторичной кнопке'
    },
    onPrimaryButtonClick: {
      action: 'primary clicked',
      description: 'Обработчик клика по основной кнопке'
    },
    onSecondaryButtonClick: {
      action: 'secondary clicked',
      description: 'Обработчик клика по вторичной кнопке'
    }
  }
};

export default meta;

type Story = StoryObj<typeof Modal>;

const UserCircleIcon = () => (
  <svg
    width='100'
    height='100'
    viewBox='0 0 100 100'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M74.925 78.0196C72.0131 74.1654 68.2463 71.0397 63.9212 68.8887C59.596 66.7377 54.8305 65.62 50 65.6238C45.1695 65.62 40.404 66.7377 36.0788 68.8887C31.7537 71.0397 27.9869 74.1654 25.075 78.0196M74.925 78.0196C80.6063 72.9662 84.6171 66.3052 86.4258 58.92C88.2344 51.5347 87.7553 43.7741 85.0519 36.6674C82.3486 29.5607 77.5489 23.4437 71.2891 19.1275C65.0294 14.8113 57.6056 12.5 50.0021 12.5C42.3986 12.5 34.9747 14.8113 28.715 19.1275C22.4553 23.4437 17.6555 29.5607 14.9522 36.6674C12.2489 43.7741 11.7698 51.5347 13.5784 58.92C15.387 66.3052 19.3937 72.9662 25.075 78.0196M74.925 78.0196C68.0659 84.1357 59.1898 87.5103 50 87.4988C40.8087 87.5113 31.9351 84.1366 25.075 78.0196M62.5 40.6238C62.5 43.939 61.183 47.1184 58.8388 49.4626C56.4946 51.8068 53.3152 53.1238 50 53.1238C46.6848 53.1238 43.5054 51.8068 41.1612 49.4626C38.817 47.1184 37.5 43.939 37.5 40.6238C37.5 37.3086 38.817 34.1291 41.1612 31.7849C43.5054 29.4407 46.6848 28.1238 50 28.1238C53.3152 28.1238 56.4946 29.4407 58.8388 31.7849C61.183 34.1291 62.5 37.3086 62.5 40.6238Z'
      stroke='#253017'
      stroke-width='1.5'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
  </svg>
);

const NotificationBellIcon = () => (
  <svg
    width='32'
    height='14'
    viewBox='0 0 32 14'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M1.20801 1.25C2.92551 7.71875 8.99301 12.5 16.208 12.5C23.4268 12.5 29.4868 7.71875 31.208 1.25'
      stroke='#253017'
      stroke-width='1.5'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
  </svg>
);

const NotificationIcon = () => (
  <svg
    width='74'
    height='66'
    viewBox='0.088 0.35 74.35 76.238'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M1.69553 49.3875C0.896777 54.615 4.46303 58.2412 8.82803 60.0487C25.5643 66.9862 48.8518 66.9862 65.588 60.0487C69.953 58.2412 73.5193 54.6112 72.7205 49.3875C72.233 46.1737 69.8068 43.5 68.0105 40.8862C65.6593 37.4212 65.4268 33.645 65.423 29.625C65.4268 14.0925 52.7968 1.5 37.208 1.5C21.6193 1.5 8.98928 14.0925 8.98928 29.625C8.98928 33.645 8.75678 37.425 6.40178 40.8862C4.60928 43.5 2.18678 46.1737 1.69553 49.3875Z'
      stroke='#253017'
      stroke-width='1.5'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <svg
      width='32'
      height='14'
      viewBox='0 0 32 14'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      transform='matrix(0.9999999999999999, 0, 0, 0.9999999999999999, 20.563473685340195, 62.82798131458105)'
    >
      <path
        d='M1.20801 1.25C2.92551 7.71875 8.99301 12.5 16.208 12.5C23.4268 12.5 29.4868 7.71875 31.208 1.25'
        stroke='#253017'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  </svg>
);

const ProposalIcon = () => (
  <svg
    width='78'
    height='78'
    viewBox='0 0 78 78'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M76.5 39C76.5 59.7107 59.7107 76.5 39 76.5C18.2893 76.5 1.5 59.7107 1.5 39C1.5 18.2893 18.2893 1.5 39 1.5C59.7107 1.5 76.5 18.2893 76.5 39Z'
      stroke='#253017'
      stroke-width='1.5'
    />
    <svg
      width='30'
      height='18'
      viewBox='0 0 30 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      transform='matrix(1, 0, 0, 1, 24.23180616, 30.16273353)'
    >
      <path
        d='M0.850586 8.84007L7.35601 15.3457C9.25799 17.2477 12.3417 17.2477 14.2435 15.3456L28.6858 0.902344'
        stroke='#253017'
        stroke-width='1.5'
        stroke-linecap='round'
      />
    </svg>
  </svg>
);

// Базовая
export const DefaultModal: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    title: 'Пожалуйста, войдите в аккаунт',
    icon: [<UserCircleIcon />],
    children: (
      <p>
        Присоединитесь к SkillSwap и обменивайтесь знаниями и навыками с другими
        людьми
      </p>
    ),
    primaryButtonText: 'Войти',
    secondaryButtonText: 'Отмена',
    onPrimaryButtonClick: () => {},
    onSecondaryButtonClick: () => {}
  }
};

// Только с первичной кнопкой
export const PrimaryButtonOnly: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    title: 'Вы предложили обмен',
    icon: [<NotificationIcon />],
    children: <p>Теперь дождитесь подтверждения. Вам придёт уведомление</p>,
    primaryButtonText: 'Готово',
    onPrimaryButtonClick: () => {}
  }
};

// С двумя кнопками
export const TwoButtons: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    title: 'Пожалуйста, войдите в аккаунт',
    icon: [<UserCircleIcon />],
    children: (
      <p>
        Присоединитесь к SkillSwap и обменивайтесь знаниями и навыками с другими
        людьми
      </p>
    ),
    primaryButtonText: 'Войти',
    secondaryButtonText: 'Отмена',
    onPrimaryButtonClick: () => {},
    onSecondaryButtonClick: () => {}
  }
};

// Дополнительная
export const PrimaryButtonOnlyProposal: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    title: 'Ваше предложение создано',
    icon: [<ProposalIcon />],
    children: <p>Теперь вы можете предложить обмен</p>,
    primaryButtonText: 'Готово',
    onPrimaryButtonClick: () => {}
  }
};