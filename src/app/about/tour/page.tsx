"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import SubPageHeader from "@/components/SubPageHeader";
import { tourGallery } from "@/lib/clinic";

const GALLERY = tourGallery;

const INTERVAL = 4000;

export default function TourPage() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = useCallback(() => setCurrent((c) => (c + 1) % GALLERY.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + GALLERY.length) % GALLERY.length), []);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(next, INTERVAL);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [next, paused]);

  return (
    <>
      <SubPageHeader category="병원소개" title="둘러보기" />

      <section className="bg-white py-10 sm:py-16">
        <div className="mx-auto max-w-5xl px-5">

          <div className="mb-10 text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-sky-600">CLINIC TOUR</p>
            <h2 className="mt-2 text-2xl font-black tracking-tight text-navy-900 sm:text-3xl">내포아산내과 공간 둘러보기</h2>
            <p className="mt-2 text-sm text-gray-500">쾌적하고 편안한 진료 환경을 직접 확인해보세요.</p>
          </div>

          {/* 메인 슬라이드 */}
          <div
            className="relative overflow-hidden rounded-2xl bg-gray-100 shadow-lg"
            style={{ aspectRatio: "16 / 10" }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {GALLERY.map((item, i) => (
              <div
                key={i}
                className="absolute inset-0 transition-opacity duration-700"
                style={{ opacity: i === current ? 1 : 0, pointerEvents: i === current ? "auto" : "none" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.src}
                  alt={item.label}
                  className="h-full w-full object-cover"
                  draggable={false}
                  style={{ userSelect: "none" }}
                />
                <span className="absolute bottom-4 left-4 rounded-lg bg-black/50 px-3 py-1.5 text-sm font-black text-white backdrop-blur-sm">
                  {item.label}
                </span>
              </div>
            ))}

            {/* 이전 버튼 */}
            <button
              onClick={prev}
              aria-label="이전 사진"
              className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-navy-900 shadow-md backdrop-blur-sm transition hover:bg-white hover:shadow-lg sm:h-12 sm:w-12"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-[2.5]"><polyline points="15 18 9 12 15 6" /></svg>
            </button>

            {/* 다음 버튼 */}
            <button
              onClick={next}
              aria-label="다음 사진"
              className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-navy-900 shadow-md backdrop-blur-sm transition hover:bg-white hover:shadow-lg sm:h-12 sm:w-12"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-[2.5]"><polyline points="9 18 15 12 9 6" /></svg>
            </button>

            {/* 진행 바 */}
            <div className="absolute bottom-0 left-0 h-0.5 w-full bg-white/20">
              {!paused && (
                <div
                  key={current}
                  className="h-full bg-white/70"
                  style={{ animation: `progress ${INTERVAL}ms linear` }}
                />
              )}
            </div>
          </div>

          {/* 슬라이드 인덱스 점 */}
          <div className="mt-5 flex items-center justify-center gap-1.5">
            {GALLERY.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`${i + 1}번째 사진으로 이동`}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? "h-2 w-6 bg-navy-900"
                    : "h-2 w-2 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          {/* 썸네일 그리드 */}
          <div className="mt-8 grid grid-cols-5 gap-2 sm:grid-cols-7">
            {GALLERY.map((item, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={item.label}
                className={`relative overflow-hidden rounded-xl transition-all duration-200 ${
                  i === current
                    ? "ring-2 ring-navy-900 ring-offset-2"
                    : "opacity-55 hover:opacity-80"
                }`}
                style={{ aspectRatio: "1" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.src}
                  alt={item.label}
                  className="h-full w-full object-cover"
                  draggable={false}
                />
                <span className="absolute bottom-0 left-0 right-0 bg-black/40 py-0.5 text-center text-[9px] font-bold text-white">
                  {item.label}
                </span>
              </button>
            ))}
          </div>

        </div>
      </section>

      <style>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </>
  );
}
