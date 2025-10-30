import type { Meta, StoryObj } from "@storybook/react-webpack5";

import Header from "./TableHeader";
import Table from "./Table";
const meta = {
  component: Header,
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    disabled: false,

    children: (
      <Table>
        <Header>Header stories</Header>
      </Table>
    ),
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,

    children: (
      <Table>
        <Header>Header stories</Header>
      </Table>
    ),
  },
};
