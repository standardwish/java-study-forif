import axios from "axios";

/**
 * 모든 유저 정보 반환
 * @param 모든 유저의 이름/학과/과제 수행 횟수
 * @returns 유저정보
 */
export const getAllUsers = async () => {
  const URI = `${process.env.NEXTAUTH_URL}/api/users`;
  try {
    if (typeof URI === "string") {
      const res = await axios.get(URI);
      console.log("Get All Users Data", res.status);
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
