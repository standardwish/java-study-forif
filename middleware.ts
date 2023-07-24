export { default } from "next-auth/middleware";
export const config = {
  matcher: ["/mypage"],
  runtime: "experimental-edge",
};
