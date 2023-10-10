/** @format */

export const ErrorText = ({children}: {children: any}) => {
	return (
		<p className="mt-2 text-sm text-red-600" id="name-error">
			{children}
		</p>
	);
};
