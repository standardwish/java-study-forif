import axios from "axios";

/**
 * 노션에서 과제 데이터베이스 정보 반환
 * @param None
 * @returns 과제명, 태그, 멘토
 */
export const getNotionDatabase = async () => {
  const APP_URI = `https://java-study-forif.vercel.app/api/notion`;
  const LOCAL_URI = `http://localhost:3000/api/notion`;

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

/**
 * 노션에서 특정한 페이지 정보 반환
 * @param page_id
 * @returns 페이지 정보
 */
export const getNotionPage = async (pageId: string) => {
  const APP_URI = `https://java-study-forif.vercel.app/api/notion/${pageId}`;
  const LOCAL_URI = `http://localhost:3000/api/notion/${pageId}`;

  const URI = `https://java-study-forif.vercel.app/api/notion/${pageId}`;

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
