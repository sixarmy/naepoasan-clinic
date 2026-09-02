import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { clinic } from "@/lib/clinic";
import type { ServicePage } from "@/lib/servicePages";

const categoryMeta: Record<string, { stat: string; statLabel: string; icon: string; color: string }> = {
  "chronic/hypertension": { stat: "140/90", statLabel: "mmHg 이상이면 고혈압", icon: "heart", color: "#e05050" },
  "chronic/diabetes":     { stat: "6.5%", statLabel: "당화혈색소 목표 수치 미만", icon: "drop", color: "#f0a030" },
  "chronic/dyslipidemia": { stat: "200", statLabel: "mg/dL 미만이 정상 콜레스테롤", icon: "wave", color: "#5a7ef0" },
  "special/osteoporosis": { stat: "-2.5", statLabel: "T-score 이하 골다공증 진단", icon: "bone", color: "#a07850" },
  "special/obesity":      { stat: "25", statLabel: "BMI 25 이상 비만 기준", icon: "weight", color: "#3d9b6a" },
};

function StatIcon({ type, color }: { type: string; color: string }) {
  const cls = `h-8 w-8`;
  if (type === "heart") return <svg className={cls} viewBox="0 0 24 24" fill={color} aria-hidden><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>;
  if (type === "drop")  return <svg className={cls} viewBox="0 0 24 24" fill={color} aria-hidden><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" /></svg>;
  if (type === "wave")  return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2.2} aria-hidden><path strokeLinecap="round" d="M2 12h3l2-7 3 14 2-10 2 6 2-3h3" /></svg>;
  if (type === "bone")  return <svg className={cls} viewBox="0 0 24 24" fill={color} aria-hidden><path d="M9 2C7.34 2 6 3.34 6 5c0 .96.48 1.81 1.21 2.33l-.88.88C5.57 7.57 4.81 7 4 7c-1.1 0-2 .9-2 2s.9 2 2 2c.81 0 1.57-.57 1.33-1.33l.88-.88C6.19 9.52 7 10.04 7 11v2c0 .96-.81 1.48-1.79 1.21l-.88-.88C4.57 12.57 3.81 12 3 12c-1.1 0-2 .9-2 2s.9 2 2 2c.81 0 1.57-.57 1.33-1.33l.88.88C6.19 16.19 7 17.04 7 18c0 1.66 1.34 3 3 3s3-1.34 3-3c0-.96-.81-1.81-1.79-1.33l-.88-.88C10.81 15.48 11 14.96 11 14v-2c0-1.04.19-1.52 1.21-1.21l.88.88C13.81 12.43 15 13.66 15 15c0 1.1.9 2 2 2 1.66 0 3-1.34 3-3s-1.34-3-3-3c-.96 0-1.57.48-1.33 1.21l-.88-.88C14.81 10.81 15 10.04 15 9V7c0-.96.81-1.48 1.79-1.21l.88.88C17.43 7.43 18 8.19 18 9c1.1 0 2-.9 2-2s-.9-2-2-2c-.81 0-1.57.57-1.33 1.33l-.88-.88C16.19 4.67 17 3.96 17 3c0-1.1-.9-2-2-2-.81 0-1.57.57-1.33 1.33l-.88-.88C13.19 1.67 12 2.04 12 3V5c0 .96-.19 1.52-1.21 1.21L9.91 5.33C9.19 5.57 9 4.96 9 4c0-1.1-.9-2-2-2z" /></svg>;
  return <svg className={cls} viewBox="0 0 24 24" fill={color} aria-hidden><circle cx={12} cy={12} r={10} /></svg>;
}

