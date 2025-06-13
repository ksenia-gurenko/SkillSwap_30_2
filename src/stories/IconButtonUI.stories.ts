import type { Meta, StoryObj } from '@storybook/react';
import { IconButtonUI } from '../shared/ui';
import { ICON_TYPE } from '../shared/lib/constants';

const meta = {
    title: 'IconButtonUI',
    component: IconButtonUI,
    tags: ['autodocs'],
    parameters: {
        layout: 'center'
    }
} satisfies Meta<typeof IconButtonUI>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Moon: Story = {
    args: {
        type: ICON_TYPE.MOON,
        isActive: false,
        onClick: () => { }
    }
};

export const NOTIFICATION: Story = {
    args: {
        type: ICON_TYPE.NOTIFICATION,
        isActive: false,
        onClick: () => { }
    }
};

export const LIKE: Story = {
    args: {
        type: ICON_TYPE.LIKE,
        isActive: false,
        onClick: () => { }
    }
};

export const CHEVRON_DOWN: Story = {
    args: {
        type: ICON_TYPE.CHEVRON_DOWN,
        isActive: false,
        onClick: () => { }
    }
};

export const SEARCH: Story = {
    args: {
        type: ICON_TYPE.SEARCH,
        isActive: false,
        onClick: () => { }
    }
};