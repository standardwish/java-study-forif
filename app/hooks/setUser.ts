import { LoginUserParams } from "@/types/type";
import { signIn, signOut } from "next-auth/react";
export const loginUser = async ({ username, password }: LoginUserParams) => {
  const res = await signIn("credentials", {
    redirect: false,
    username,
    password,
  });
  return res;
};

export const logOutUser = async () => {
  const res = await signOut({
    redirect: false,
    callbackUrl: "/",
  });
  console.log(res);
};
