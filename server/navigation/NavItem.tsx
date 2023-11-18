import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { forwardRef } from "react";

interface Props {
  name: string;
  href: string;
  current?: boolean;
  block?: boolean;
  otherProps?: any;
}

export const NavItem = forwardRef(function NavItem(
  { name, href, current = false, block = false, ...otherProps }: Props,
  ref: any,
) {
  return (
    <Link
      key={name}
      href={href}
      className={twMerge(
        current
          ? "bg-gray-900 text-white"
          : "text-gray-300 hover:bg-gray-700 hover:text-white",
        `${block ? "block" : ""} rounded-md px-3 py-2 text-sm font-medium`,
      )}
      aria-current={current ? "page" : undefined}
      {...otherProps}
    >
      {name}
    </Link>
  );
});
