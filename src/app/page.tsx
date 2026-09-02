"use client";

import Link from "next/link";
import HeroCarousel from "@/components/HeroCarousel";
import ScrollReveal from "@/components/ScrollReveal";
import WhySection from "@/components/WhySection";
import GalleryBanner from "@/components/GalleryBanner";
import { clinic, serviceCards, doctors } from "@/lib/clinic";
import { handleReservation } from "@/utils/reservation";

const facilities = [
  {
    label: "접수·대기 공간",
    desc: "밝고 넓은 접수 데스크와\n편안한 대기 공간",
    image: "/clinic-photos/p-counter.png",
  },
  {
    label: "1인 수액실",
    desc: "아치형 개별 부스로\n프라이빗하고 편안하게",
    image: "/clinic-photos/p-iv-room.png",
  },
  {
    label: "유아 대기실",
    desc: "아이와 함께 오셔도\n편안하게 기다리실 수 있습니다",
    image: "/clinic-photos/p-kids.png",
  },
];

const hoursRows = [
  { day: "월·목·금", time: "09:00 – 19:00" },
  { day: "화요일", time: "09:00 – 13:00" },
  { day: "토·일요일", time: "09:00 – 16:00" },
  { day: "점심시간", time: "13:00 – 14:30 (토·일 13:00–14:00)" },
  { day: "수요일·공휴일", time: "휴진" },
];

