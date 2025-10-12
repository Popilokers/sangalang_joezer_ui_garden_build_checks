import type { Meta, StoryObj } from '@storybook/react-webpack5';

import Footer from './TableFooter';
import Table from './Table';

const meta = {
  component: Footer,
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof meta>;


export const Default: Story = {
  args:{
    disabled: false,
    children:(
      <Table>
        <Footer>
          footer stories
        </Footer>
      </Table>
    )
  }
};

export const Disabled: Story = {
  args: {
    disabled: true,

        children:(
      <Table>
        <Footer>
          footer stories
        </Footer>
      </Table>
    )
  }
};