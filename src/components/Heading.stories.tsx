import { Meta, StoryObj } from "@storybook/react";
import { Heading, HeadingProps } from "./Heading";

export default {
	title: "Components/Titles",
	component: Heading,
	args: {
		children: "Lorem ipsum dolor sit amet"
	},
	argTypes: {
		size: {
			options: ["sm", "md", "lg"],
			control: {
				type: "inline-radio"
			}
		}
	}
} as Meta<HeadingProps>;

export const Small: StoryObj<HeadingProps> = {
	args: {
		size: "sm"
	}
};
export const Medium: StoryObj<HeadingProps> = {};
export const Large: StoryObj<HeadingProps> = {
	args: {
		size: "lg"
	}
};
export const CustomTag: StoryObj<HeadingProps> = {
	args: {
		asChild: true,
		children: <h1>Lorem ipsum dolor sit amet</h1>
	},
	argTypes: {
		children: {
			table: {
				disable: true
			}
		},
		asChild: {
			table: {
				disable: true
			}
		}
	}
};
