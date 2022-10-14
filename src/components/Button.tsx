import { ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";

export interface ButtonProps {
	children: ReactNode;
	asChild?: boolean;
}

export function Button({ children, asChild }: ButtonProps) {
	const Comp = asChild ? Slot : "button";
	return (
		<Comp
			className={clsx(
				"py-4 px-3 bg-cyan-500 rounded font-semibold w-full text-sm text-black transition-colors hover:bg-cyan-400 active:ring-1 ring-gray-100"
			)}>
			{children}
		</Comp>
	);
}
