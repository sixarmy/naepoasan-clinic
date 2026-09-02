import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { clinic } from "@/lib/clinic";
import type { ServicePage } from "@/lib/servicePages";

export default function ServiceDetailDepartment({ page }: { page: ServicePage }) {
  return (
    <div className="bg-white">
      {/* 히어로 */}
      <section className="relative overflow-hidden bg-white px-5 py-16 lg:py-20">
        <div className="absolute right-0 top-0 h-full w-1/2 bg-[#f4fbf7] lg:block hidden" />
        <div className="relative z-10 mx-auto flex max-w-[1200px] flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
          <div className="flex-1">
            <ScrollReveal>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#e8f5ed] px-4 py-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#3d9b6a]" />
                <span className="text-[11px] font-black uppercase tracking-[0.18em] text-[#3d9b6a]">{page.eyebrow}</span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <h1 className="mb-4 text-[34px] font-black leading-[1.14] tracking-[-0.05em] text-[#1a2e20] sm:text-[44px] lg:text-[54px]">
                {page.title}<br /><span className="text-[#3d9b6a]">{page.english}</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <p className="mb-7 max-w-lg text-[15px] leading-8 text-[#555]">{page.subtitle}</p>
            </ScrollReveal>
            <ScrollReveal delay={210}>
              <div className="flex flex-wrap gap-2 mb-8">
                {page.badges.map((b) => (
                  <span key={b} className="rounded-full border border-[#3d9b6a]/25 bg-[#e8f5ed] px-3.5 py-1.5 text-[12px] font-semibold text-[#3d9b6a]">{b}</span>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal delay={260}>
              <div className="flex flex-wrap gap-3">
                <Link href="/about/hours" className="inline-flex items-center rounded-full bg-[#3d9b6a] px-6 py-3 text-[13px] font-black text-white transition-all hover:-translate-y-0.5 hover:bg-[#2d7a53]">
                  진료시간 확인 →
                </Link>
                <Link href="/about/location" className="inline-flex items-center rounded-full border border-[#d4eedd] px-6 py-3 text-[13px] font-semibold text-[#3d9b6a] transition-all hover:bg-[#e8f5ed]">
                  오시는 길 →
                </Link>
              </div>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={180} className="shrink-0 lg:w-[440px]">
            <div className="relative">
              <div className="absolute -left-4 -top-4 h-full w-full rounded-[24px] bg-[#e8f5ed]" />
              <div className="relative overflow-hidden rounded-[22px] shadow-2xl">
                <img src={page.image} alt={page.title} className="h-[280px] w-full object-cover lg:h-[380px]" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 소개 */}
      <section className="bg-[#f4fbf7] px-5 py-16 lg:py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-6 lg:grid-cols-3">
            <ScrollReveal>
              <div className="lg:col-span-1">
                <span className="mb-3 block text-[11px] font-black uppercase tracking-[0.18em] text-[#3d9b6a]">{page.introEnglish}</span>
                <h2 className="text-[24px] font-black leading-tight tracking-[-0.04em] text-[#1a2e20] lg:text-[28px]">{page.introTitle}</h2>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100} className="lg:col-span-2">
              <div className="space-y-4">
                {page.introParagraphs.map((p, i) => (
                  <div key={p} className="flex items-start gap-4 rounded-[16px] bg-white p-5 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#3d9b6a] text-[11px] font-black text-white">{i + 1}</span>
                    <p className="text-[14px] leading-7 text-[#444]">{p}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 증상 */}
      <section className="bg-white px-5 py-16 lg:py-20">
        <div className="mx-auto max-w-[1200px]">
          <ScrollReveal>
            <div className="mb-12 text-center">
              <span className="mb-3 block text-[11px] font-black uppercase tracking-[0.18em] text-[#3d9b6a]">SYMPTOMS</span>
              <h2 className="text-[26px] font-black tracking-[-0.04em] text-[#1a2e20] lg:text-[32px]">{page.symptomTitle}</h2>
            </div>
          </ScrollReveal>
          <div className="flex flex-col gap-8 lg:flex-row lg:gap-6">
            {page.symptomGroups.map((group, gi) => (
              <ScrollReveal key={group.label} delay={gi * 100} className="flex-1">
                <div className={`h-full rounded-[22px] ${group.danger ? "bg-gradient-to-b from-[#fff5f5] to-[#fff8f8] border border-[#fecaca]" : "bg-gradient-to-b from-[#f4fbf7] to-[#edf8f2] border border-[#d4eedd]"} p-7`}>
                  <div className="mb-5 flex items-center gap-3">
                    <div className={`rounded-[10px] p-2 ${group.danger ? "bg-[#fee2e2]" : "bg-[#e8f5ed]"}`}>
                      <svg className={`h-5 w-5 ${group.danger ? "stroke-[#e05050]" : "stroke-[#3d9b6a]"}`} fill="none" viewBox="0 0 24 24" strokeWidth={2.2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={group.danger ? "M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" : "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"} />
                      </svg>
                    </div>
                    <h3 className={`text-[16px] font-black ${group.danger ? "text-[#c03030]" : "text-[#1a2e20]"}`}>{group.label}</h3>
                  </div>
                  <div className="space-y-3">
                    {group.items.map((item) => (
                      <div key={item.title} className="flex items-start gap-3 rounded-[12px] bg-white/70 p-4">
                        <span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${group.danger ? "bg-[#e05050]" : "bg-[#3d9b6a]"}`} />
                        <div>
                          <span className="block text-[14px] font-black text-[#111]">{item.title}</span>
                          <span className="text-[12.5px] text-[#777]">{item.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 치료 방식 */}
      <section className="bg-[#1a2e20] px-5 py-16 lg:py-20">
        <div className="mx-auto max-w-[1200px]">
          <ScrollReveal>
            <div className="mb-12 text-center">
              <span className="mb-3 block text-[11px] font-black uppercase tracking-[0.2em] text-[#7ee8b8]">APPROACH</span>
              <h2 className="mb-2 text-[26px] font-black tracking-[-0.04em] text-white lg:text-[32px]">{page.treatmentTitle}</h2>
              <p className="text-[14px] text-white/45">{page.treatmentDesc}</p>
            </div>
          </ScrollReveal>
          <div className="grid gap-5 lg:grid-cols-3">
            {page.treatments.map((t, i) => (
              <ScrollReveal key={t.title} delay={i * 100}>
                <div className="h-full rounded-[20px] border border-white/8 bg-white/5 p-7 transition-all hover:border-[#3d9b6a]/40 hover:bg-white/8">
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-[#3d9b6a]/20">
                      <span className="text-[14px] font-black text-[#7ee8b8]">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <h3 className="text-[16px] font-black text-white">{t.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {t.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-[#3d9b6a]" />
                        <span className="text-[13.5px] leading-7 text-white/50">{item}</span>
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
      <section className="bg-[#f4fbf7] px-5 py-16 lg:py-20">
        <div className="mx-auto max-w-[1200px]">
          <ScrollReveal>
            <div className="mb-6 rounded-[20px] border border-[#d4eedd] bg-white p-8">
              <h3 className="mb-5 text-[17px] font-black text-[#1a2e20]">{page.summaryTitle}</h3>
              <div className="space-y-3">
                {page.summaries.map((s, i) => (
                  <div key={s} className="flex items-start gap-3 rounded-[12px] bg-[#f4fbf7] p-4">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#3d9b6a] text-[10px] font-black text-white">{i + 1}</span>
                    <p className="text-[14px] leading-7 text-[#555]">{s}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <div className="relative overflow-hidden rounded-[20px] bg-[#3d9b6a] p-8 text-center lg:p-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(255,255,255,0.08),transparent_55%)]" />
              <h2 className="relative mb-3 text-[22px] font-black text-white">{page.title} 진료,<br />{clinic.shortName}에서 받으세요</h2>
              <p className="relative mb-7 text-[14px] text-white/70">증상에 맞는 정확한 평가와 설명을 드립니다.</p>
              <div className="relative flex flex-col justify-center gap-3 sm:flex-row">
                <Link href="/about/location" className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-[14px] font-black text-[#3d9b6a] transition-all hover:-translate-y-0.5">오시는 길 →</Link>
                <Link href="/doctors" className="inline-flex items-center justify-center rounded-full border border-white/35 px-7 py-3.5 text-[14px] font-semibold text-white transition-all hover:bg-white/10">의료진 소개 →</Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
