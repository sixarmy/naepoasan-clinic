"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { clinic, pickImage } from "@/lib/clinic";

const steps = [
  { kr: "스마트 진단", en: "Smart Diagnosis", char: 0, letter: "S", image: pickImage(0), desc: "초음파·X-RAY·혈액검사·진단검사까지 한 공간에서 정확한 원인을 찾아냅니다." },
  { kr: "통합 진료", en: "Integrated Care", char: 1, letter: "I", image: pickImage(1), desc: "내과진료·건강검진·만성질환 관리를 끊기지 않는 흐름으로 연결합니다." },
  { kr: "전문 의료진", en: "Medical Expert", char: 2, letter: "M", image: pickImage(2), desc: "서울아산병원 수련 출신 의료진과 함께하는 믿음직한 진료." },
  { kr: "종합 케어", en: "Comprehensive Care", char: 3, letter: "C", image: pickImage(3), desc: "고혈압·당뇨·고지혈증·골다공증을 개인별 맞춤으로 꾸준히 관리합니다." },
  { kr: "프리미엄 수액", en: "Premium IV", char: 1, letter: "I", image: pickImage(6), desc: "1인 수액실에서 편안하고 품격 있는 수액 치료를 제공합니다." },
  { kr: "지역 주치의", en: "Neighbor Doctor", char: 0, letter: "S", image: pickImage(7), desc: "내포신도시 지역 주민의 건강 이력을 꾸준히 함께 보는 믿음직한 동네 주치의가 되겠습니다." }
];

const markerPositions = [
  { left: "3%", top: "63%" },
  { left: "7%", top: "28%" },
  { left: "33%", top: "5%" },
  { left: "67%", top: "5%" },
  { left: "93%", top: "28%" },
  { left: "97%", top: "63%" }
];

const cardPositions = [
  "left-[-218px] top-[450px]",
  "left-[-198px] top-[105px]",
  "left-[42px] top-[-150px]",
  "right-[42px] top-[-150px]",
  "right-[-198px] top-[105px]",
  "right-[-218px] top-[450px]"
];

