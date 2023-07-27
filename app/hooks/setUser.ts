import type { LoginUserParams } from "@/types/type";
import { signIn, signOut } from "next-auth/react";
export const loginUser = async ({ username, password }: LoginUserParams) => {
  const res = await signIn("credentials", {
    redirect: false,
    username,
    password,
  });
  console.log(res?.error, res?.status, res?.ok, res?.url);

  return res;
};

export const logOutUser = async () => {
  try {
    const res = await signOut({
      redirect: false,
      callbackUrl: "/",
    });
  } catch (e) {
    console.log(e);
  }
};
