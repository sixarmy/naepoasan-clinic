"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { clinic } from "@/lib/clinic";
import { handleReservation } from "@/utils/reservation";
import type { ServicePage } from "@/lib/servicePages";

const ivMenus = [
  {
    name: "면역·활력 수액",
    english: "IMMUNITY DRIP",
    desc: "비타민C·아연·셀레늄을 조합해 면역 기능과 피로 회복을 돕습니다.",
    tags: ["피로 회복", "면역 강화", "항산화"],
    color: "from-[#1a5c3a] to-[#2d7a53]",
  },
  {
    name: "고농도 비타민C",
    english: "HIGH-DOSE VITAMIN C",
    desc: "고용량 비타민C로 산화 스트레스를 줄이고 피부 탄력과 면역을 지원합니다.",
    tags: ["피부 미용", "항산화", "면역"],
    color: "from-[#2d7a53] to-[#3d9b6a]",
  },
  {
    name: "마그네슘·미네랄",
    english: "MINERAL THERAPY",
    desc: "근육 이완, 수면 질 개선, 두통 완화에 도움이 되는 미네랄 수액입니다.",
    tags: ["두통 완화", "수면 개선", "근육 이완"],
    color: "from-[#3d9b6a] to-[#5ab882]",
  },
  {
    name: "수분·전해질",
    english: "HYDRATION DRIP",
    desc: "탈수, 격한 운동 후, 음주 다음 날 등 빠른 수분 보충이 필요할 때 사용합니다.",
    tags: ["수분 보충", "전해질 균형", "컨디션 회복"],
    color: "from-[#5ab882] to-[#7ee8b8]",
  },
];

const steps = [
  { num: "01", title: "문진 & 상담", desc: "현재 증상, 기저질환, 복용약, 알레르기를 확인합니다." },
  { num: "02", title: "처방 & 구성 결정", desc: "상태에 맞는 수액 성분과 용량을 결정합니다." },
  { num: "03", title: "1인 수액실 안내", desc: "독립된 개인 공간에서 편안하게 수액을 맞습니다." },
  { num: "04", title: "경과 확인 & 귀가", desc: "이상 반응 여부를 확인하고 주의사항을 안내합니다." },
];

