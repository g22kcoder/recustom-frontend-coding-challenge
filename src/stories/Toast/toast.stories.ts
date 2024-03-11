import type { Meta, StoryObj } from '@storybook/react';

import { Toast } from './toast';


const meta = {
  title: 'Example/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;


export const toast: Story = {
  args: {
    type: 'success',
    title: 'title here'
  },
};


