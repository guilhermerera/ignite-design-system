import { Meta, StoryObj } from "@storybook/react";
import { Envelope } from "phosphor-react";
import { TextInput, TextInputRootProps } from "./";

export default {
	title: "Components/TextInput",
	component: TextInput.Root,
	args: {
		children: [<TextInput.Input placeholder='Type your text here.' />]
	},
	argTypes: {
		children: {
			table: {
				disable: true
			}
		}
	}
} as Meta<TextInputRootProps>;

export const Default: StoryObj<TextInputRootProps> = {};
export const WithIcons: StoryObj<TextInputRootProps> = {
	args: {
		children: [
			<TextInput.Icon>
				<Envelope />
			</TextInput.Icon>,
			<TextInput.Input placeholder='user@example.com' />
		]
	}
};
