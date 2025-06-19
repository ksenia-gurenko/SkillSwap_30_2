import type { Meta, StoryObj } from '@storybook/react';
import { NotFound404Page } from '../pages/not-found-404';
import { MemoryRouter } from 'react-router-dom';

const meta: Meta<typeof NotFound404Page> = {
  title: 'Pages/NotFound404',
  component: NotFound404Page,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/non-existent-page']}>
        <Story />
      </MemoryRouter>
    )
  ],
  parameters: {
    layout: 'fullscreen'
  }
};

export default meta;
type Story = StoryObj<typeof NotFound404Page>;

export const Default: Story = {
  render: () => <NotFound404Page />
};
