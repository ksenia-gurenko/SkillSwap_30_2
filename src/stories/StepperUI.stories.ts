import type { Meta, StoryObj } from '@storybook/react';
import { StepperUI } from '../shared/ui';

const meta = {
  title: 'StepperUI',
  component: StepperUI,
  tags: ['autodocs'],
  parameters: {
    layout: 'center'
  }
} satisfies Meta<typeof StepperUI>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OneOfThree: Story = {
  args: {
    currentStep: 1,
    totalSteps: 3
  }
};

export const TwoOfThree: Story = {
  args: {
    currentStep: 2,
    totalSteps: 3
  }
};

export const ThreeOfThree: Story = {
  args: {
    currentStep: 3,
    totalSteps: 3
  }
};
