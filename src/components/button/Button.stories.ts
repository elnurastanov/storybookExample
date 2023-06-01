import { Meta, StoryObj } from "@storybook/react";
import Button from "./index";
import { COLORS } from "../../constants";

type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
};

const argTypes = {
  color: { control: "select", options: COLORS },
  onClick: { action: "clicked" },
};

const args = {
  label: "Click me",
  color: "primary",
  disabled: false,
  loading: false,
};

export const Primary: Story = {
  argTypes,
  args: {
    ...args,
    color: "primary",
  },
};

export const Secondary: Story = {
  argTypes,
  args: {
    ...args,
    color: "secondary",
  },
};

export default meta;
