import { InputHTMLAttributes, ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";

//Text Input Root Element
export interface TextInputRootProps {
	children: ReactNode;
}

function TextInputRoot({ children }: TextInputRootProps) {
	return (
		<div className='flex items-center gap-3 py-4 px-3 rounded w-full h-12 bg-gray-800  focus-within:ring-2 ring-cyan-500'>
			{children}
		</div>
	);
}

TextInputRoot.displayName = "TextInput.Root";

//Text Input Icon Element
export interface TextInputIconProps {
	children: ReactNode;
}

function TextInputIcon({ children }: TextInputIconProps) {
	return <Slot className='w-6 h-6 text-gray-400 '>{children}</Slot>;
}
TextInputIcon.displayName = "TextInput.Icon";

//Text Input Input Field Element
export interface TextInputInputProps
	extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput(props: TextInputInputProps) {
	return (
		<input
			type='text'
			{...props}
			className='bg-transparent flex-1 outline-none text-gray-100 text-xs placeholder:text-gray-400'
		/>
	);
}
TextInputInput.displayName = "TextInput.Input";

export const TextInput = {
	Root: TextInputRoot,
	Input: TextInputInput,
	Icon: TextInputIcon
};
