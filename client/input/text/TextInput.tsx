/** @format */

import { ErrorIcon } from "../ErrorIcon";
import { ErrorText } from "../ErrorText";

export interface TextInputProps {
	name: string;
	label: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	placeholder?: string;
	errors?: any;
	className?: string;
}

export const TextInput = ({
	name,
	label,
	onChange,
	errors,
	className,
	placeholder,
}: TextInputProps) => {
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
					name={name}
					id={name}
					className={`bg-white dark:bg-slate-600 ${
						errors?.message
							? "text-red-900 ring-red-300 placeholder:text-red-300 focus:ring-red-500"
							: "ring-blue-300 placeholder:text-gray-300 focus:ring-blue-500"
					} block w-full rounded-md border-0 py-1.5 pr-10 ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 px-2 `}
					placeholder={placeholder}
				/>
				{errors?.message && <ErrorIcon />}
			</div>
			<ErrorText>{errors?.message}</ErrorText>
		</div>
	);
};
