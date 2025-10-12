import type { Meta, StoryObj } from '@storybook/react-webpack5';

import Label from './Label';

const meta = {
  component: Label,
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: "red",
    size: "30px",
    children: "ASFASF",
    disabled: false
  }
};

export const Disabled: Story = {
  args: {
    color: "red",
    size: "30px",
    children: "ASFASF",
    disabled: true
  }
};
