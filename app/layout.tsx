import "./globals.css";
import type { Metadata } from "next";
import Header from "./components/header";
import { NotoSansKR } from "./fonts";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: "FORIF-JAVA",
  description: "JAVA STUDY IN FORIF",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={NotoSansKR.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
