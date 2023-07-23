import type { Metadata } from "next";
import AuthSession from "./AuthSession";
import Footer from "./components/footer";
import Header from "./components/header";
import { Toast } from "./components/toast/toast";
import { NotoSansKR } from "./fonts";
import "./globals.css";
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
        <AuthSession>
          <Toast />
          <Header />
          {children}
          <Footer />
        </AuthSession>
      </body>
    </html>
  );
}
