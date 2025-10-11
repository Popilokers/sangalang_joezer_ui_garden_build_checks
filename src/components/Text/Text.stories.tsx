import type { Meta, StoryObj } from '@storybook/react-webpack5';

import Text from './Text';

const meta = {
  component: Text,
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "100px",
    color: "red",
    children: "red"
  }
};