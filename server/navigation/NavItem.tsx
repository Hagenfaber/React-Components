import { classNames } from "@/utils/classNames";
import Link from "next/link";

interface Props {
  name: string;
  href: string;
  current?: boolean;
  block?: boolean;
  otherProps?: any;
}

export const NavItem = ({
  name,
  href,
  current = false,
  block = false,
  ...otherProps
}: Props) => {
  return (
    <Link
      key={name}
      href={href}
      className={classNames(
        current
          ? "bg-gray-900 text-white"
          : "text-gray-300 hover:bg-gray-700 hover:text-white",
        `${block ? "block" : ""} rounded-md px-3 py-2 text-sm font-medium`
      )}
      aria-current={current ? "page" : undefined}
      {...otherProps}
    >
      {name}
    </Link>
  );
};
