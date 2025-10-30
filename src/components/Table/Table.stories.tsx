import type { Meta, StoryObj } from "@storybook/react-webpack5";

import Table from "./Table";
import Row from "./TableRow";
import Header from "./TableHeader";
import Footer from "./TableFooter";
import Cell from "./TableCell";

const meta = {
  component: Table,
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    disabled: false,
    children: (
      <>
        <Header>
          <Row>
            <Cell>Header Cell</Cell>
            <Cell>Header Cell2</Cell>
            <Cell>Header Cell3</Cell>
            <Cell>Header Cell4</Cell>
          </Row>
        </Header>
        <Row>
          <Cell>Data Cell</Cell>
          <Cell>Data Cell2</Cell>
          <Cell>Data Cell3</Cell>
          <Cell>Data Cell4</Cell>
        </Row>
        <Footer>
          <Row>
            <Cell>Footer Cell</Cell>
            <Cell>Footer Cell2</Cell>
            <Cell>Footer Cell3</Cell>
            <Cell disabled={true}>Footer Cell4</Cell>
          </Row>
        </Footer>
      </>
    ),
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: (
      <>
        <Header>
          <Row>
            <Cell>Header Cell</Cell>
            <Cell>Header Cell2</Cell>
            <Cell>Header Cell3</Cell>
            <Cell>Header Cell4</Cell>
          </Row>
        </Header>
        <Row>
          <Cell>Data Cell</Cell>
          <Cell>Data Cell2</Cell>
          <Cell>Data Cell3</Cell>
          <Cell>Data Cell4</Cell>
        </Row>
        <Footer>
          <Row>
            <Cell>Footer Cell</Cell>
            <Cell>Footer Cell2</Cell>
            <Cell>Footer Cell3</Cell>
            <Cell disabled={true}>Footer Cell4</Cell>
          </Row>
        </Footer>
      </>
    ),
  },
};
