export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/auth/mypage",
    "/assignment/submit",
    "/assignment/solution",
    "/members",
  ],
};
