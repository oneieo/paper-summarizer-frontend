import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Image from "next/image";
const pretendard = localFont({
  src: "../../public/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "논문한입 | 논문의 본질을 이해하는 가장 빠른 방법",
  description: "AI 논문 요약 플랫폼",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={pretendard.variable}>
      <header className="w-full h-[4.375rem] px-[20rem] bg-[#1F325C] flex justify-between items-center">
        <Image
          src="/images/논문한입title.png"
          alt="logo"
          width={120}
          height={120}
        />
        <h1 className="text-[#fffef8] text-[1.25rem] font-bold">header</h1>
      </header>
      <body className={pretendard.className}>{children}</body>
    </html>
  );
}
