import type { Meta, StoryObj } from '@storybook/react-webpack5';

import Radio from './Radio';

const meta = {
  component: Radio,
} satisfies Meta<typeof Radio>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args:{
    name: 'radio',
    options: ["mihawk upscale", "buggy upscale", "moria upscale"],
     selectedValue: "mihawk upscale",
    onChange: (value: string) => {}, // dummy function
  }
};

export const Disabled: Story = {
  args: {
    name: "radio",
    options: ["mihawk upscale", "buggy upscale", "moria upscale"],
    selectedValue: "mihawk upscale",
    onChange: (value: string) => {}, // dummy function
    disabled: true
  }
};