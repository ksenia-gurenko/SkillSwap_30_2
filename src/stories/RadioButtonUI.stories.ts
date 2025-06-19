import type { Meta, StoryObj } from '@storybook/react';
import { RadioButtonUI } from '../shared/ui/radio-button/radio-button';

const meta = {
  title: 'UI/RadioButton',
  component: RadioButtonUI,
  tags: ['autodocs'],
  parameters: {
    layout: 'center'
  }
} satisfies Meta<typeof RadioButtonUI>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Unselected: Story = {
  args: {
    selected: false,
    onChange: () => {},
    label: 'Могу научить'
  }
};

export const Selected: Story = {
  args: {
    selected: true,
    onChange: () => {},
    label: 'Могу научить'
  }
};
