import axios from "axios";

/**
 * 모든 유저 정보 반환
 * @param 모든 유저의 이름/학과/과제 수행 횟수
 * @returns 유저정보
 */
export const getAllUsers = async () => {
  const URI = `https://forifjava.vercel.app/api/users`;
  try {
    if (typeof URI === "string") {
      const res = await axios.get(URI);
      return res.data;
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(`GOT ERROR IN  : ${URI}`);
      console.log(error);
      return axios.isAxiosError(error);
    }
  }
};
