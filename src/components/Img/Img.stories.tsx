import type { Meta, StoryObj } from '@storybook/react-webpack5';

import Img from './Img';

const meta = {
  component: Img,
} satisfies Meta<typeof Img>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    alt: "Mihawk Upscale",
    src: "https://preview.redd.it/mihawks-upscaling-gets-more-terrifying-as-each-chapter-goes-v0-t3dw8lil335f1.png?auto=webp&s=49a9eb6c42a47bae8a73a3ae0cfa3be9354e63ac",
    height: "100",
    width: "500",
    disabled: false
  }
};

export const Disabled: Story = {
  args: {
    alt: "Mihawk Upscale",
    src: "https://preview.redd.it/mihawks-upscaling-gets-more-terrifying-as-each-chapter-goes-v0-t3dw8lil335f1.png?auto=webp&s=49a9eb6c42a47bae8a73a3ae0cfa3be9354e63ac",
    height: "100",
    width: "500",
    disabled: true
  }
};