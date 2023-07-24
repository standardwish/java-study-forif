import axios from "axios";

const AUTH_URI = "https://java-study-forif.vercel.app/api/users";
const LOCAL_URI = "http://localhost:3000/api/users";
/**
 * 모든 유저 정보 반환
 * @param 모든 유저의 이름/학과/과제 수행 횟수
 * @returns 유저정보
 */
export const getAllUsers = async () => {
  const URI = `${process.env.NEXTAUTH_URL}/api/users`;
  try {
    if (typeof URI === "string") {
      const res = await fetch(URI);
      console.log("Get All Users Data", res.status);
      return res.json();
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("GOT ERROR WHEN LOAD DATA : ", error);
      return axios.isAxiosError(error);
    }
  }
};
