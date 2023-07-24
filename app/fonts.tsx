import { Noto_Sans_KR, Raleway, Ubuntu } from "next/font/google";

export const NotoSansKR = Noto_Sans_KR({
  style: "normal",
  weight: ["100", "300", "400", "500", "700", "900"],
  display: "auto",
  subsets: ["latin"],
});

export const UbunTu = Ubuntu({
  style: "normal",
  weight: ["300", "400", "500", "700"],
  display: "auto",
  subsets: ["latin"],
});
