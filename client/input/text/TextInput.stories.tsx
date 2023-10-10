/** @format */

import {StoryObj} from "@storybook/react";
import {TextInput, TextInputProps} from "./TextInput";

export default {
	title: "Client/Input/Text",
	component: TextInput,
};

type Story = StoryObj<typeof TextInput>;

// const Template: Story = (args: TextInputProps) => <TextInput {...args} />;

const Template: Story = {
	render: ({...args}) => {
		return <TextInput {...args} />;
	},
};

export const Empty = {
	...Template,
	args: {},
};

export const Default = {
	...Template,
	args: {
		label: "Name",
		placeholder: "John Doe",
	},
};
