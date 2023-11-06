"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";

interface Props {
  otherProps?: any;
}

export const ProfileButton = ({ ...otherProps }: Props) => {
  const { data: session } = useSession();

  if (!session || !session.user) {
    return <>Not logged in!</>;
  }
  return (
    <button
      className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
      {...otherProps}
    >
      <span className="absolute -inset-1.5" />
      <span className="sr-only">Open user menu</span>
      <Image
        className="h-8 w-8 rounded-full"
        height={100}
        width={100}
        src={session.user.image || ""}
        alt={session.user.name || ""}
      />
    </button>
  );
};
