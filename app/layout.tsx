import { RecoilRootWrapper } from "@/recoil/recoilRoot";
import { navState } from "@/recoil/store";
import type { Metadata } from "next";
import { useRecoilValue } from "recoil";
import AuthSession from "./AuthSession";
import Header from "./components/header";
import { Toast } from "./components/toast/toast";
import { NotoSansKR } from "./fonts";
import "./globals.css";

interface IGlobalContext {
  isNavOpen?: boolean;
}

export const metadata: Metadata = {
  title: "Java In Forif",
  description: "JAVA STUDY IN FORIF",
  generator: "Next.js",
  applicationName: "FORIF-IN-JAVA",
  keywords: ["Java", "Forif", "Computer", "Programming"],
  authors: [{ name: "Jun Seong", url: "https://github.com/standardwish" }],
  colorScheme: "dark",
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
          <RecoilRootWrapper>
            <Toast />
            <Header />
            {children}
          </RecoilRootWrapper>
        </AuthSession>
      </body>
    </html>
  );
}
