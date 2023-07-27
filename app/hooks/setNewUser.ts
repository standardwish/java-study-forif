import type { IUser } from "@/types/type";

/**
 * 새로운 유저 추가
 * @param 추가할 유저의 이름, 학과, 과제 횟수
 * @returns void
 */
export const setNewUser = async ({
  username,
  password,
  major,
  assignment,
}: IUser) => {
  const URI =
    process.env.NODE_ENV === "development"
      ? `http://localhost:3000/api/users`
      : `https://java-study-forif.vercel.app/api/users`;
  console.log(URI);

  try {
    const res = await fetch(URI, {
      body: JSON.stringify({
        username: username,
        password: password,
        major: major,
        assignment: assignment,
      }),
      headers: { "Content-Type": "application/json" },
      method: "POST",
    });

    if (!res.ok) {
      throw new Error("Failed To Fetch Data");
    }

    return await res.json();
  } catch (e) {
    console.log(e);
  }
};
