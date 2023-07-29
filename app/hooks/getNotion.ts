import axios from "axios";

/**
 * 노션에서 과제 정보 반환
 * @param None
 * @returns 과제명, 태그, 멘토
 */
export const getNotion = async () => {
  const URI = `https://java-study-forif.vercel.app/api/notion`;
  try {
    if (typeof URI === "string") {
      const res = await axios.get(URI);
      return res.data;
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return axios.isAxiosError(error);
    }
  }
};
