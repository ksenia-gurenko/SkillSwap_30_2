import type { Meta, StoryObj } from '@storybook/react';
import { SectionHeader } from '../shared/ui/section-header';

const meta: Meta<typeof SectionHeader> = {
  title: 'UI/SectionHeader',
  component: SectionHeader,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SectionHeader>;

export const H2: Story = {
  args: {
    text: 'Популярное',
    level: 'h2',
  },
};

export const H3: Story = {
  args: {
    text: 'Фильтры',
    level: 'h3',
  },
};

export const H4: Story = {
  args: {
    text: 'Навыки',
    level: 'h4',
  },
};

export const H5: Story = {
  args: {
    text: 'Иван',
    level: 'h5',
  },
};

export const H6: Story = {
  args: {
    text: 'Может научить:',
    level: 'h6',
  },
}; 