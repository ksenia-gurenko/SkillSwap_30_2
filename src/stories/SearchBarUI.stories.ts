import type { Meta, StoryObj } from '@storybook/react';
import {SearchInput} from '../shared/ui/searchBar/searchBar';

const meta: Meta<typeof SearchInput> = {
    title: 'UI/SearchInput',
      component: SearchInput,
      parameters: {
        layout: 'centered'
      },
      tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof SearchInput>;

export const Default: Story = {
    args: {
        placeholder: 'Искать навык'
      }
  };