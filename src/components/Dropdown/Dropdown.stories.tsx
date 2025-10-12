import type { Meta, StoryObj } from '@storybook/react-webpack5';

import Dropdown from './Dropdown';

const meta = {
  component: Dropdown,
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args:{
    disabled:false,
    options: ["mihawk upscale", "buggy upscale", "moria upscale"],
    onChange: (value: string) => {}, // dummy function
  }
};

export const Disabled: Story = {
  args: {
    options: ["mihawk upscale", "buggy upscale", "moria upscale"],
    disabled: true,
    onChange: (value: string) => {}, // dummy function
  }
};