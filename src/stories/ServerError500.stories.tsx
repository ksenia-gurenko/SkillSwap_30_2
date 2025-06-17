import type { Meta, StoryObj } from '@storybook/react';
import { ServerError500Page } from '../pages/server-error-500';

const meta: Meta<typeof ServerError500Page> = {
  title: 'Pages/ServerError500',
  component: ServerError500Page,
  parameters: {
    layout: 'fullscreen'
  }
};

export default meta;
type Story = StoryObj<typeof ServerError500Page>;

export const Default: Story = {
  render: () => <ServerError500Page />
};
