"use client";

import Link from "next/link";
import { clinic, tourGallery } from "@/lib/clinic";

// 마퀴가 끊김 없이 이어지도록 목록을 두 번 이어 붙인다.
const strip = [...tourGallery, ...tourGallery];

export default function GalleryBanner() {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-sky-400">CLINIC TOUR</p>
        <h2 className="mt-2 text-xl font-bold text-white sm:text-2xl md:text-3xl">
          {clinic.shortName} <strong className="font-bold text-sky-300">병원 둘러보기</strong>
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-gray-300 sm:text-base">
          편안하고 안전한 검진, 치료의 시작입니다
        </p>
      </div>

      {/* 실제 병원 사진 자동 흐름 */}
      <div className="marquee-viewport mt-8 sm:mt-10">
        <div className="marquee-track">
          {strip.map((item, i) => (
            <Link
              key={`${item.src}-${i}`}
              href="/about/tour"
              aria-label={`둘러보기 - ${item.label}`}
              className="group relative block w-[190px] shrink-0 overflow-hidden rounded-2xl shadow-lg sm:w-[260px]"
              style={{ aspectRatio: "4 / 3" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.src}
                alt={item.label}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                draggable={false}
                loading="lazy"
              />
              <span className="absolute bottom-2 left-2 rounded-lg bg-black/50 px-2.5 py-1 text-xs font-bold text-white backdrop-blur-sm">
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-8 flex flex-col items-center sm:mt-10">
        <Link
          href="/about/tour"
          className="inline-flex items-center gap-2 rounded-full border-2 border-white/60 px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-white hover:text-navy-900"
        >
          둘러보기 전체 보기
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      <style>{`
        .marquee-viewport {
          overflow: hidden;
          -webkit-mask-image: linear-gradient(to right, transparent, #000 6%, #000 94%, transparent);
          mask-image: linear-gradient(to right, transparent, #000 6%, #000 94%, transparent);
        }
        .marquee-track {
          display: flex;
          gap: 12px;
          width: max-content;
          animation: gallery-marquee 60s linear infinite;
        }
        .marquee-viewport:hover .marquee-track {
          animation-play-state: paused;
        }
        @keyframes gallery-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-50% - 6px)); }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none; }
        }
      `}</style>
    </section>
  );
}
