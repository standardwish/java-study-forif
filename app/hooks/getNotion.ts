import type { AssignmentData } from "@/types/notion_type";
import axios from "axios";

/**
 * 노션에서 과제 데이터베이스 정보 반환
 * @param None
 * @returns 과제명, 태그, 멘토
 */
export const getNotionDatabase = async () => {
  if (process.env.NODE_ENV === "production") {
    try {
      const res = await axios.get(
        "https://java-study-forif.vercel.app/api/notion"
      );
      return res.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return axios.isAxiosError(error);
      }
    }
  } else {
    try {
      const res = await axios.get("http://localhost:3000/api/notion");
      return res.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return axios.isAxiosError(error);
      }
    }
  }
};

/**
 * 간단한 데이터 후처리 작업
 * @param None
 * @returns 과제명, 태그, 멘토
 */
export const getDatabase = async () => {
  const res: AssignmentData = await getNotionDatabase();
  const data = res.rowStructured;
  return data;
};

/**
 * 노션에서 특정한 페이지 정보 반환
 * @param page_id
 * @returns 페이지 정보
 */
export const getNotionPage = async (pageId: string) => {
  const APP_URI = `https://java-study-forif.vercel.app/api/notion/${pageId}`;
  const LOCAL_URI = `http://localhost:3000/api/notion/${pageId}`;

  const URI = APP_URI;

  if (process.env.NODE_ENV === "production") {
    try {
      const res = await axios.get(
        `https://java-study-forif.vercel.app/api/notion/${pageId}`,
        {
          withCredentials: true,
        }
      );
      return res.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return axios.isAxiosError(error);
      }
    }
  } else {
    try {
      const res = await axios.get(`http://localhost:3000/api/notion/${pageId}`);
      return res.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return axios.isAxiosError(error);
      }
    }
  }
};
