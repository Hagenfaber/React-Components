/** @format */

import { forwardRef } from "react";
import { ErrorIcon } from "../ErrorIcon";
import { ErrorText } from "../ErrorText";

export interface TextInputProps {
	name: string;
	label: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	placeholder?: string;
	errors?: any;
	className?: string;
	otherProps?: any;
}

export const TextInput = forwardRef(function TextInput({
	name,
	label,
	onChange,
	errors,
	className,
	placeholder,
	...otherProps
}: TextInputProps, ref: any) {
	console.log("TextInput", errors)
  return (
		<div>
			<label
				htmlFor={name}
				className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200 pl-1"
			>
				{label}
			</label>
			<div className="relative mt-2 rounded-md shadow-sm">
			  <input
				  	{...otherProps}
			  		ref={ref}
					name={name}
					id={name}
					className={`bg-white dark:bg-slate-600 ${
						errors?.message
							? "text-red-900 ring-red-300 placeholder:text-red-300 focus:ring-red-500 dark:ring-red-500 dark:placeholder:text-red-500 dark:focus:ring-red-700"
							: "ring-blue-300 dark:ring-blue-700  dark:placeholder:text-gray-400 placeholder:text-gray-300 focus:ring-blue-500 dark:focus-ring-blue-900"
					} block w-full rounded-md border-0 py-1.5 pr-10 ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 px-2 `}
					placeholder={placeholder}
				/>
				{errors?.message && <ErrorIcon />}
			</div>
			<ErrorText>{errors?.message}</ErrorText>
		</div>
	);
});

