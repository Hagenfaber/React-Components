/** @format */

import { DetailedHTMLProps, SelectHTMLAttributes, forwardRef } from "react";

interface SelectItem {
  id: string;
  name: string;
}

export interface SelectInputProps
  extends DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  id: string;
  label: string;
  items: SelectItem[];
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
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-200"
      >
        {label}
      </label>
      <select
        {...otherProps}
        name={id}
        ref={ref}
        className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
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
