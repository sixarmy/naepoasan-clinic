import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { clinic } from "@/lib/clinic";
import type { ServicePage } from "@/lib/servicePages";

const categoryMeta: Record<string, { stat: string; statLabel: string; riskLabel: string; riskPct: number; accentColor: string }> = {
  "chronic/hypertension": { stat: "140/90", statLabel: "mmHg 이상이면 고혈압", riskLabel: "심뇌혈관 합병증 위험", riskPct: 72, accentColor: "#e05050" },
  "chronic/diabetes":     { stat: "6.5%",  statLabel: "당화혈색소 기준 이상", riskLabel: "망막·신장·신경 합병증 위험", riskPct: 65, accentColor: "#f0a030" },
  "chronic/dyslipidemia": { stat: "200",   statLabel: "mg/dL 이상 콜레스테롤", riskLabel: "동맥경화·심혈관 위험", riskPct: 58, accentColor: "#5a7ef0" },
  "special/osteoporosis": { stat: "-2.5",  statLabel: "T-score 이하 골다공증", riskLabel: "저충격 골절 위험", riskPct: 48, accentColor: "#a07850" },
  "special/obesity":      { stat: "BMI 25",statLabel: "이상 비만 기준", riskLabel: "대사질환 동반 위험", riskPct: 55, accentColor: "#3d9b6a" },
};

