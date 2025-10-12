import type { Meta, StoryObj } from '@storybook/react-webpack5';

import HeroImage from './Hero-Image';
import { Children } from 'react';

const meta = {
  component: HeroImage,
} satisfies Meta<typeof HeroImage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    bgimage: "https://preview.redd.it/mihawks-upscaling-gets-more-terrifying-as-each-chapter-goes-v0-t3dw8lil335f1.png?auto=webp&s=49a9eb6c42a47bae8a73a3ae0cfa3be9354e63ac"
  }
};

export const Disabled: Story = {
  args: {
    bgimage: "https://preview.redd.it/mihawks-upscaling-gets-more-terrifying-as-each-chapter-goes-v0-t3dw8lil335f1.png?auto=webp&s=49a9eb6c42a47bae8a73a3ae0cfa3be9354e63ac",
    disabled: true
  }
};