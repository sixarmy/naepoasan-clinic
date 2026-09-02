import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LocationSection from "@/components/LocationSection";
import FloatingButtons from "@/components/FloatingButtons";
import ScrollToTop from "@/components/ScrollToTop";
import PopupNotice from "@/components/PopupNotice";
import { clinic } from "@/lib/clinic";

export const metadata: Metadata = {
  title: {
    default: `${clinic.name} | 내과 전문 진료`,
    template: `%s | ${clinic.name}`
  },
  description: `${clinic.name} - ${clinic.address}. 가정의학과 전문의가 함께하는 내과·건강검진·만성질환·수액클리닉 진료.`,
  keywords: [
    "내포아산내과", "예산내과", "삽교내과", "내포신도시내과", "건강검진",
    "고혈압", "당뇨", "고지혈증", "수액클리닉", "초음파"
  ],
  openGraph: {
    title: `${clinic.name} | 내과 전문 진료`,
    description: `${clinic.address}에 위치한 내과·건강검진·만성질환·수액클리닉 전문 의원입니다.`,
    type: "website",
    locale: "ko_KR",
    siteName: clinic.name,
    images: [{ url: clinic.logoPrimary, width: 1200, height: 630, alt: clinic.name }]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>
        <ScrollToTop />
        <Header />
        <main className="min-h-screen pt-[60px] sm:pt-[68px] xl:pt-20">{children}</main>
        <LocationSection />
        <Footer />
        <FloatingButtons />
        <PopupNotice />
      </body>
    </html>
  );
}