export default function ServiceDetailIVTherapy({ page }: { page: ServicePage }) {
  return (
    <div className="bg-[#0d1f16]">
      {/* 히어로 */}
      <section className="relative min-h-[560px] overflow-hidden lg:min-h-[680px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/clinic-photos/p-iv-room.png')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1f16]/95 via-[#0d1f16]/75 to-[#0d1f16]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f16] via-transparent to-transparent" />

        <div className="relative z-10 mx-auto flex h-full max-w-[1200px] flex-col justify-center px-5 pb-16 pt-24 lg:pt-32">
          <ScrollReveal>
            <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-[#3d9b6a]/40 bg-[#3d9b6a]/15 px-4 py-2 backdrop-blur-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#7ee8b8]" />
              <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#7ee8b8]">PREMIUM IV THERAPY · 수액클리닉</span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h1 className="mb-5 text-[38px] font-black leading-[1.12] tracking-[-0.05em] text-white sm:text-[52px] lg:text-[68px]">
              나만을 위한<br />
              <span className="text-[#7ee8b8]">프리미엄 수액</span> 케어
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="mb-8 max-w-lg text-[15px] leading-8 text-white/65 lg:text-[17px]">
              1인 독립 수액실에서 문진과 처방을 기반으로<br className="hidden sm:block" />
              안전하고 맞춤화된 수액 치료를 경험하세요.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={handleReservation}
                className="inline-flex items-center gap-2 rounded-full bg-[#3d9b6a] px-7 py-3.5 text-[14px] font-black text-white transition-all hover:-translate-y-0.5 hover:bg-[#2d7a53]"
              >
                전화 예약 {clinic.phone}
              </button>
              <Link href="/about/hours" className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-[14px] font-semibold text-white/80 transition-all hover:bg-white/10">
                진료시간 확인 →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 수액 메뉴 */}
      <section className="bg-[#0d1f16] px-5 py-20 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <ScrollReveal>
            <div className="mb-14 text-center">
              <span className="mb-3 block text-[11px] font-black uppercase tracking-[0.2em] text-[#3d9b6a]">IV MENU</span>
              <h2 className="text-[28px] font-black leading-tight tracking-[-0.04em] text-white sm:text-[36px]">수액 구성 안내</h2>
              <p className="mt-4 text-[14px] leading-7 text-white/45">문진 후 상태에 맞는 구성을 처방합니다. 아래는 대표 구성 예시입니다.</p>
            </div>
          </ScrollReveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ivMenus.map((menu, i) => (
              <ScrollReveal key={menu.name} delay={i * 80}>
                <div className="group relative overflow-hidden rounded-[20px] border border-white/8 bg-white/4 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#3d9b6a]/40 hover:bg-white/8">
                  <div className={`mb-5 inline-flex h-11 w-11 items-center justify-center rounded-[12px] bg-gradient-to-br ${menu.color}`}>
                    <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                  </div>
                  <h3 className="mb-1 text-[16px] font-black text-white">{menu.name}</h3>
                  <span className="mb-3 block text-[10px] font-bold tracking-[0.12em] text-[#3d9b6a]">{menu.english}</span>
                  <p className="mb-4 text-[13px] leading-6 text-white/50">{menu.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {menu.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-[#3d9b6a]/15 px-2.5 py-1 text-[11px] font-semibold text-[#7ee8b8]">{tag}</span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <p className="mt-8 text-center text-[12px] text-white/30">※ 세부 구성과 비용은 대표전화 또는 방문 상담으로 확인하실 수 있습니다.</p>
          </ScrollReveal>
        </div>
      </section>

      {/* 프로세스 */}
      <section className="border-y border-white/8 bg-[#111f17] px-5 py-20 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <ScrollReveal>
            <div className="mb-14 text-center">
              <span className="mb-3 block text-[11px] font-black uppercase tracking-[0.2em] text-[#3d9b6a]">PROCESS</span>
              <h2 className="text-[28px] font-black leading-tight tracking-[-0.04em] text-white sm:text-[36px]">수액 진행 과정</h2>
            </div>
          </ScrollReveal>
          <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 100}>
                <div className="relative">
                  {i < steps.length - 1 && (
                    <div className="absolute right-[-12px] top-8 hidden h-0.5 w-6 bg-gradient-to-r from-[#3d9b6a]/50 to-transparent lg:block" />
                  )}
                  <div className="rounded-[18px] border border-white/8 bg-white/4 p-6">
                    <span className="mb-4 block text-[36px] font-black leading-none tracking-tighter text-[#3d9b6a]/30">{step.num}</span>
                    <h3 className="mb-2 text-[16px] font-black text-white">{step.title}</h3>
                    <p className="text-[13px] leading-6 text-white/45">{step.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 주의사항 */}
      <section className="bg-[#0d1f16] px-5 py-16 lg:py-20">
        <div className="mx-auto max-w-[1200px]">
          <ScrollReveal>
            <div className="rounded-[24px] border border-white/8 bg-white/4 p-8 lg:p-12">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-16">
                <div className="lg:flex-1">
                  <span className="mb-3 block text-[11px] font-black uppercase tracking-[0.18em] text-[#3d9b6a]">NOTICE</span>
                  <h3 className="mb-4 text-[22px] font-black leading-tight text-white lg:text-[26px]">수액 전 꼭 확인하세요</h3>
                  <ul className="space-y-3">
                    {page.summaries.map((s) => (
                      <li key={s} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#3d9b6a]" />
                        <span className="text-[14px] leading-7 text-white/55">{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="shrink-0 lg:w-[340px]">
                  <div className="overflow-hidden rounded-[18px]">
                    <img src="/clinic-photos/p-iv-room.png" alt="수액실" className="h-[220px] w-full object-cover lg:h-[260px]" />
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0d1f16] px-5 pb-20 lg:pb-28">
        <div className="mx-auto max-w-[1200px]">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#1a5c3a] to-[#0d2e1f] p-10 text-center lg:p-16">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(61,155,106,0.25),transparent_60%)]" />
              <div className="relative z-10">
                <h2 className="mb-3 text-[26px] font-black leading-tight text-white lg:text-[34px]">
                  프리미엄 수액 케어,<br />{clinic.shortName}에서 시작하세요
                </h2>
                <p className="mb-8 text-[14px] leading-7 text-white/55">문진과 처방 기반의 안전한 수액 치료를 경험하세요.</p>
                <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <button onClick={handleReservation} className="inline-flex items-center justify-center rounded-full bg-[#3d9b6a] px-8 py-4 text-[15px] font-black text-white transition-all hover:-translate-y-0.5 hover:bg-[#2d7a53]">
                    전화 예약 {clinic.phone}
                  </button>
                  <Link href="/about/location" className="inline-flex items-center justify-center rounded-full border border-white/25 px-8 py-4 text-[15px] font-semibold text-white/80 transition-all hover:bg-white/10">
                    오시는 길 →
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