export default function Home() {
  const doctor = doctors[0];

  return (
    <>
      <HeroCarousel />

      {/* ── 진료시간 스트립 ── */}
      <section className="bg-[#3d9b6a] py-4">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8 text-white text-sm">
            <div className="flex items-center gap-2">
              <ClockIcon />
              <span className="font-medium">
                월·목·금 09:00–19:00 &nbsp;|&nbsp; 화 09:00–13:00 &nbsp;|&nbsp; 토·일 09:00–16:00 &nbsp;|&nbsp;
                <strong>수·공휴일 휴진</strong>
              </span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/30" />
            <button
              onClick={handleReservation}
              className="flex items-center gap-1.5 font-bold hover:opacity-80 transition-opacity"
            >
              <PhoneIcon />
              {clinic.phone}
            </button>
          </div>
        </div>
      </section>

      {/* ── 주요 진료 카드 ── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-10">
              <span className="text-[#3d9b6a] font-bold text-xs uppercase tracking-widest">진료 안내</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-2">주요 진료 서비스</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 min-[420px]:grid-cols-2 lg:grid-cols-4 gap-4">
            {serviceCards.map((card, i) => (
              <ScrollReveal key={card.title} delay={i * 80}>
                <Link
                  href={card.href}
                  className="group relative flex flex-col rounded-2xl overflow-hidden h-64 shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url('${card.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                  <div className="relative z-10 h-full flex flex-col justify-between p-5">
                    <span className="self-start text-[10px] font-bold text-[#7ee8b8] tracking-widest">
                      {(card as { tag?: string }).tag ?? ""}
                    </span>
                    <div>
                      <h3 className="text-white text-lg font-bold mb-1">{card.title}</h3>
                      <p className="text-white/75 text-sm leading-snug whitespace-pre-line mb-3">{card.desc}</p>
                      <span className="inline-flex items-center gap-1 text-xs text-[#7ee8b8] font-semibold group-hover:gap-2 transition-all duration-200">
                        자세히 보기 →
                      </span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 원장 소개 ── */}
      <section className="py-16 bg-[#f4fbf7]">
        <div className="max-w-5xl mx-auto px-4">
          <ScrollReveal>
            <div className="bg-white rounded-3xl shadow-sm border border-[#c8ebd9] overflow-hidden">
              <div className="flex flex-col md:flex-row">
                {/* 사진 영역 */}
                <div className="md:w-64 lg:w-80 shrink-0 min-h-[220px] md:min-h-[320px] overflow-hidden">
                  {doctor.photo ? (
                    <img src={doctor.photo} alt={doctor.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full min-h-[220px] md:min-h-[320px] bg-[#e8f5ed]" />
                  )}
                </div>

                {/* 내용 */}
                <div className="flex-1 p-8 lg:p-10 flex flex-col justify-center">
                  <span className="text-[#3d9b6a] font-bold text-[10px] uppercase tracking-widest mb-2">
                    Our Doctor
                  </span>
                  <h2 className="text-3xl font-black text-gray-900 mb-0.5">
                    {doctor.name} 원장
                  </h2>
                  <p className="text-[#3d9b6a] font-semibold text-sm mb-5">{doctor.role}</p>
                  <blockquote className="text-gray-600 text-[15px] leading-relaxed border-l-4 border-[#3d9b6a] pl-4 mb-6 italic">
                    &ldquo;{doctor.quote}&rdquo;
                  </blockquote>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {doctor.badges.map((b) => (
                      <span
                        key={b}
                        className="px-3 py-1 rounded-full bg-[#e8f5ed] text-[#2d7a53] text-xs font-bold border border-[#c8ebd9]"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                  <Link
                    href="/doctors"
                    className="self-start inline-flex items-center gap-2 bg-[#3d9b6a] text-white font-bold px-5 py-2.5 rounded-full text-sm hover:bg-[#2d7a53] hover:-translate-y-0.5 transition-all duration-200"
                  >
                    의료진 자세히 보기 →
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── 3가지 특징 ── */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 min-[420px]:grid-cols-3 gap-6 text-center">
            {[
              { icon: <DoctorBadgeIcon />, title: "가정의학과 전문의", desc: "원장이 직접 처음부터 끝까지" },
              { icon: <HeartIcon />, title: "지역 건강 주치의", desc: "꾸준한 만성질환 장기 관리" },
              { icon: <HomeIcon />, title: "쾌적한 시설", desc: "1인 수액실 · 유아 대기실 완비" },
            ].map(({ icon, title, desc }, i) => (
              <ScrollReveal key={title} delay={i * 120}>
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-[#e8f5ed] flex items-center justify-center mb-4 text-[#3d9b6a]">
                    {icon}
                  </div>
                  <div className="w-8 h-px bg-[#c8ebd9] mb-3" />
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">{title}</h3>
                  <p className="text-gray-400 text-sm">{desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 시설 사진 ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-10">
              <span className="text-[#3d9b6a] font-bold text-xs uppercase tracking-widest">시설 안내</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-2">편안하고 쾌적한 공간</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {facilities.map((f, i) => (
              <ScrollReveal key={f.label} delay={i * 80}>
                <div className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 bg-white border border-gray-100">
                  <div className="relative h-52 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                      style={{ backgroundImage: `url('${f.image}')` }}
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-gray-900 mb-1">{f.label}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed whitespace-pre-line">{f.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 진료시간 상세 ── */}
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-8">
              <span className="text-[#3d9b6a] font-bold text-xs uppercase tracking-widest">Hours</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2">진료시간 안내</h2>
            </div>
            <div className="rounded-2xl border border-[#c8ebd9] overflow-hidden">
              {hoursRows.map((row, i) => (
                <div
                  key={row.day}
                  className={`flex items-center justify-between px-6 py-4 ${
                    i !== hoursRows.length - 1 ? "border-b border-[#e8f5ed]" : ""
                  } ${row.day === "수요일·공휴일" ? "bg-[#fef2f2]" : i % 2 === 0 ? "bg-white" : "bg-[#fafffe]"}`}
                >
                  <span className={`font-semibold text-sm ${row.day === "수요일·공휴일" ? "text-red-500" : "text-gray-700"}`}>
                    {row.day}
                  </span>
                  <span className={`text-sm font-medium ${row.day === "수요일·공휴일" ? "text-red-400" : row.day === "점심시간" ? "text-gray-400" : "text-gray-900"}`}>
                    {row.time}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <button
                onClick={handleReservation}
                className="inline-flex items-center gap-2 bg-[#3d9b6a] text-white font-bold px-7 py-3 rounded-full hover:bg-[#2d7a53] hover:-translate-y-0.5 transition-all duration-200 shadow-md"
              >
                <PhoneIcon />
                전화 예약 · {clinic.phone}
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── WHY 섹션 ── */}
      <section className="py-16 md:py-20 bg-gray-50">
        <WhySection />
      </section>

      <GalleryBanner />
    </>
  );
}

function ClockIcon() {
  return (
    <svg className="w-4 h-4 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function DoctorBadgeIcon() {
  return (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  );
}
