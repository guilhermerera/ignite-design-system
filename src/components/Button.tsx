import { ButtonHTMLAttributes, ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	asChild?: boolean;
	className?: string;
}

export function Button({
	children,
	asChild,
	className,
	...props
}: ButtonProps) {
	const Comp = asChild ? Slot : "button";
	return (
		<Comp
			className={clsx(
				"py-3 px-4 bg-cyan-500 rounded font-semibold w-full text-sm text-black transition-colors hover:bg-cyan-400 active:ring-1 ring-gray-100",
				className
			)}
			{...props}>
			{children}
		</Comp>
	);
}
