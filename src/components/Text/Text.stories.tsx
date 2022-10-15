import { Meta, StoryObj } from "@storybook/react";
import { Text, TextProps } from "./";

export default {
	title: "Components/Text",
	component: Text,
	args: {
		children:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla vitae massa a cursus. Sed eget vulputate magna. Morbi quam risus, tincidunt ut eleifend nec, sollicitudin et diam. Morbi nisl nibh, gravida ut semper a, tincidunt at ante. Aenean condimentum dolor ut tellus rutrum pharetra. Nam tincidunt lacinia nunc gravida posuere. Donec ornare sollicitudin consequat. Quisque nulla arcu, sagittis at pellentesque nec, maximus vel libero. Nunc sed tincidunt ex, ac venenatis eros. Integer faucibus sem mi, eget hendrerit orci malesuada ac. Cras aliquet sem erat, nec vestibulum sapien convallis sit amet. Quisque mollis sollicitudin nisl, vitae ultricies lorem varius at. Sed pulvinar lorem vel justo ullamcorper, sed hendrerit ipsum mattis."
	},
	argTypes: {
		size: {
			options: ["sm", "md", "lg"],
			control: {
				type: "inline-radio"
			}
		},
		className: {
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
} as Meta<TextProps>;

export const Small: StoryObj<TextProps> = {
	args: {
		size: "sm"
	}
};
export const Medium: StoryObj<TextProps> = {};
export const Large: StoryObj<TextProps> = {
	args: {
		size: "lg"
	}
};
export const CustomTag: StoryObj<TextProps> = {
	args: {
		asChild: true,
		children: (
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla
				vitae massa a cursus. Sed eget vulputate magna. Morbi quam risus,
				tincidunt ut eleifend nec, sollicitudin et diam. Morbi nisl nibh,
				gravida ut semper a, tincidunt at ante. Aenean condimentum dolor ut
				tellus rutrum pharetra. Nam tincidunt lacinia nunc gravida posuere.
				Donec ornare sollicitudin consequat. Quisque nulla arcu, sagittis at
				pellentesque nec, maximus vel libero. Nunc sed tincidunt ex, ac
				venenatis eros. Integer faucibus sem mi, eget hendrerit orci malesuada
				ac. Cras aliquet sem erat, nec vestibulum sapien convallis sit amet.
				Quisque mollis sollicitudin nisl, vitae ultricies lorem varius at. Sed
				pulvinar lorem vel justo ullamcorper, sed hendrerit ipsum mattis.
			</p>
		)
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
