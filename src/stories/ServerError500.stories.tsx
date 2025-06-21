import type { Meta, StoryObj } from '@storybook/react';
import { ServerError500Page } from '../pages/server-error-500';
import { MemoryRouter } from 'react-router-dom';

const meta: Meta<typeof ServerError500Page> = {
  title: 'Pages/ServerError500',
  component: ServerError500Page,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ],
  parameters: {
    layout: 'fullscreen'
  }
};

export default meta;
type Story = StoryObj<typeof ServerError500Page>;

export const Default: Story = {
  render: () => <ServerError500Page />
};
