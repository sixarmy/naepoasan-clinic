export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string; disabled?: boolean }[];
};

export type Doctor = {
  name: string;
  role: string;
  headline: string;
  quote: string;
  badges: string[];
  educationCareer: string[];
  societies: string[];
  conferences?: string[];
  papers?: string[];
  philosophy: string;
  photo?: string;
};

export const clinic = {
  name: "내포아산내과의원",
  shortName: "내포아산내과",
  englishName: "NAEPO ASAN INTERNAL MEDICINE CLINIC",
  brandSystem: "",
  slogan: "내포신도시에서 만나는 든든한 건강 주치의", // 미확정 — 확정 후 교체
  address: "충청남도 예산군 삽교읍 예목로 154, 3층",
  addressShort: "예산군 삽교읍 예목로 154, 3층",
  phone: "041-404-7582",
  phoneLabel: "041-404-7582",
  reservationUrl: "",         // 미확정
  blogUrl: "",                // 미확정
  kakaoChannelUrl: "",        // 미확정
  naverMapUrl: "https://map.naver.com/p/entry/place/1474769880",
  kakaoMapUrl: "https://kko.kakao.com/2hwavi8nf6oe",
  tmapUrl: "",                // 미확정
  logoPrimary: "/logo.png",
  logoSecondary: "/logo.png",
  businessNumber: "",         // 미확정
  representative: "",         // 미확정
  hoursNotice: "월·목·금 09:00-19:00, 화요일 09:00-13:00, 토·일 09:00-16:00 진료합니다. 수요일은 휴진입니다. 점심시간은 13:00-14:30 (토·일 13:00-14:00)입니다.",
  hours: [
    { label: "월·목·금", value: "09:00 - 19:00" },
    { label: "화요일", value: "09:00 - 13:00" },
    { label: "토·일요일", value: "09:00 - 16:00" },
    { label: "점심시간", value: "13:00 - 14:30 (토·일 13:00-14:00)" },
    { label: "수요일·공휴일", value: "휴진" }
  ],
  parkingNotice: "건물 주차장을 이용하실 수 있습니다.",  // 미확정
  facilityNotice: "진료실·초음파실·X-RAY·진단검사·수액실을 편안하게 이용하실 수 있습니다."
} as const;

export const suppliedImages = [
  "/clinic-photos/p-reception-wide.jpg",
  "/clinic-photos/p-reception.png",
  "/clinic-photos/p-counter.png",
  "/clinic-photos/p-hallway.png",
  "/clinic-photos/p-kids.png",
  "/clinic-photos/p-respiratory.png",
  "/clinic-photos/p-waiting.png",
  "/clinic-photos/p-iv-room.png",
  "/clinic-photos/p-corridor.png",
  "/clinic-photos/p-hallway2.png",
];

export const pickImage = (index: number) => suppliedImages[index % suppliedImages.length];

export const tourGallery = [
  { label: "접수 데스크", src: "/clinic-photos/p-reception-wide.jpg" },
  { label: "접수 데스크", src: "/clinic-photos/p-reception.png" },
  { label: "카운터", src: "/clinic-photos/p-counter.png" },
  { label: "복도", src: "/clinic-photos/p-hallway.png" },
  { label: "유아 대기실", src: "/clinic-photos/p-kids.png" },
  { label: "호흡기 치료실", src: "/clinic-photos/p-respiratory.png" },
  { label: "대기실", src: "/clinic-photos/p-waiting.png" },
  { label: "수액실", src: "/clinic-photos/p-iv-room.png" },
  { label: "복도", src: "/clinic-photos/p-corridor.png" },
];

