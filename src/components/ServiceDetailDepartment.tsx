"use client";

import { useState } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { clinic } from "@/lib/clinic";
import type { ServicePage } from "@/lib/servicePages";

export default function ServiceDetailDepartment({ page }: { page: ServicePage }) {
  const [activeTab, setActiveTab] = useState(0);
  const normalGroup = page.symptomGroups.find((g) => !g.danger);
  const dangerGroup = page.symptomGroups.find((g) => g.danger);
  const tabs = [
    ...(normalGroup ? [{ label: normalGroup.label, group: normalGroup }] : []),
    ...(dangerGroup ? [{ label: `⚠ ${dangerGroup.label}`, group: dangerGroup }] : []),
  ];

  return (
    <div className="bg-white">
      {/* 히어로 — 사진 좌측 + 텍스트 우측, 따뜻한 느낌 */}
      <section className="relative overflow-hidden bg-[#fafffe] px-5 py-0">
        <div className="mx-auto flex max-w-[1400px] flex-col lg:flex-row lg:min-h-[580px]">
          {/* 좌측 사진 */}
          <ScrollReveal className="relative lg:w-[48%] lg:shrink-0">
            <div className="relative h-[300px] overflow-hidden lg:h-full">
              <img src={page.image} alt={page.title} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#fafffe]/30 lg:block hidden" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#fafffe] via-transparent to-transparent lg:hidden" />
            </div>
          </ScrollReveal>

          {/* 우측 콘텐츠 */}
          <div className="flex flex-1 flex-col justify-center px-0 py-12 lg:px-14 lg:py-16">
            <ScrollReveal>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#e8f5ed] px-4 py-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#3d9b6a]" />
                <span className="text-[11px] font-black uppercase tracking-[0.18em] text-[#3d9b6a]">{page.eyebrow}</span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <h1 className="mb-4 text-[32px] font-black leading-[1.14] tracking-[-0.05em] text-[#1a2e20] sm:text-[42px] lg:text-[52px]">
                {page.title}<br /><span className="text-[#3d9b6a]">{page.english}</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <p className="mb-7 text-[15px] leading-8 text-[#666]">{page.subtitle}</p>
            </ScrollReveal>
            <ScrollReveal delay={210}>
              <div className="mb-8 flex flex-wrap gap-2">
                {page.badges.map((b) => (
                  <span key={b} className="rounded-full border border-[#3d9b6a]/20 bg-[#f4fbf7] px-3.5 py-1.5 text-[12px] font-bold text-[#3d9b6a]">{b}</span>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal delay={260}>
              <div className="flex flex-wrap gap-3">
                <Link href="/about/hours" className="inline-flex items-center rounded-full bg-[#3d9b6a] px-6 py-3 text-[13px] font-black text-white transition-all hover:-translate-y-0.5 hover:bg-[#2d7a53]">진료시간 확인 →</Link>
                <Link href="/about/location" className="inline-flex items-center rounded-full border border-[#d4eedd] bg-white px-6 py-3 text-[13px] font-semibold text-[#3d9b6a] transition-all hover:bg-[#e8f5ed]">오시는 길 →</Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 소개 — 아이콘 카드 */}
      <section className="bg-[#f4fbf7] px-5 py-14 lg:py-18">
        <div className="mx-auto max-w-[1200px]">
          <ScrollReveal>
            <div className="mb-10 flex items-end gap-4">
              <div>
                <span className="mb-1 block text-[11px] font-black uppercase tracking-[0.18em] text-[#3d9b6a]">{page.introEnglish}</span>
                <h2 className="text-[24px] font-black tracking-[-0.04em] text-[#1a2e20] lg:text-[28px]">{page.introTitle}</h2>
              </div>
            </div>
          </ScrollReveal>
          <div className="grid gap-4 sm:grid-cols-3">
            {page.introParagraphs.map((p, i) => {
              const icons = ["🏥", "🩺", "📋"];
              return (
                <ScrollReveal key={p} delay={i * 80}>
                  <div className="flex h-full flex-col rounded-[20px] bg-white p-6 shadow-[0_2px_16px_rgba(61,155,106,0.07)]">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-[14px] bg-[#e8f5ed] text-[24px]">
                      {icons[i]}
                    </div>
                    <p className="text-[14px] leading-7 text-[#555]">{p}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 증상 — 탭 UI */}
      <section className="bg-white px-5 py-14 lg:py-18">
        <div className="mx-auto max-w-[1200px]">
          <ScrollReveal>
            <div className="mb-10 text-center">
              <span className="mb-3 block text-[11px] font-black uppercase tracking-[0.18em] text-[#3d9b6a]">SYMPTOMS</span>
              <h2 className="text-[26px] font-black tracking-[-0.04em] text-[#1a2e20] lg:text-[32px]">{page.symptomTitle}</h2>
            </div>
          </ScrollReveal>

          {/* 탭 버튼 */}
          {tabs.length > 1 && (
            <ScrollReveal>
              <div className="mb-6 flex justify-center gap-2">
                {tabs.map((tab, i) => (
                  <button
                    key={tab.label}
                    type="button"
                    onClick={() => setActiveTab(i)}
                    className={`rounded-full px-5 py-2.5 text-[13px] font-black transition-all ${
                      activeTab === i
                        ? i === 1 ? "bg-[#e05050] text-white" : "bg-[#3d9b6a] text-white"
                        : "bg-[#f4fbf7] text-[#666] hover:bg-[#e8f5ed]"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </ScrollReveal>
          )}

          {/* 탭 콘텐츠 */}
          {tabs.map((tab, i) => (
            <div key={tab.label} className={activeTab === i ? "block" : "hidden"}>
              <div className="grid gap-4 sm:grid-cols-3">
                {tab.group.items.map((item, j) => (
                  <ScrollReveal key={item.title} delay={j * 60}>
                    <div className={`rounded-[18px] p-6 ${i === 1 ? "border border-[#fecaca] bg-[#fff8f8]" : "border border-[#d4eedd] bg-[#f4fbf7]"} transition-all hover:-translate-y-1 hover:shadow-md`}>
                      <div className={`mb-3 h-10 w-10 rounded-[12px] ${i === 1 ? "bg-[#fee2e2]" : "bg-[#e8f5ed]"} flex items-center justify-center`}>
                        <svg className={`h-5 w-5 ${i === 1 ? "stroke-[#e05050]" : "stroke-[#3d9b6a]"}`} fill="none" viewBox="0 0 24 24" strokeWidth={2.2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d={i === 1 ? "M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" : "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"} />
                        </svg>
                      </div>
                      <h4 className="mb-1.5 text-[15px] font-black text-[#111]">{item.title}</h4>
                      <p className="text-[12.5px] leading-5 text-[#777]">{item.desc}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
              {i === 1 && (
                <p className="mt-4 text-center text-[12px] text-[#e05050]">⚠ 위 증상은 조기 진료가 중요합니다.</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 치료 방식 — 연한 그린 카드 (이전 다크 배경 → 라이트로 변경) */}
      <section className="bg-[#f4fbf7] px-5 py-14 lg:py-18">
        <div className="mx-auto max-w-[1200px]">
          <ScrollReveal>
            <div className="mb-12 text-center">
              <span className="mb-3 block text-[11px] font-black uppercase tracking-[0.18em] text-[#3d9b6a]">OUR APPROACH</span>
              <h2 className="mb-2 text-[26px] font-black tracking-[-0.04em] text-[#1a2e20] lg:text-[32px]">{page.treatmentTitle}</h2>
              <p className="text-[14px] text-[#777]">{page.treatmentDesc}</p>
            </div>
          </ScrollReveal>
          <div className="grid gap-5 lg:grid-cols-3">
            {page.treatments.map((t, i) => (
              <ScrollReveal key={t.title} delay={i * 100}>
                <div className="group relative h-full overflow-hidden rounded-[22px] bg-white p-7 shadow-[0_4px_20px_rgba(61,155,106,0.07)] transition-all hover:-translate-y-1.5 hover:shadow-[0_12px_32px_rgba(61,155,106,0.12)]">
                  <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#3d9b6a] to-[#7ee8b8]" />
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-[14px] bg-[#e8f5ed] text-[18px] font-black text-[#3d9b6a]">{String(i + 1).padStart(2, "0")}</div>
                  <h3 className="mb-4 text-[17px] font-black text-[#1a2e20]">{t.title}</h3>
                  <ul className="space-y-3">
                    {t.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <svg className="mt-1 h-4 w-4 shrink-0 stroke-[#3d9b6a]" fill="none" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                        <span className="text-[13.5px] leading-7 text-[#555]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 요약 + CTA */}
      <section className="bg-white px-5 py-14 lg:py-18">
        <div className="mx-auto max-w-[1200px]">
          <ScrollReveal>
            <div className="mb-6 rounded-[20px] border border-[#d4eedd] bg-[#f4fbf7] p-8">
              <h3 className="mb-5 text-[17px] font-black text-[#1a2e20]">{page.summaryTitle}</h3>
              <div className="grid gap-3 sm:grid-cols-3">
                {page.summaries.map((s, i) => (
                  <div key={s} className="flex items-start gap-3 rounded-[12px] bg-white p-4 shadow-[0_2px_8px_rgba(61,155,106,0.06)]">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#3d9b6a] text-[11px] font-black text-white">{i + 1}</span>
                    <p className="text-[13px] leading-6 text-[#555]">{s}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <div className="relative overflow-hidden rounded-[22px] bg-[#1a2e20] p-8 text-center lg:p-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(61,155,106,0.2),transparent_55%)]" />
              <h2 className="relative mb-3 text-[22px] font-black text-white">{page.title} 진료,<br />{clinic.shortName}에서 받으세요</h2>
              <p className="relative mb-7 text-[14px] text-white/45">정확한 평가와 차분한 설명으로 함께합니다.</p>
              <div className="relative flex flex-col justify-center gap-3 sm:flex-row">
                <Link href="/about/location" className="inline-flex items-center justify-center rounded-full bg-[#3d9b6a] px-7 py-3.5 text-[14px] font-black text-white transition-all hover:-translate-y-0.5">오시는 길 →</Link>
                <Link href="/doctors" className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-3.5 text-[14px] font-semibold text-white/70 transition-all hover:bg-white/10">의료진 소개 →</Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
