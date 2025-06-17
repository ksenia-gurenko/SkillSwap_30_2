import type { Meta, StoryObj } from '@storybook/react';
import { NotFound404Page } from '../pages/not-found-404';

const meta: Meta<typeof NotFound404Page> = {
  title: 'Pages/NotFound404',
  component: NotFound404Page,
  parameters: {
    layout: 'fullscreen'
  }
};

export default meta;
type Story = StoryObj<typeof NotFound404Page>;

export const Default: Story = {
  render: () => <NotFound404Page />
};
