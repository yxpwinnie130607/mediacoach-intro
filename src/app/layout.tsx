import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MediaCoach / 媒策 — 个人项目介绍",
  description:
    "Winnie 的个人项目 MediaCoach（媒策）：自媒体写作助手。贴草稿 → 开始诊断 → 划改建议 → 确认后才改原文。",
  openGraph: {
    title: "MediaCoach / 媒策",
    description: "诊断式改稿，而不是整段重写。确认前不改原文。",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="zh-CN"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-dvh flex flex-col bg-background text-ink">
        {children}
      </body>
    </html>
  );
}
