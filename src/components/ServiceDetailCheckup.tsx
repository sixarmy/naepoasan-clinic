import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { clinic } from "@/lib/clinic";
import type { ServicePage } from "@/lib/servicePages";

const checkupFlow = [
  { step: "STEP 01", title: "대상자 확인", desc: "연령·건강보험 가입 여부로 검진 대상 및 항목 확인" },
  { step: "STEP 02", title: "검진 전 준비", desc: "금식·복용약·준비사항 안내를 받고 방문 준비" },
  { step: "STEP 03", title: "검사 진행", desc: "문진·기본검사·내시경 등 필요 항목 시행" },
  { step: "STEP 04", title: "결과 상담", desc: "결과 해석·이상 소견 설명·추적 계획 안내" },
];

export default function ServiceDetailCheckup({ page }: { page: ServicePage }) {
  return (
    <div className="bg-white">
      {/* 히어로 */}
      <section className="relative overflow-hidden bg-[#f4fbf7] px-5 pb-0 pt-16 lg:pt-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end">
            <div className="flex-1 pb-12 lg:pb-20">
              <ScrollReveal>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#3d9b6a]/30 bg-[#e8f5ed] px-4 py-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#3d9b6a]" />
                  <span className="text-[11px] font-black uppercase tracking-[0.18em] text-[#3d9b6a]">{page.eyebrow}</span>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={80}>
                <h1 className="mb-4 text-[36px] font-black leading-[1.12] tracking-[-0.05em] text-[#1a2e20] sm:text-[48px] lg:text-[56px]">
                  {page.title}<br /><span className="text-[#3d9b6a]">{page.english}</span>
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={160}>
                <p className="mb-7 max-w-lg text-[15px] leading-8 text-[#555]">{page.subtitle}</p>
              </ScrollReveal>
              <ScrollReveal delay={220}>
                <div className="flex flex-wrap gap-2">
                  {page.badges.map((b) => (
                    <span key={b} className="rounded-full border border-[#3d9b6a]/25 bg-white px-3.5 py-1.5 text-[12px] font-semibold text-[#3d9b6a]">{b}</span>
                  ))}
                </div>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={160} className="shrink-0 lg:w-[420px]">
              <div className="h-[280px] overflow-hidden rounded-t-[22px] lg:h-[360px]">
                <img src={page.image} alt={page.title} className="h-full w-full object-cover" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 검진 플로우 */}
      <section className="bg-[#1a2e20] px-5 py-16 lg:py-20">
        <div className="mx-auto max-w-[1200px]">
          <ScrollReveal>
            <div className="mb-12 text-center">
              <span className="mb-3 block text-[11px] font-black uppercase tracking-[0.2em] text-[#7ee8b8]">PROCESS</span>
              <h2 className="text-[24px] font-black text-white lg:text-[30px]">검진 진행 순서</h2>
            </div>
          </ScrollReveal>
          <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {checkupFlow.map((item, i) => (
              <ScrollReveal key={item.step} delay={i * 80}>
                <div className="relative rounded-[18px] border border-white/8 bg-white/5 p-6">
                  <div className="absolute -top-3 left-5 rounded-full bg-[#3d9b6a] px-3 py-1 text-[10px] font-black tracking-[0.1em] text-white">{item.step}</div>
                  <div className="mt-3">
                    <h3 className="mb-2 text-[16px] font-black text-white">{item.title}</h3>
                    <p className="text-[13px] leading-6 text-white/45">{item.desc}</p>
                  </div>
                  {i < checkupFlow.length - 1 && (
                    <div className="absolute -right-2.5 top-1/2 hidden -translate-y-1/2 text-[#3d9b6a] lg:block">→</div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 소개 */}
      <section className="bg-white px-5 py-20 lg:py-24">
        <div className="mx-auto max-w-[1200px]">
          <ScrollReveal>
            <div className="overflow-hidden rounded-[24px] bg-[#f4fbf7]">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:flex-[0.9]">
                  <img src={page.introImage ?? page.image} alt={page.introTitle} className="h-[240px] w-full object-cover lg:h-full" />
                </div>
                <div className="flex flex-col justify-center p-8 lg:flex-[1.1] lg:p-12">
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

      {/* 검진 필요 경우 */}
      <section className="bg-[#f4fbf7] px-5 py-20 lg:py-24">
        <div className="mx-auto max-w-[1200px]">
          <ScrollReveal>
            <div className="mb-12 text-center">
              <span className="mb-3 block text-[11px] font-black uppercase tracking-[0.18em] text-[#3d9b6a]">WHEN TO VISIT</span>
              <h2 className="text-[26px] font-black tracking-[-0.04em] text-[#1a2e20] lg:text-[32px]">{page.symptomTitle}</h2>
            </div>
          </ScrollReveal>
          <div className="space-y-8">
            {page.symptomGroups.map((group, gi) => (
              <ScrollReveal key={group.label} delay={gi * 80}>
                <div className={`rounded-[20px] p-8 ${group.danger ? "border border-[#fecaca] bg-[#fff8f8]" : "border border-[#d4eedd] bg-white"}`}>
                  <div className="mb-6 flex items-center gap-3">
                    <div className={`h-7 w-7 rounded-full ${group.danger ? "bg-[#e05050]" : "bg-[#3d9b6a]"} flex items-center justify-center`}>
                      <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d={group.danger ? "M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" : "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"} /></svg>
                    </div>
                    <h3 className={`text-[16px] font-black ${group.danger ? "text-[#c03030]" : "text-[#1a2e20]"}`}>{group.label}</h3>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-3">
                    {group.items.map((item) => (
                      <div key={item.title} className={`rounded-[14px] p-4 ${group.danger ? "bg-[#fef2f2]" : "bg-[#f4fbf7]"}`}>
                        <h4 className="mb-1 text-[14px] font-black text-[#111]">{item.title}</h4>
                        <p className="text-[12px] leading-5 text-[#777]">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 진행 방식 */}
      <section className="bg-white px-5 py-20 lg:py-24">
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
                <div className="relative overflow-hidden rounded-[20px] border border-[#d4eedd] bg-[#f4fbf7] p-7">
                  <div className="absolute right-5 top-5 text-[64px] font-black leading-none text-[#3d9b6a]/8">{i + 1}</div>
                  <div className="relative">
                    <h3 className="mb-5 text-[17px] font-black text-[#1a2e20]">{t.title}</h3>
                    <ul className="space-y-3">
                      {t.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <svg className="mt-1 h-4 w-4 shrink-0 stroke-[#3d9b6a]" fill="none" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
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

      {/* 핵심 요약 + CTA */}
      <section className="bg-[#f4fbf7] px-5 py-16 lg:py-20">
        <div className="mx-auto max-w-[1200px]">
          <ScrollReveal>
            <div className="mb-6 rounded-[20px] border border-[#d4eedd] bg-white p-8">
              <h3 className="mb-5 text-[17px] font-black text-[#1a2e20]">{page.summaryTitle}</h3>
              <div className="grid gap-3 sm:grid-cols-3">
                {page.summaries.map((s, i) => (
                  <div key={s} className="flex items-start gap-3 rounded-[12px] bg-[#f4fbf7] p-4">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#3d9b6a] text-[10px] font-black text-white">{i + 1}</span>
                    <p className="text-[13px] leading-6 text-[#555]">{s}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <div className="relative overflow-hidden rounded-[20px] bg-[#3d9b6a] p-8 text-center">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(255,255,255,0.08),transparent_55%)]" />
              <h2 className="relative mb-3 text-[22px] font-black text-white">{page.title}, {clinic.shortName}에서 받으세요</h2>
              <p className="relative mb-6 text-[14px] text-white/70">검진 전 준비부터 결과 상담까지 편안하게 안내합니다.</p>
              <div className="relative flex flex-col justify-center gap-3 sm:flex-row">
                <Link href="/about/hours" className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-[14px] font-black text-[#3d9b6a] transition-all hover:-translate-y-0.5">진료시간 확인 →</Link>
                <Link href="/about/location" className="inline-flex items-center justify-center rounded-full border border-white/35 px-7 py-3.5 text-[14px] font-semibold text-white transition-all hover:bg-white/10">오시는 길 →</Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
