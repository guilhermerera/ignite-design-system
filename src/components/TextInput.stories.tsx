import { Meta, StoryObj } from "@storybook/react";
import { Envelope } from "phosphor-react";
import { TextInput, TextInputRootProps } from "./TextInput";

export default {
	title: "Components/TextInput",
	component: TextInput.Root,
	args: {
		children: [<TextInput.Input placeholder='Type your text here.' />]
	},
	argTypes: {}
} as Meta<TextInputRootProps>;

export const Default: StoryObj<TextInputRootProps> = {
	argTypes: {
		children: {
			table: {
				disable: true
			}
		}
	}
};
export const WithIcons: StoryObj<TextInputRootProps> = {
	args: {
		children: [
			<TextInput.Icon>
				<Envelope />
			</TextInput.Icon>,
			<TextInput.Input placeholder='user@example.com' />
		]
	},
	argTypes: {
		children: {
			table: {
				disable: true
			}
		}
	}
};
