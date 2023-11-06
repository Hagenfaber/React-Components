/** @format */

import { DetailedHTMLProps, SelectHTMLAttributes, forwardRef } from "react";

export interface SelectInputProps
  extends DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  id: string;
  label: string;
  items: any[];
  otherProps?: any;
}

export const SelectInput = forwardRef(function SelectInput(
  { id, label, items, ...otherProps }: SelectInputProps,
  ref: any
) {
  return (
    <div className="">
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {label}
      </label>
      <select
        {...otherProps}
        name={id}
        ref={ref}
        className="bg-gray-50 dark:bg-slate-600 border border-gray-300 dark:border-slate-500 text-gray-900 dark:text-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
      >
        <option value={"default"} disabled>
          &#60;{label}&#62;
        </option>
        {items.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
});
