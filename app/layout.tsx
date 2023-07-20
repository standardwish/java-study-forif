import "./globals.css";
import type { Metadata } from "next";
import Header from "./components/header";
import { NotoSansKR } from "./fonts";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: "Java In Forif",
  description: "JAVA STUDY IN FORIF",
  generator: "Next.js",
  applicationName: "FORIF-IN-JAVA",
  keywords: ["Java", "Forif", "Computer", "Programming"],
  authors: [{ name: "Jun Seong", url: "https://github.com/standardwish" }],
  colorScheme: "light",
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
