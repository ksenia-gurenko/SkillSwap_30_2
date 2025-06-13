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
    text: 'Популярное, Новое',
    level: 'h2',
  },
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
      <div>
        <div style={{ fontSize: 12, color: '#888' }}>Jost Medium</div>
        <div style={{ fontSize: 12, color: '#888' }}>32px / 40px</div>
      </div>
      <SectionHeader {...args} />
    </div>
  ),
};

export const H3: Story = {
  args: {
    text: 'Фильтры, Расскажите немного о себе, Дом и уют',
    level: 'h3',
  },
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
      <div>
        <div style={{ fontSize: 12, color: '#888' }}>Jost Medium</div>
        <div style={{ fontSize: 12, color: '#888' }}>24px / 28px</div>
      </div>
      <SectionHeader {...args} />
    </div>
  ),
};

export const H4: Story = {
  args: {
    text: 'Навыки, Пол автора',
    level: 'h4',
  },
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
      <div>
        <div style={{ fontSize: 12, color: '#888' }}>Jost Medium</div>
        <div style={{ fontSize: 12, color: '#888' }}>20px / 24px</div>
      </div>
      <SectionHeader {...args} />
    </div>
  ),
};

export const H5: Story = {
  args: {
    text: 'Иван, Анна',
    level: 'h5',
  },
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
      <div>
        <div style={{ fontSize: 12, color: '#888' }}>Open Sans SemiBold</div>
        <div style={{ fontSize: 12, color: '#888' }}>20px / 24px</div>
      </div>
      <SectionHeader {...args} />
    </div>
  ),
};

export const H6: Story = {
  args: {
    text: 'Может научить:, Хочет научиться:',
    level: 'h6',
  },
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
      <div>
        <div style={{ fontSize: 12, color: '#888' }}>Roboto Medium</div>
        <div style={{ fontSize: 12, color: '#888' }}>16px / 24px</div>
      </div>
      <SectionHeader {...args} />
    </div>
  ),
}; 