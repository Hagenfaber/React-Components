/** @format */

import { StoryObj } from "@storybook/react";
import { SelectInput } from "./SelectInput";

const story = {
  title: "Client/Input/Select",
  component: SelectInput,
};
export default story;

type Story = StoryObj<typeof SelectInput>;

// const Template: Story = (args: TextInputProps) => <TextInput {...args} />;

const Template: Story = {
  render: ({ ...args }) => {
    return <SelectInput {...args} />;
  },
};

export const Empty = {
  ...Template,
  tags: ["autodocs"],
  args: {
    id: "",
    label: "",
    items: [],
  },
};

export const Default = {
  ...Template,
  args: {
    id: "testingSelect",
    label: "Select",
    items: [
      { value: "1", name: "Item 1" },
      { value: "2", name: "Item 2" },
      { value: "3", name: "Item 3" },
    ],
  },
};