export default function ServiceDetailChronic({ page }: { page: ServicePage }) {
  const meta = categoryMeta[page.slug] ?? { stat: "", statLabel: "", icon: "heart", color: "#3d9b6a" };

  return (
    <div className="bg-white">
      {/* 히어로 */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0d2e1f] via-[#1a5c3a] to-[#2d7a53] px-5 py-20 lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right_top,rgba(126,232,184,0.12),transparent_55%)]" />
        <div className="relative z-10 mx-auto flex max-w-[1200px] flex-col gap-10 lg:flex-row lg:items-center lg:gap-20">
          <div className="flex-1">
            <ScrollReveal>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-[#7ee8b8]" />
                <span className="text-[11px] font-black uppercase tracking-[0.18em] text-[#a8f0cd]">{page.eyebrow}</span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 className="mb-4 text-[36px] font-black leading-[1.12] tracking-[-0.05em] text-white sm:text-[48px] lg:text-[58px]">
                {page.title}<br /><span className="text-[#7ee8b8]">{page.english}</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={180}>
              <p className="mb-7 max-w-lg text-[15px] leading-8 text-white/65">{page.subtitle}</p>
            </ScrollReveal>
            <ScrollReveal delay={240}>
              <div className="flex flex-wrap gap-2">
                {page.badges.map((b) => (
                  <span key={b} className="rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-[12px] font-semibold text-white">{b}</span>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* 스탯 카드 */}
          <ScrollReveal delay={200} className="shrink-0 lg:w-[280px]">
            <div className="rounded-[24px] border border-white/15 bg-white/10 p-8 text-center backdrop-blur-sm">
              <div className="mb-4 flex justify-center">
                <StatIcon type={meta.icon} color={meta.color} />
              </div>
              <div className="mb-2 text-[52px] font-black leading-none tracking-tight text-white">{meta.stat}</div>
              <p className="text-[13px] leading-6 text-white/60">{meta.statLabel}</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 소개 */}
      <section className="bg-white px-5 py-20 lg:py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-stretch lg:gap-12">
            <ScrollReveal className="overflow-hidden rounded-[22px] lg:w-[420px] lg:shrink-0">
              <img src={page.introImage ?? page.image} alt={page.introTitle} className="h-[280px] w-full object-cover lg:h-full" />
            </ScrollReveal>
            <ScrollReveal delay={120} className="flex flex-col justify-center">
              <span className="mb-2 block text-[11px] font-black uppercase tracking-[0.18em] text-[#3d9b6a]">{page.introEnglish}</span>
              <h2 className="mb-6 text-[26px] font-black leading-tight tracking-[-0.04em] text-[#1a2e20] lg:text-[30px]">{page.introTitle}</h2>
              {page.introParagraphs.map((p) => (
                <p key={p} className="mb-4 text-[14px] leading-8 text-[#555] last:mb-0 lg:text-[15px]">{p}</p>
              ))}
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 증상 */}
      <section className="bg-[#f4fbf7] px-5 py-20 lg:py-24">
        <div className="mx-auto max-w-[1200px]">
          <ScrollReveal>
            <div className="mb-14 text-center">
              <span className="mb-3 block text-[11px] font-black uppercase tracking-[0.18em] text-[#3d9b6a]">CHECK</span>
              <h2 className="text-[26px] font-black tracking-[-0.04em] text-[#1a2e20] lg:text-[32px]">{page.symptomTitle}</h2>
            </div>
          </ScrollReveal>
          <div className="space-y-10">
            {page.symptomGroups.map((group, gi) => (
              <div key={group.label}>
                <ScrollReveal delay={gi * 80}>
                  <div className="mb-5 flex items-center gap-3">
                    <div className={`h-6 w-1 rounded-full ${group.danger ? "bg-[#e05050]" : "bg-[#3d9b6a]"}`} />
                    <h3 className={`text-[15px] font-black ${group.danger ? "text-[#c03030]" : "text-[#1a2e20]"}`}>{group.label}</h3>
                    {group.danger && <span className="rounded-full bg-[#fef2f2] px-2.5 py-0.5 text-[11px] font-bold text-[#c03030]">주의</span>}
                  </div>
                </ScrollReveal>
                <div className="grid gap-4 sm:grid-cols-3">
                  {group.items.map((item, i) => (
                    <ScrollReveal key={item.title} delay={gi * 80 + i * 60}>
                      <div className={`rounded-[16px] border p-5 transition-all hover:-translate-y-1 hover:shadow-md ${group.danger ? "border-[#fecaca] bg-[#fef2f2]" : "border-[#d4eedd] bg-white"}`}>
                        <div className={`mb-2 h-8 w-8 rounded-[10px] ${group.danger ? "bg-[#fee2e2]" : "bg-[#e8f5ed]"} flex items-center justify-center`}>
                          <svg className={`h-4 w-4 ${group.danger ? "stroke-[#e05050]" : "stroke-[#3d9b6a]"}`} fill="none" viewBox="0 0 24 24" strokeWidth={2.2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </div>
                        <h4 className="mb-1 text-[15px] font-black text-[#111]">{item.title}</h4>
                        <p className="text-[12.5px] text-[#777]">{item.desc}</p>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 치료 */}
      <section className="bg-white px-5 py-20 lg:py-24">
        <div className="mx-auto max-w-[1200px]">
          <ScrollReveal>
            <div className="mb-14 text-center">
              <span className="mb-3 block text-[11px] font-black uppercase tracking-[0.18em] text-[#3d9b6a]">MANAGEMENT</span>
              <h2 className="mb-2 text-[26px] font-black tracking-[-0.04em] text-[#1a2e20] lg:text-[32px]">{page.treatmentTitle}</h2>
              <p className="text-[14px] text-[#777]">{page.treatmentDesc}</p>
            </div>
          </ScrollReveal>
          <div className="relative flex flex-col gap-0 lg:flex-row">
            {page.treatments.map((treatment, i) => (
              <ScrollReveal key={treatment.title} delay={i * 100} className="flex-1">
                <div className="relative flex h-full flex-col border-b border-[#e8f5ed] p-7 lg:border-b-0 lg:border-r lg:last:border-r-0">
                  <div className="mb-6 flex h-[52px] w-[52px] items-center justify-center rounded-[16px] bg-[#e8f5ed]">
                    <span className="text-[22px] font-black text-[#3d9b6a]">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="mb-4 text-[17px] font-black text-[#1a2e20]">{treatment.title}</h3>
                  <ul className="mt-auto space-y-3">
                    {treatment.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-[#3d9b6a]" />
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

      {/* 핵심 요약 + CTA */}
      <section className="bg-[#f4fbf7] px-5 py-16 lg:py-20">
        <div className="mx-auto max-w-[1200px]">
          <ScrollReveal>
            <div className="mb-8 rounded-[20px] border border-[#d4eedd] bg-white p-8 lg:p-10">
              <h3 className="mb-6 text-[18px] font-black text-[#1a2e20]">{page.summaryTitle}</h3>
              <div className="space-y-4">
                {page.summaries.map((s, i) => (
                  <div key={s} className="flex items-start gap-4">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#3d9b6a] text-[11px] font-black text-white">{i + 1}</span>
                    <p className="text-[14px] leading-7 text-[#555]">{s}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="relative overflow-hidden rounded-[20px] bg-[#3d9b6a] p-8 text-center lg:p-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(255,255,255,0.07),transparent_50%)]" />
              <h2 className="relative mb-3 text-[22px] font-black text-white lg:text-[26px]">{page.title} 관리, {clinic.shortName}와 함께 시작하세요</h2>
              <p className="relative mb-7 text-[14px] text-white/70">정기적인 수치 확인과 차분한 설명으로 건강을 지켜드립니다.</p>
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
