"use client";

import { useState } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { clinic } from "@/lib/clinic";
import type { ServicePage } from "@/lib/servicePages";

const timelineSteps = [
  { num: "01", title: "대상자 확인", desc: "연령·건강보험 가입 여부로 검진 항목 확인", icon: "📋" },
  { num: "02", title: "검진 전 준비", desc: "금식·복용약 안내 후 방문 준비", icon: "🌙" },
  { num: "03", title: "검사 진행", desc: "문진·기본검사·필요 항목 시행", icon: "🔬" },
  { num: "04", title: "결과 상담", desc: "결과 해석·이상 소견·추적 계획 안내", icon: "📊" },
];

const cancerCards = [
  { name: "위암", age: "만 40세 이상 2년마다", color: "from-[#3d9b6a] to-[#2d7a53]", icon: "🫀" },
  { name: "대장암", age: "만 50세 이상 1년마다", color: "from-[#2d7a53] to-[#1a5c3a]", icon: "🔄" },
  { name: "간암", age: "만 40세 이상 고위험군 6개월마다", color: "from-[#1a5c3a] to-[#0d3d28]", icon: "🫁" },
  { name: "유방암", age: "만 40세 이상 여성 2년마다", color: "from-[#5ab882] to-[#3d9b6a]", icon: "💗" },
  { name: "자궁경부암", age: "만 20세 이상 여성 2년마다", color: "from-[#7ee8b8] to-[#5ab882]", icon: "🌸" },
];

