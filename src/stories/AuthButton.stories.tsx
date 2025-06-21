import type { Meta, StoryObj } from "@storybook/react";
import { AuthButton } from "../shared/ui/auth-button/auth-button";

const meta: Meta<typeof AuthButton> = {
    title: "UI/AuthButton",
    component: AuthButton,
    tags: ['autodocs'],
}

export default meta;

type Story = StoryObj<typeof AuthButton>;

export const Google: Story = {
    args: {
        icon: "google"
    }
};

export const Apple: Story = {
    args: {
        icon: "apple"
    }
}