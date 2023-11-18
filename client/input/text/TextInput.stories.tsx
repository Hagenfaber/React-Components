/** @format */

import { StoryObj } from "@storybook/react";
import { TextInput } from "./TextInput";

const story = {
  title: "Client/Input/Text",
  component: TextInput,
};
export default story;

type Story = StoryObj<typeof TextInput>;

// const Template: Story = (args: TextInputProps) => <TextInput {...args} />;

const Template: Story = {
  render: ({ ...args }) => {
    return <TextInput {...args} />;
  },
};

export const Empty = {
  ...Template,
  tags: ["autodocs"],
  args: {},
};

export const Default = {
  ...Template,
  args: {
    label: "Name",
    placeholder: "John Doe",
  },
};
