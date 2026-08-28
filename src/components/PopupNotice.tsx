"use client";

import { useCallback, useEffect, useState, useSyncExternalStore } from "react";
import type { CSSProperties } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface PopupItem {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** 노출 종료일(이 날짜까지 노출). 없으면 상시 노출 */
  endsAt?: Date;
}

// month는 0부터 시작 → 8 = 9월
// TODO: 내포아산내과 팝업 이미지 등록 후 활성화
const popups: PopupItem[] = [];

// 팝업 내용이 바뀌면 키를 올려 "오늘 하루 보지 않기" 상태를 초기화한다.
const STORAGE_KEY = "simc-popup-hidden-until-v1";

function todayKey() {
  const now = new Date();
  return `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
}

/** 노출 기간이 지나지 않은 팝업만 남긴다. */
function getLivePopups() {
  const now = new Date();
  return popups.filter((p) => !p.endsAt || now <= p.endsAt);
}

/** 구독 대상 없음 - 마운트 시점의 localStorage 값만 한 번 읽는다. */
const noopSubscribe = () => () => {};

function readShouldShow() {
  // 노출할 팝업이 하나도 없으면 숨김
  if (getLivePopups().length === 0) return false;
  try {
    return localStorage.getItem(STORAGE_KEY) !== todayKey();
  } catch {
    // localStorage 사용 불가(시크릿 모드 등)일 때는 그냥 노출
    return true;
  }
}

export default function PopupNotice() {
  const pathname = usePathname();
  const [closed, setClosed] = useState(false);

  // 서버 렌더 시에는 항상 false → 하이드레이션 불일치 없이 클라이언트에서만 노출
  const shouldShow = useSyncExternalStore(noopSubscribe, readShouldShow, () => false);

  // 메인 페이지에서만 노출
  const open = pathname === "/" && shouldShow && !closed;

  const close = useCallback(() => setClosed(true), []);

  const hideForToday = useCallback(() => {
    try {
      localStorage.setItem(STORAGE_KEY, todayKey());
    } catch {
      // 저장 실패해도 닫기는 진행
    }
    setClosed(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, close]);

  if (!open) return null;

  const livePopups = getLivePopups();

  return (
    <div
      className="fixed inset-0 z-[100000] flex items-center justify-center overflow-y-auto overscroll-contain bg-black/60 p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="내포아산내과 안내"
      onClick={close}
    >
      <div
        className="my-auto flex w-full max-w-lg flex-col items-center gap-4 sm:max-w-[min(94vw,118vh,1200px)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/*
          모바일: 세로로 쌓고 화면 폭 가득 (넘치면 스크롤)
          데스크톱: 가로로 나란히. 각 칸의 너비를 이미지 가로세로 비율(--ratio)에 비례해
          나눠 주면 두 장의 높이가 자동으로 똑같이 맞는다.
        */}
        <div className="flex w-full flex-col items-center justify-center gap-4 sm:flex-row sm:items-start sm:gap-6">
          {livePopups.map((item) => (
            <div
              key={item.src}
              style={{ "--ratio": item.width / item.height } as CSSProperties}
              className="w-full overflow-hidden rounded-2xl bg-white shadow-2xl sm:min-w-0 sm:basis-0 sm:grow-[var(--ratio)]"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                sizes="(max-width: 640px) 100vw, 50vw"
                className="h-auto w-full"
                priority
              />
            </div>
          ))}
        </div>

        <div className="sticky bottom-0 flex w-full max-w-lg items-center justify-between gap-3 rounded-xl bg-navy-900/90 px-4 py-3 text-white shadow-lg backdrop-blur-sm sm:static sm:px-5">
          <button
            onClick={hideForToday}
            className="cursor-pointer text-xs font-medium text-white/80 underline-offset-4 transition-colors hover:text-white hover:underline sm:text-sm"
          >
            오늘 하루 보지 않기
          </button>
          <button
            onClick={close}
            className="cursor-pointer rounded-lg bg-sky-500 px-4 py-2 text-xs font-semibold transition-colors hover:bg-sky-400 sm:px-5 sm:text-sm"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}
