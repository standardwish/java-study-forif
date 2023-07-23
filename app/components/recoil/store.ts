import { AtomEffect, atom } from "recoil";
import { recoilPersist } from "recoil-persist";

// sessionStorage에 저장하고 싶은 경우
// Next.js를 쓰는 경우
const sessionStorage =
  typeof window !== "undefined" ? window.sessionStorage : undefined;

const { persistAtom } = recoilPersist({
  key: "nextAtom",
  storage: sessionStorage,
});

export const loginState = atom({
  key: "loginState",
  default: false,
  effects_UNSTABLE: [persistAtom],
});
