import axios from 'axios'

const API_URI =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000/api/users'
    : 'https://java-study-forif.vercel.app/api/users'

/**
 * 모든 유저 정보 반환
 * @param 유저아이디
 * @returns 유저정보
 */
export const getAllUsers = async () => {
  const res = await axios.get(API_URI)

  return res.data
}
