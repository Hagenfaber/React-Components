"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export const SigninButton = () => {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <div>
        <p>{session.user.name}</p>{" "}
        <button onClick={() => signOut()}>Signout</button>
      </div>
    );
  } else {
    return <button onClick={() => signIn()}>Sign in</button>;
  }
};