export default function ServiceDetailChronic({ page }: { page: ServicePage }) {
  const meta = categoryMeta[page.slug] ?? { stat: "", statLabel: "", riskLabel: "", riskPct: 60, accentColor: "#3d9b6a" };

  return (
    <div className="bg-[#0a1a10]">
      {/* 히어로 — 다크 대시보드 */}
      <section className="relative overflow-hidden px-5 pb-0 pt-20 lg:pt-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_0%,rgba(61,155,106,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_100%,rgba(61,155,106,0.08),transparent_50%)]" />

        <div className="relative z-10 mx-auto max-w-[1200px]">
          <div className="flex flex-col gap-10 pb-16 lg:flex-row lg:items-end lg:gap-16 lg:pb-20">
            <div className="flex-1">
              <ScrollReveal>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#3d9b6a]/30 bg-[#3d9b6a]/10 px-4 py-2">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#7ee8b8]" />
                  <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#7ee8b8]">{page.eyebrow}</span>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={80}>
                <h1 className="mb-5 text-[38px] font-black leading-[1.1] tracking-[-0.05em] text-white sm:text-[52px] lg:text-[66px]">
                  {page.title}<br /><span className="text-[#7ee8b8]">{page.english}</span>
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={150}>
                <p className="mb-7 max-w-xl text-[15px] leading-8 text-white/55 lg:text-[16px]">{page.subtitle}</p>
              </ScrollReveal>
              <ScrollReveal delay={210}>
                <div className="flex flex-wrap gap-2">
                  {page.badges.map((b) => (
                    <span key={b} className="rounded-full border border-white/15 bg-white/8 px-3.5 py-1.5 text-[12px] font-semibold text-white/70">{b}</span>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* 수치 대시보드 카드 */}
            <ScrollReveal delay={200} className="w-full lg:w-[320px] lg:shrink-0">
              <div className="rounded-[24px] border border-white/8 bg-white/5 p-7 backdrop-blur-sm">
                <p className="mb-2 text-[11px] font-black uppercase tracking-[0.15em] text-[#7ee8b8]">진단 기준 수치</p>
                <div className="mb-1 text-[56px] font-black leading-none tracking-tight text-white">{meta.stat}</div>
                <p className="mb-6 text-[13px] text-white/40">{meta.statLabel}</p>

                <div className="border-t border-white/8 pt-5">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-[12px] text-white/40">{meta.riskLabel}</span>
                    <span className="text-[12px] font-black" style={{ color: meta.accentColor }}>{meta.riskPct}%↑</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full rounded-full transition-all duration-1000" style={{ width: `${meta.riskPct}%`, backgroundColor: meta.accentColor }} />
                  </div>
                  <p className="mt-2 text-[11px] text-white/25">꾸준한 관리로 위험도를 낮출 수 있습니다</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* 바닥 그라디언트 → 다음 섹션 연결 */}
        <div className="h-16 bg-gradient-to-b from-[#0a1a10] to-white" />
      </section>

      {/* 소개 — 밝은 배경 */}
      <section className="bg-white px-5 py-16 lg:py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <ScrollReveal>
              <div className="overflow-hidden rounded-[22px] shadow-[0_8px_40px_rgba(0,0,0,0.08)]">
                <img src={page.introImage ?? page.image} alt={page.introTitle} className="h-[280px] w-full object-cover lg:h-[360px]" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100} className="flex flex-col justify-center">
              <span className="mb-2 block text-[11px] font-black uppercase tracking-[0.18em] text-[#3d9b6a]">{page.introEnglish}</span>
              <h2 className="mb-6 text-[26px] font-black leading-tight tracking-[-0.04em] text-[#1a2e20] lg:text-[30px]">{page.introTitle}</h2>
              {page.introParagraphs.map((p) => (
                <p key={p} className="mb-4 text-[14px] leading-8 text-[#555] last:mb-0">{p}</p>
              ))}
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 증상 — 컬러 카드 */}
      <section className="bg-[#f4fbf7] px-5 py-16 lg:py-20">
        <div className="mx-auto max-w-[1200px]">
          <ScrollReveal>
            <div className="mb-12 text-center">
              <span className="mb-3 block text-[11px] font-black uppercase tracking-[0.18em] text-[#3d9b6a]">SYMPTOMS & RISK</span>
              <h2 className="text-[26px] font-black tracking-[-0.04em] text-[#1a2e20] lg:text-[32px]">{page.symptomTitle}</h2>
            </div>
          </ScrollReveal>
          <div className="space-y-6">
            {page.symptomGroups.map((group, gi) => (
              <ScrollReveal key={group.label} delay={gi * 80}>
                <div className={`rounded-[22px] p-7 ${group.danger ? "bg-[#1a0a0a] text-white" : "bg-white"}`}>
                  <div className="mb-5 flex items-center gap-3">
                    <div className={`h-2 w-8 rounded-full ${group.danger ? "bg-[#e05050]" : "bg-[#3d9b6a]"}`} />
                    <h3 className={`text-[16px] font-black ${group.danger ? "text-[#ff8080]" : "text-[#1a2e20]"}`}>{group.label}</h3>
                    {group.danger && <span className="rounded-full bg-[#e05050]/20 px-2.5 py-0.5 text-[11px] font-bold text-[#ff8080]">방치 시 위험</span>}
                  </div>
                  <div className="grid gap-3 sm:grid-cols-3">
                    {group.items.map((item, i) => (
                      <div key={item.title} className={`rounded-[16px] p-5 ${group.danger ? "border border-white/8 bg-white/5" : "bg-[#f4fbf7] border border-[#d4eedd]"}`}>
                        <div className={`mb-3 text-[28px] font-black leading-none ${group.danger ? "text-[#e05050]" : "text-[#3d9b6a]"}`}>{String(i + 1).padStart(2, "0")}</div>
                        <h4 className={`mb-1 text-[15px] font-black ${group.danger ? "text-white" : "text-[#111]"}`}>{item.title}</h4>
                        <p className={`text-[12.5px] leading-5 ${group.danger ? "text-white/40" : "text-[#777]"}`}>{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 관리 방법 — 세로 타임라인 */}
      <section className="bg-white px-5 py-16 lg:py-20">
        <div className="mx-auto max-w-[1200px]">
          <ScrollReveal>
            <div className="mb-12 text-center">
              <span className="mb-3 block text-[11px] font-black uppercase tracking-[0.18em] text-[#3d9b6a]">MANAGEMENT</span>
              <h2 className="mb-2 text-[26px] font-black tracking-[-0.04em] text-[#1a2e20] lg:text-[32px]">{page.treatmentTitle}</h2>
              <p className="text-[14px] text-[#777]">{page.treatmentDesc}</p>
            </div>
          </ScrollReveal>
          <div className="mx-auto max-w-[860px]">
            {page.treatments.map((t, i) => (
              <ScrollReveal key={t.title} delay={i * 100}>
                <div className="relative mb-6 flex gap-6 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0a1a10] text-[14px] font-black text-[#7ee8b8]">{String(i + 1).padStart(2, "0")}</div>
                    {i < page.treatments.length - 1 && <div className="mt-2 w-0.5 flex-1 bg-[#d4eedd]" />}
                  </div>
                  <div className="mb-6 flex-1 rounded-[20px] border border-[#e8f5ed] bg-[#f4fbf7] p-6 last:mb-0">
                    <h3 className="mb-4 text-[17px] font-black text-[#1a2e20]">{t.title}</h3>
                    <ul className="space-y-2.5">
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

      {/* 요약 + CTA — 다크로 복귀 */}
      <section className="bg-[#0a1a10] px-5 py-16 lg:py-20">
        <div className="mx-auto max-w-[1200px]">
          <ScrollReveal>
            <div className="mb-6 rounded-[20px] border border-white/8 bg-white/5 p-8">
              <h3 className="mb-5 text-[17px] font-black text-white">{page.summaryTitle}</h3>
              <div className="space-y-3">
                {page.summaries.map((s, i) => (
                  <div key={s} className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#3d9b6a] text-[11px] font-black text-white">{i + 1}</span>
                    <p className="text-[14px] leading-7 text-white/55">{s}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <div className="relative overflow-hidden rounded-[20px] border border-[#3d9b6a]/30 bg-gradient-to-br from-[#3d9b6a]/20 to-[#3d9b6a]/5 p-8 text-center lg:p-10">
              <h2 className="mb-3 text-[22px] font-black text-white">{page.title} 관리, {clinic.shortName}와 함께 시작하세요</h2>
              <p className="mb-7 text-[14px] text-white/45">정기적인 수치 확인과 맞춤 관리로 건강을 지켜드립니다.</p>
              <div className="flex flex-col justify-center gap-3 sm:flex-row">
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