export const navItems: NavItem[] = [
  {
    label: "병원소개",
    href: "/doctors",
    children: [
      { label: "의료진 소개", href: "/doctors" },
      { label: "진료시간", href: "/about/hours" },
      { label: "오시는 길", href: "/about/location" },
      { label: "둘러보기", href: "/about/tour" },
      { label: "비급여 안내", href: "/medical-info" }
    ]
  },
  {
    label: "건강검진센터",
    href: "/checkup/cancer",
    children: [
      { label: "5대암 국가검진", href: "/checkup/cancer" },
      { label: "종합검진", href: "/checkup/comprehensive" },
      { label: "여성암검진", href: "/checkup/women-cancer" },
      { label: "채용검진", href: "/checkup/employment" }
    ]
  },
  {
    label: "내과진료",
    href: "/departments/gastroenterology",
    children: [
      { label: "소화기센터", href: "/departments/gastroenterology" },
      { label: "순환기센터", href: "/departments/cardiology" },
      { label: "호흡기·알레르기", href: "/departments/respiratory" },
      { label: "초음파검사", href: "/special/ultrasound" },
      { label: "예방접종", href: "/vaccination" }
    ]
  },
  {
    label: "만성질환",
    href: "/chronic/hypertension",
    children: [
      { label: "고혈압", href: "/chronic/hypertension" },
      { label: "당뇨", href: "/chronic/diabetes" },
      { label: "고지혈증", href: "/chronic/dyslipidemia" },
      { label: "골다공증", href: "/special/osteoporosis" }
    ]
  },
  {
    label: "특수클리닉",
    href: "/special/obesity",
    children: [
      { label: "비만클리닉", href: "/special/obesity" },
      { label: "수액클리닉", href: "/special/iv-therapy" },
      { label: "골다공증·BMD", href: "/special/osteoporosis" },
      { label: "초음파검사", href: "/special/ultrasound" }
    ]
  }
];

export const doctors: Doctor[] = [
  {
    name: "박소영",
    role: "원장, 가정의학과 전문의",
    headline: "가정의학과 전문의 · 서울아산병원 응급의학 수련",
    quote: "단순히 증상을 치료하는 것을 넘어, 환자분의 생활 전반을 함께 살피며 오래도록 건강한 삶을 유지하실 수 있도록 돕겠습니다.",
    photo: "",
    badges: [
      "가정의학과 전문의",
      "응급의학 수련",
      "대한가정의학회 정회원",
      "내포아산의원 원장"
    ],
    educationCareer: [
      "충남대학교 의과대학 의학과 졸업",
      "충남대학교병원 인턴",
      "순천향대학교 천안병원 가정의학과 전공의",
      "서울아산병원 응급의학과 수련",
      "내포아산의원 개원"
    ],
    societies: [
      "대한가정의학회 정회원",
      "대한임상초음파학회 정회원",
      "대한고혈압학회 정회원",
      "대한당뇨병학회 정회원",
      "대한비만학회 정회원"
    ],
    philosophy: "단순히 증상을 치료하는 것을 넘어, 환자분의 생활 전반을 함께 살피며 오래도록 건강한 삶을 유지하실 수 있도록 돕겠습니다."
  },
  {
    name: "이준혁",
    role: "부원장, 내과전문의",
    headline: "내과전문의 · 충남대학교병원 소화기내과 출신",
    quote: "검사 수치 하나에도 이유가 있습니다. 결과와 생활 맥락을 함께 보고 꼭 필요한 진료를 정확하게 안내하겠습니다.",
    photo: "",
    badges: [
      "내과전문의",
      "소화기내과 분과전문의",
      "대한내과학회 정회원",
      "내포아산의원 부원장"
    ],
    educationCareer: [
      "충남대학교 의과대학 의학과 졸업",
      "충남대학교병원 인턴",
      "충남대학교병원 내과 전공의",
      "충남대학교병원 소화기내과 전임의",
      "내포아산의원 부원장"
    ],
    societies: [
      "대한내과학회 정회원",
      "대한소화기학회 정회원",
      "대한임상초음파학회 정회원",
      "대한고혈압학회 정회원",
      "대한당뇨병학회 정회원"
    ],
    philosophy: "검사 수치 하나에도 이유가 있습니다. 결과와 생활 맥락을 함께 보고, 꼭 필요한 진료만 정확하게 안내해 드리겠습니다."
  }
];

export const serviceCards = [
  { title: "건강검진센터", desc: "국가검진부터 맞춤 검진까지\n질병의 조기 발견과 예방", image: "/clinic-photos/p-reception.png", href: "/checkup/cancer", tag: "HEALTH CHECK" },
  { title: "만성질환클리닉", desc: "고혈압·당뇨·고지혈증\n개인별 장기 관리 플랜", image: "/clinic-photos/p-hallway.png", href: "/chronic/hypertension", tag: "CHRONIC CARE" },
  { title: "수액클리닉", desc: "1인 개별 수액실\n프리미엄 맞춤 수액 케어", image: "/clinic-photos/p-iv-room.png", href: "/special/iv-therapy", tag: "IV THERAPY" },
  { title: "호흡기·알레르기", desc: "감기·기관지염·천식\n호흡기 전문 진료", image: "/clinic-photos/p-respiratory.png", href: "/departments/respiratory", tag: "RESPIRATORY" },
];

export const imageSet = {
  hero: [pickImage(0), pickImage(7), pickImage(4)],
  equipment: pickImage(7),
  gallery: suppliedImages
};
