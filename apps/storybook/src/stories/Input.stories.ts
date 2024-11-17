// apps/storybook/stories/Input.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '@alvin/ui';

const meta: Meta<typeof Input> = {
  title: 'Components/Form/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'password', 'email'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    error: {
      control: 'text',
    },
    label: {
      control: 'text',
    },
    placeholder: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    required: {
      control: 'boolean',
    },
  },
  // 为所有 story 设置默认参数
  parameters: {
    docs: {
      description: {
        component: '输入框组件，支持多种类型和状态。',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: '请输入内容',
  },
};

export const WithLabel: Story = {
  args: {
    label: '用户名',
    placeholder: '请输入用户名',
    required: true,
  },
};

export const WithError: Story = {
  args: {
    label: '密码',
    type: 'password',
    error: '密码长度不能少于 6 位',
  },
};

export const Disabled: Story = {
  args: {
    label: '禁用状态',
    disabled: true,
    value: '禁用内容',
  },
};