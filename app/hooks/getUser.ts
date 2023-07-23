import axios from "axios";

const API_URI = "https://java-study-forif.vercel.app/api/users";

/**
 * 모든 유저 정보 반환
 * @param 모든 유저의 이름/학과/과제 수행 횟수
 * @returns 유저정보
 */
export const getAllUsers = async () => {
  try {
    const res = await axios.get(API_URI);
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return axios.isAxiosError(error);
    }
  }
};
