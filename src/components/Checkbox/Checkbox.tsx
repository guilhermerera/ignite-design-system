import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";
import { Text } from "../Text";

export interface CheckboxProps extends CheckboxPrimitive.CheckboxProps {
	label?: string;
}

export function Checkbox({ label, ...props }: CheckboxProps) {
	return (
		<div className='flex items-center gap-2'>
			<CheckboxPrimitive.Root
				{...props}
				className='p-[2px] w-6 h-6 bg-gray-800 rounded '>
				<CheckboxPrimitive.Indicator asChild>
					<Check weight='bold' className='h-5 w-5 text-cyan-400' />
				</CheckboxPrimitive.Indicator>
			</CheckboxPrimitive.Root>
			<Text size='sm'>{label}</Text>
		</div>
	);
}
