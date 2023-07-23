import axios from "axios";

const AUTH_URI = "https://java-study-forif.vercel.app/api/users";
const LOCAL_URI = "http://localhost:3000/api/users";
/**
 * 모든 유저 정보 반환
 * @param 모든 유저의 이름/학과/과제 수행 횟수
 * @returns 유저정보
 */
export const getAllUsers = async () => {
  try {
    if (process.env.NODE_ENV === "development") {
      const res = await axios.get(LOCAL_URI);
      console.log(res);

      return res.data;
    } else if (process.env.NODE_ENV === "production") {
      const res = await axios.get(AUTH_URI);
      console.log(res);

      return res.data;
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return axios.isAxiosError(error);
    }
  }
};
