import type { Meta, StoryObj } from '@storybook/react-webpack5';

import TableRow from './TableRow';
import Cell from './TableCell';
import Row from './TableRow';
const meta = {
  component: TableRow,
} satisfies Meta<typeof TableRow>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    disabled: false,
    children: (
      <>
        <Row>
          <Cell>Row Cell</Cell>
        </Row>
      </>
    ),
  }
};

export const Disabled: Story = {
  args: {
    disabled: true,

   children: (
      <>
        <Row>
          <Cell>Row 1</Cell>
          <Cell>Row 2</Cell>
          <Cell>Row 3</Cell>
          <Cell>Row 4</Cell>
          <Cell>Row 5</Cell>
        </Row>
      </>
    ),
  }
};