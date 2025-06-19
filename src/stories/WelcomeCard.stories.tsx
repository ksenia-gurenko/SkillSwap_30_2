import type { Meta, StoryObj } from "@storybook/react";
import { WelcomeCard } from "../shared/ui/welcome-card/welcome-card";

const meta: Meta<typeof WelcomeCard> = {
    title: "UI/WelcomeCard",
    component: WelcomeCard,
    tags: ["autodocs"]
}

export default meta;
type Story = StoryObj<typeof WelcomeCard>;

export const FirstStep: Story = {
    args: {
        step: "1"
    }
}

export const SecondStep: Story = {
    args: {
        step: "2"
    }
}

export const ThirdStep: Story = {
    args: {
        step: "3"
    }
}