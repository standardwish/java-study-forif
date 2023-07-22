"use client";
import { useRouter } from "next/navigation";
import { showToast } from "../components/toast/toast";

export default function Page() {
  const router = useRouter();
  const signOut = () => {
    localStorage.clear();
    router.push("/");
    showToast({
      type: "success",
      message: "로그아웃에 성공했습니다.",
    });
  };

  return (
    <div>
      <button onClick={signOut}>SIGN OUT BUTTON</button>
    </div>
  );
}
