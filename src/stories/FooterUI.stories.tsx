import type { Meta, StoryObj } from '@storybook/react';
import { FooterUI } from '../shared/ui';

const meta: Meta<typeof FooterUI> = {
  title: 'UI/FooterUI',
  component: FooterUI,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Компонент Footer - подвал сайта с логотипом, ссылками и копирайтом'
      }
    }
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof FooterUI>;

/**
 * Стандартный вид Footer компонента
 */
export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Стандартный вид Footer с логотипом, навигационными ссылками и копирайтом'
      }
    }
  }
};

/**
 * Footer с белым фоном
 */
export const WithBackground: Story = {
  args: {},
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: '#ffffff', padding: '20px' }}>
        <Story />
      </div>
    )
  ],
  parameters: {
    docs: {
      description: {
        story: 'Footer на белом фоне для лучшей визуализации компонента'
      }
    }
  }
};