export default function DaonBrandingOrbit() {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);
  const chars = useMemo(() => ["S", "I", "M", "C"], []);

  useEffect(() => {
    const el = document.getElementById("daon-care-system");
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1, rootMargin: "0px 0px -80px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const timer = window.setInterval(() => setActive((prev) => (prev + 1) % steps.length), 4000);
    return () => window.clearInterval(timer);
  }, [visible]);

  const activeStep = steps[active];

  return (
    <section id="daon-care-system" className="relative z-[5] overflow-hidden bg-[#F2F6FB] py-[60px] sm:py-20 lg:py-[120px]">
      <div className="relative mx-auto flex max-w-[1440px] flex-col px-4">
        <div className={`relative z-10 mx-auto mb-8 max-w-3xl text-center transition-all duration-1000 lg:mb-[130px] ${visible ? "translate-y-0 opacity-100" : "translate-y-11 opacity-0"}`}>
          <p className="mb-3 text-[11px] font-black uppercase tracking-[0.18em] text-[#4A90D9] sm:text-xs">CARE SYSTEM</p>
          <h2 className="text-[22px] font-black leading-[1.32] tracking-[-0.04em] text-[#1E293B] sm:text-[30px] lg:text-[42px]">
            내포의 건강, 더 편안한 내일로<br />
            {clinic.shortName}의 통합 케어 시스템
          </h2>
          <p className="mt-4 text-[13.5px] leading-7 text-[#64748B] sm:text-[16px] sm:leading-8">
            검진과 만성질환 관리, 프리미엄 수액이 끊기지 않도록<br className="hidden sm:block" />
            {clinic.shortName}만의 통합 진료 여정을 안내합니다.
          </p>
          <Link href="/doctors" className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#1A3A6C]/20 px-7 py-3 text-[14px] font-bold text-[#1A3A6C] transition-all hover:bg-[#1A3A6C] hover:text-white">
            {clinic.shortName} 소개 →
          </Link>
        </div>

        {/* Mobile: reference-style compact orbit, card above orbit. */}
        <div className={`relative mx-auto block w-full max-w-[460px] pt-[300px] transition-all duration-1000 lg:hidden ${visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
          <article className="absolute left-1/2 top-0 z-20 w-[calc(100vw-32px)] max-w-[340px] -translate-x-1/2 rounded-[20px] border border-white bg-white p-4 shadow-[0_24px_58px_rgba(26,58,108,0.14)]">
            <div className="mb-3 h-[140px] overflow-hidden rounded-xl bg-[#eaf2fb]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={activeStep.image} alt={activeStep.kr} className="h-full w-full object-cover" />
            </div>
            <div className="mb-2 flex flex-wrap items-baseline gap-2">
              <span className="text-[16px] font-black text-[#1A3A6C]">{activeStep.kr}</span>
              <span className="text-xs font-semibold text-[#94A3B8]"><span className="text-[#4A90D9]">{activeStep.letter}</span> {activeStep.en}</span>
            </div>
            <p className="text-[13px] leading-6 text-[#64748B]">{activeStep.desc}</p>
          </article>

          <div className="relative mx-auto h-[min(92vw,460px)] w-[min(92vw,460px)]">
            <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] max-w-[78vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_50%_50%,#fff_0%,#C5DEFF_56%,rgba(242,246,251,0)_84%)]" />
            <div className="absolute inset-[12%] rounded-full border-[8px] border-[#E1EAF4]" />
            <div className="absolute inset-[4%] rounded-full border border-dashed border-[#cfdbe8]" />
            <div className="absolute left-1/2 top-1/2 h-[310px] w-[310px] max-w-[68vw] -translate-x-1/2 -translate-y-1/2 rounded-full transition-transform duration-700" style={{ transform: `translate(-50%, -50%) rotate(${-112 + active * 44}deg)` }}>
              <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-white bg-[#2B5BA8] shadow-[0_0_18px_rgba(74,144,217,0.8)]" />
            </div>

            <div className="absolute left-1/2 top-[54%] flex -translate-x-1/2 -translate-y-1/2 items-baseline">
              {chars.map((char, idx) => (
                <span key={char} className="flex items-baseline">
                  <span className={`font-montserrat text-[30px] font-black transition-all ${activeStep.char === idx ? "-translate-y-1 scale-110 text-[#4A90D9] drop-shadow-[0_4px_16px_rgba(74,144,217,0.45)]" : "text-white drop-shadow-[0_0_14px_rgba(173,213,255,1)]"}`}>{char}</span>
                  {idx < chars.length - 1 && <span className="mx-1 text-[17px] font-black text-white drop-shadow-[0_0_14px_rgba(173,213,255,1)]">.</span>}
                </span>
              ))}
            </div>

            {steps.map((step, index) => (
              <button
                key={step.kr}
                type="button"
                onClick={() => setActive(index)}
                className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
                style={markerPositions[index]}
              >
                <span className={`mb-1 flex h-[34px] w-[34px] items-center justify-center rounded-full border-2 text-[12px] font-black transition-all ${active === index ? "scale-110 border-[#2B5BA8] bg-[#2B5BA8] text-white shadow-[0_6px_18px_rgba(74,144,217,0.35)]" : "border-[#D2DCE6] bg-white text-[#94A3B8]"}`}>{String(index + 1).padStart(2, "0")}</span>
                <span className={`max-w-[74px] text-center text-[11px] font-bold leading-tight transition-colors min-[390px]:text-[12px] ${active === index ? "text-[#1E293B]" : "text-[#94A3B8]"}`}>{step.kr}</span>
              </button>
            ))}
          </div>
        </div>

        {/* PC: full orbit */}
        <div className={`relative mx-auto hidden h-[1000px] w-[1000px] transition-all duration-1000 lg:block ${visible ? "translate-y-0 opacity-100" : "translate-y-11 opacity-0"}`}>
          <div className="absolute left-1/2 top-1/2 h-[680px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,1)_0%,#C5DEFF_52%,rgba(242,246,251,0)_84%)] shadow-[inset_0_0_80px_rgba(255,255,255,0.6)]" />
          <svg className="absolute inset-0 h-full w-full overflow-visible" viewBox="0 0 800 800" aria-hidden="true">
            <path d="M 23.3 500.9 A 390 390 0 1 1 776.7 500.9" fill="none" stroke="#D0DBE9" strokeWidth="1.5" strokeDasharray="6 10" />
            <path d="M 110.23 477.64 A 300 300 0 1 1 689.77 477.64" fill="none" stroke="#E1EAF4" strokeWidth="12" strokeLinecap="round" />
            <path
              d="M 110.23 477.64 A 300 300 0 1 1 689.77 477.64"
              fill="none"
              stroke="#2B5BA8"
              strokeWidth="12"
              strokeLinecap="round"
              strokeDasharray="1099.55 1099.55"
              strokeDashoffset={1099.55 - active * (1099.55 / 6)}
              className="transition-all duration-700"
            />
          </svg>
          <div className="absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full transition-transform duration-700" style={{ transform: `translate(-50%, -50%) rotate(${-105 + active * 42}deg)` }}>
            <div className="absolute left-1/2 top-0 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white bg-[#2B5BA8] shadow-[0_0_20px_rgba(74,144,217,0.8)]" />
          </div>

          <div className="absolute left-1/2 top-[52%] z-10 flex -translate-x-1/2 -translate-y-1/2 items-baseline">
            {chars.map((char, idx) => (
              <span key={char} className="flex items-baseline">
                <span className={`font-montserrat text-[84px] font-black transition-all duration-300 ${activeStep.char === idx ? "-translate-y-2 scale-110 text-[#4A90D9] drop-shadow-[0_8px_22px_rgba(74,144,217,0.35)]" : "text-white drop-shadow-[0_0_18px_rgba(173,213,255,1)]"}`}>{char}</span>
                {idx < chars.length - 1 && <span className="mx-2.5 text-[48px] font-black text-white drop-shadow-[0_0_16px_rgba(173,213,255,1)]">.</span>}
              </span>
            ))}
          </div>

          <div className="absolute inset-0 z-20">
            {steps.map((step, index) => (
              <button
                key={step.kr}
                type="button"
                onMouseEnter={() => setActive(index)}
                onClick={() => setActive(index)}
                className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center"
                style={markerPositions[index]}
              >
                <span className={`mb-3 flex h-14 w-14 items-center justify-center rounded-full border-2 text-[17px] font-black transition-all ${active === index ? "scale-110 border-[#2B5BA8] bg-[#2B5BA8] text-white shadow-[0_6px_20px_rgba(74,144,217,0.4)]" : "border-[#D2DCE6] bg-white text-[#94A3B8]"}`}>{String(index + 1).padStart(2, "0")}</span>
                <span className={`text-[17px] font-bold leading-tight transition-colors ${active === index ? "font-black text-[#1E293B]" : "text-[#94A3B8]"}`}>{step.kr}</span>
              </button>
            ))}
          </div>

          <div className="absolute inset-0 z-30">
            {steps.map((step, index) => (
              <article
                key={step.kr}
                className={`absolute w-[270px] rounded-[20px] border border-white bg-white p-4 shadow-[0_24px_58px_rgba(26,58,108,0.14)] transition-all duration-500 ${cardPositions[index]} ${active === index ? "translate-x-0 translate-y-0 opacity-100" : "pointer-events-none translate-y-5 opacity-0"}`}
              >
                <div className="mb-3.5 h-[148px] overflow-hidden rounded-xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={step.image} alt={step.kr} className="h-full w-full object-cover" />
                </div>
                <div className="mb-2 flex flex-wrap items-baseline gap-2">
                  <span className="text-[16px] font-black text-[#1A3A6C]">{step.kr}</span>
                  <span className="text-xs font-medium text-[#94A3B8]"><span className="font-bold text-[#4A90D9]">{step.letter}</span> {step.en}</span>
                </div>
                <p className="text-[13px] leading-6 text-[#64748B]">{step.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
