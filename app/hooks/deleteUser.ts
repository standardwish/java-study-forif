import type { IDeleteUser } from "@/types/type";
/**
 * 유저 삭제
 * @param 삭제할 유저의 이름, 학과, 어드민 비밀번호
 * @returns void
 */
export const deleteUser = async ({ uid, adminPassword }: IDeleteUser) => {
  const URI =
    process.env.NODE_ENV === "development"
      ? `http://localhost:3000/api/users?id=${uid}`
      : `https://java-study-forif.vercel.app/api/users?id=${uid}`;
  console.log(process.env.ADMIN_PASSWORD);

  if (adminPassword === "zce9910272!") {
    try {
      const res = await fetch(URI, {
        headers: { "Content-Type": "application/json" },
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Failed To Fetch Data");
      }

      return await res.json();
    } catch (e) {
      console.log(e);
    }
  } else {
    return "PASSWORD INVALID";
  }
};
