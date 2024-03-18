import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Button from './Button';

const meta = {
    title: 'Atoms/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },

    tags: ['autodocs'],

    args: {
        onClick: fn(),
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Play: Story = {
    args: {
        text: "Play",
    },
};

export const Home: Story = {
    args: {
        text: "Home",
    },
};

export const Ranking: Story = {
    args: {
        text: "Ranking",
    },
};