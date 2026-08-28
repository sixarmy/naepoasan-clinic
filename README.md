# 연세다온내과 홈페이지

김정재탑내과 원본 저장소의 구조와 화면 흐름을 참고해 연세다온내과용으로 재구성한 Next.js 프로젝트입니다.

## 포함된 내용

- 메인 페이지: 히어로 캐러셀, 진료센터 카드, 내시경센터 배너, 개원 안내, 내시경 소독 6-step, 장비/강점/WHY/갤러리/오시는 길
- 의료진 페이지: 김경현 원장, 김윤주 원장 약력 및 학회 활동
- 오시는 길: 경기도 의정부시 추동로 9, 5층 + 카카오맵 퍼가기 코드 반영
- 진료시간 페이지: 월-금 08:30-18:00, 점심시간 13:00-14:00, 토요일 08:30-13:00 반영
- 공통 컴포넌트: Header, Footer, FloatingButtons, PopupBanner, LocationSection

## 꼭 수정할 곳

`src/lib/clinic.ts` 한 파일에서 대부분의 병원 정보를 바꿀 수 있습니다.

```ts
phone: "031-894-5750",
phoneLabel: "031-894-5750",
reservationUrl: "",
businessNumber: "준비 중",
hoursNotice: "월-금 08:30-18:00, 토요일 08:30-13:00 진료합니다. 점심시간은 13:00-14:00입니다.",
parkingNotice: "주차 안내는 개원 전 최종 확정 후 업데이트 예정입니다."
```

예약 링크가 확정되면 `reservationUrl`에 네이버 예약 등의 주소를 입력하면 됩니다.

## 실행 방법

```bash
corepack pnpm@11.10.0 install --node-linker=hoisted --package-import-method=copy
corepack pnpm@11.10.0 dev
```

브라우저에서 `http://localhost:3000`을 열면 됩니다.

## 배포 방법 요약

1. 이 프로젝트 폴더를 GitHub 저장소에 올립니다.
2. Vercel에서 New Project를 누릅니다.
3. GitHub 저장소를 선택합니다.
4. Framework Preset이 Next.js인지 확인합니다.
5. Deploy를 누릅니다.
6. 도메인이 있으면 Vercel Project Settings > Domains에서 연결합니다.

## 이미지 안내

현재 병원 내부·장비 사진은 원본 사이트의 분위기를 유지하기 위한 임시 이미지 URL입니다. 실제 연세다온내과 사진이 준비되면 `src/lib/clinic.ts`의 `imageSet`과 `serviceCards` 이미지 URL을 교체하세요.

## Windows에서 EBUSY 오류가 날 때

`[ERR_PNPM_EBUSY] resource busy or locked`가 나오면 `WINDOWS_RESET_AND_RUN.bat`를 더블클릭하거나, `WINDOWS_MANUAL_COMMANDS.txt`의 명령어를 순서대로 실행하세요.

이 프로젝트는 Windows 환경에서 pnpm symlink 오류를 줄이기 위해 `pnpm-workspace.yaml`에 `nodeLinker: hoisted`, `packageImportMethod: copy`를 포함합니다.
