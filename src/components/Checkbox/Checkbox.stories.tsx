import { Meta, StoryObj } from "@storybook/react";
import { Checkbox, CheckboxProps } from "./";

export default {
	title: "Components/Checkbox",
	component: Checkbox,
	args: {
		label: "Checkbox Label"
	},
	argTypes: {}
} as Meta<CheckboxProps>;

export const Default: StoryObj<CheckboxProps> = {
	argTypes: {
		asChild: {
			table: {
				disable: true
			}
		}
	}
};
