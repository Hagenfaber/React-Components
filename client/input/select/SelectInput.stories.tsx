/** @format */

import { StoryObj } from "@storybook/react";
import { SelectInput } from "./SelectInput";

export default {
  title: "Client/Input/Select",
  component: SelectInput,
};

type Story = StoryObj<typeof SelectInput>;

// const Template: Story = (args: TextInputProps) => <TextInput {...args} />;

const Template: Story = {
  render: ({ ...args }) => {
    return <SelectInput {...args} />;
  },
};

export const Empty = {
  ...Template,
  args: {},
};

export const Default = {
  ...Template,
  args: {},
};