export default function ServiceDetailCheckup({ page }: { page: ServicePage }) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="bg-white">
      {/* 히어로 — 풀스크린 사진 + 오버레이 */}
      <section className="relative min-h-[600px] overflow-hidden lg:min-h-[700px]">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${page.image}')` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />

        <div className="relative z-10 mx-auto flex h-full max-w-[1200px] items-center px-5 py-24 lg:py-32">
          <div className="max-w-[600px]">
            <ScrollReveal>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#3d9b6a]/30 bg-[#e8f5ed] px-4 py-2">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#3d9b6a]" />
                <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#3d9b6a]">{page.eyebrow}</span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <h1 className="mb-5 text-[38px] font-black leading-[1.1] tracking-[-0.05em] text-[#1a2e20] sm:text-[52px] lg:text-[64px]">
                {page.title}<br /><span className="text-[#3d9b6a]">{page.english}</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={160}>
              <p className="mb-8 text-[15px] leading-8 text-[#555] lg:text-[17px]">{page.subtitle}</p>
            </ScrollReveal>
            <ScrollReveal delay={220}>
              <div className="flex flex-wrap gap-2 mb-8">
                {page.badges.map((b) => (
                  <span key={b} className="rounded-full border border-[#3d9b6a]/30 bg-white px-4 py-1.5 text-[12px] font-bold text-[#3d9b6a] shadow-sm">{b}</span>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal delay={280}>
              <div className="flex gap-3">
                <Link href="/about/hours" className="inline-flex items-center rounded-full bg-[#3d9b6a] px-6 py-3 text-[13px] font-black text-white transition-all hover:-translate-y-0.5 hover:bg-[#2d7a53]">진료시간 확인 →</Link>
                <Link href="/about/location" className="inline-flex items-center rounded-full border border-[#d4eedd] bg-white px-6 py-3 text-[13px] font-semibold text-[#3d9b6a] transition-all hover:bg-[#e8f5ed]">오시는 길 →</Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 5대암 국가검진 카드 */}
      <section className="bg-[#1a2e20] px-5 py-16 lg:py-20">
        <div className="mx-auto max-w-[1200px]">
          <ScrollReveal>
            <div className="mb-10 text-center">
              <span className="mb-3 block text-[11px] font-black uppercase tracking-[0.2em] text-[#7ee8b8]">NATIONAL SCREENING</span>
              <h2 className="text-[26px] font-black text-white lg:text-[32px]">5대 국가암검진 대상</h2>
              <p className="mt-3 text-[13px] text-white/40">국민건강보험 가입자는 무료 또는 10% 본인부담으로 검진 가능</p>
            </div>
          </ScrollReveal>
          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {cancerCards.map((c, i) => (
              <ScrollReveal key={c.name} delay={i * 60}>
                <div className={`relative overflow-hidden rounded-[18px] bg-gradient-to-br ${c.color} p-5 text-white`}>
                  <div className="mb-3 text-[28px]">{c.icon}</div>
                  <h3 className="mb-2 text-[18px] font-black">{c.name}</h3>
                  <p className="text-[11px] leading-5 text-white/70">{c.age}</p>
                  <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-white/5" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 검진 타임라인 */}
      <section className="bg-white px-5 py-16 lg:py-20">
        <div className="mx-auto max-w-[1200px]">
          <ScrollReveal>
            <div className="mb-12 text-center">
              <span className="mb-3 block text-[11px] font-black uppercase tracking-[0.2em] text-[#3d9b6a]">PROCESS</span>
              <h2 className="text-[26px] font-black tracking-[-0.04em] text-[#1a2e20] lg:text-[32px]">검진 진행 순서</h2>
            </div>
          </ScrollReveal>
          <div className="relative mx-auto max-w-[720px]">
            <div className="absolute left-[27px] top-0 h-full w-0.5 bg-[#d4eedd] lg:left-[35px]" />
            {timelineSteps.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 100}>
                <div className="relative mb-8 flex gap-6 last:mb-0 lg:gap-8">
                  <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#3d9b6a] text-[22px] shadow-[0_0_0_6px_white,0_0_0_8px_#d4eedd]">
                    {step.icon}
                  </div>
                  <div className="flex-1 rounded-[18px] border border-[#e8f5ed] bg-[#f4fbf7] p-5 pt-4">
                    <div className="mb-1 flex items-center gap-2">
                      <span className="text-[11px] font-black tracking-[0.12em] text-[#3d9b6a]">{step.num}</span>
                      <h3 className="text-[16px] font-black text-[#1a2e20]">{step.title}</h3>
                    </div>
                    <p className="text-[13px] leading-6 text-[#666]">{step.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 소개 */}
      <section className="bg-[#f4fbf7] px-5 py-16 lg:py-20">
        <div className="mx-auto max-w-[1200px]">
          <ScrollReveal>
            <div className="overflow-hidden rounded-[24px] bg-white shadow-[0_8px_40px_rgba(61,155,106,0.08)]">
              <div className="flex flex-col lg:flex-row">
                <div className="overflow-hidden lg:w-[420px] lg:shrink-0">
                  <img src={page.introImage ?? page.image} alt={page.introTitle} className="h-[240px] w-full object-cover lg:h-full" />
                </div>
                <div className="flex flex-col justify-center p-8 lg:p-12">
                  <span className="mb-2 block text-[11px] font-black uppercase tracking-[0.18em] text-[#3d9b6a]">{page.introEnglish}</span>
                  <h2 className="mb-5 text-[24px] font-black tracking-[-0.04em] text-[#1a2e20] lg:text-[28px]">{page.introTitle}</h2>
                  {page.introParagraphs.map((p) => (
                    <p key={p} className="mb-3.5 text-[14px] leading-8 text-[#555] last:mb-0">{p}</p>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 아코디언 — 검진 필요 경우 */}
      <section className="bg-white px-5 py-16 lg:py-20">
        <div className="mx-auto max-w-[1200px]">
          <ScrollReveal>
            <div className="mb-12 text-center">
              <span className="mb-3 block text-[11px] font-black uppercase tracking-[0.18em] text-[#3d9b6a]">WHEN TO VISIT</span>
              <h2 className="text-[26px] font-black tracking-[-0.04em] text-[#1a2e20] lg:text-[32px]">{page.symptomTitle}</h2>
            </div>
          </ScrollReveal>
          <div className="mx-auto max-w-[800px] space-y-3">
            {page.symptomGroups.map((group, gi) => (
              <ScrollReveal key={group.label} delay={gi * 80}>
                <div className={`overflow-hidden rounded-[18px] border ${group.danger ? "border-[#fecaca]" : "border-[#d4eedd]"}`}>
                  <button
                    type="button"
                    className={`flex w-full items-center justify-between px-6 py-5 text-left ${group.danger ? "bg-[#fff8f8]" : "bg-[#f4fbf7]"}`}
                    onClick={() => setOpenIdx(openIdx === gi ? null : gi)}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`h-7 w-7 rounded-full ${group.danger ? "bg-[#e05050]" : "bg-[#3d9b6a]"} flex items-center justify-center`}>
                        <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d={group.danger ? "M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" : "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"} /></svg>
                      </div>
                      <span className={`text-[16px] font-black ${group.danger ? "text-[#c03030]" : "text-[#1a2e20]"}`}>{group.label}</span>
                    </div>
                    <span className={`text-[12px] transition-transform ${openIdx === gi ? "rotate-180" : ""}`}>▼</span>
                  </button>
                  <div className={`transition-all duration-300 ${openIdx === gi ? "max-h-[400px]" : "max-h-0"} overflow-hidden`}>
                    <div className="grid gap-3 p-5 sm:grid-cols-3">
                      {group.items.map((item) => (
                        <div key={item.title} className={`rounded-[14px] p-4 ${group.danger ? "bg-[#fef2f2]" : "bg-[#e8f5ed]"}`}>
                          <h4 className="mb-1 text-[14px] font-black text-[#111]">{item.title}</h4>
                          <p className="text-[12px] leading-5 text-[#777]">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 진행 방식 */}
      <section className="bg-[#f4fbf7] px-5 py-16 lg:py-20">
        <div className="mx-auto max-w-[1200px]">
          <ScrollReveal>
            <div className="mb-12 text-center">
              <span className="mb-3 block text-[11px] font-black uppercase tracking-[0.18em] text-[#3d9b6a]">HOW WE DO IT</span>
              <h2 className="mb-2 text-[26px] font-black tracking-[-0.04em] text-[#1a2e20] lg:text-[32px]">{page.treatmentTitle}</h2>
              <p className="text-[14px] text-[#777]">{page.treatmentDesc}</p>
            </div>
          </ScrollReveal>
          <div className="grid gap-5 lg:grid-cols-3">
            {page.treatments.map((t, i) => (
              <ScrollReveal key={t.title} delay={i * 100}>
                <div className="relative overflow-hidden rounded-[20px] bg-white p-7 shadow-[0_4px_20px_rgba(61,155,106,0.07)]">
                  <div className="absolute right-5 top-5 text-[72px] font-black leading-none text-[#3d9b6a]/6">{i + 1}</div>
                  <div className="relative">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-[14px] bg-[#e8f5ed]">
                      <svg className="h-6 w-6 stroke-[#3d9b6a]" fill="none" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <h3 className="mb-4 text-[17px] font-black text-[#1a2e20]">{t.title}</h3>
                    <ul className="space-y-2.5">
                      {t.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-[#3d9b6a]" />
                          <span className="text-[13.5px] leading-7 text-[#555]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-5 py-14 lg:py-18">
        <div className="mx-auto max-w-[1200px]">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-[#3d9b6a] to-[#1a5c3a] p-10 text-center lg:p-14">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.07),transparent_50%)]" />
              <div className="relative">
                <h2 className="mb-3 text-[24px] font-black text-white lg:text-[30px]">{page.title}, {clinic.shortName}에서 받으세요</h2>
                <p className="mb-8 text-[14px] text-white/65">검진 전 준비부터 결과 상담까지 편안하게 안내합니다.</p>
                <div className="flex flex-col justify-center gap-3 sm:flex-row">
                  <Link href="/about/hours" className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-[14px] font-black text-[#3d9b6a] transition-all hover:-translate-y-0.5">진료시간 확인 →</Link>
                  <Link href="/about/location" className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-3.5 text-[14px] font-semibold text-white transition-all hover:bg-white/10">오시는 길 →</Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
