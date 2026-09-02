"use client";

import ScrollReveal from "@/components/ScrollReveal";
import { clinic } from "@/lib/clinic";

const reasons = [
  {
    num: "01",
    title: "가정의학과 전문의 직접 진료",
    image: "/clinic-photos/p-reception.png",
    desc: "박소영 원장이 처음 상담부터 결과 설명, 추적 관리까지 직접 담당합니다. 바뀌는 의사 없이 나를 기억하는 한 명의 주치의.",
  },
  {
    num: "02",
    title: "만성질환 장기 관리",
    image: "/clinic-photos/p-hallway.png",
    desc: "고혈압·당뇨·고지혈증·골다공증처럼 오래 관리해야 하는 질환을 꾸준히, 함께 조율합니다.",
  },
  {
    num: "03",
    title: "1인 수액실 · 쾌적한 공간",
    image: "/clinic-photos/p-iv-room.png",
    desc: "아치형 개별 부스의 1인 수액실에서 프라이빗하고 편안하게 케어를 받으실 수 있습니다.",
  },
  {
    num: "04",
    title: "아이와 함께 오세요",
    image: "/clinic-photos/p-kids.png",
    desc: "유아 대기실이 따로 마련되어 있어 아이와 함께 오셔도 안심하고 진료를 기다리실 수 있습니다.",
  },
];

export default function WhySection() {
  return (
    <section className="py-0">
      <div className="max-w-6xl mx-auto px-4">
        <ScrollReveal>
          <div className="mb-8 sm:mb-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-[#e8f5ed] px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#3d9b6a]">
                WHY
              </span>
              <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-gray-900">
                그래서 {clinic.shortName}입니다.
              </h2>
            </div>
            <p className="max-w-xl text-sm sm:text-base leading-relaxed text-gray-500 lg:text-right">
              검사와 진료가 따로 끝나지 않도록,<br />
              처음 상담부터 결과 설명과 추적 관리까지 한 흐름으로 이어지는 진료를 지향합니다.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 min-[560px]:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {reasons.map((reason, i) => (
            <ScrollReveal key={reason.title} delay={i * 90}>
              <article className="group h-full overflow-hidden rounded-[28px] bg-white border border-gray-100 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-gray-900/10">
                <div className="relative h-52 min-[560px]:h-56 lg:h-64 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${reason.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/85 via-gray-900/30 to-transparent" />
                  <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-sm font-black text-[#3d9b6a] shadow-lg">
                    {reason.num}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-lg sm:text-xl font-black leading-snug text-white">
                      {reason.title}
                    </h3>
                  </div>
                </div>
                <div className="p-5 sm:p-6">
                  <p className="text-sm sm:text-[15px] leading-relaxed text-gray-600">
                    {reason.desc}
                  </p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
