import SubPageHeader from "@/components/SubPageHeader";
import { clinic } from "@/lib/clinic";

export default function MedicalInfoPage() {
  return (
    <>
      <SubPageHeader category="병원소개" title="비급여 안내" />
      <section className="bg-white px-5 py-20 sm:py-32">
        <div className="mx-auto max-w-xl text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#e8f5ed] mb-6">
            <svg className="w-8 h-8 stroke-[#3d9b6a]" viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
            </svg>
          </div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-[#3d9b6a] mb-3">NON-COVERED FEE</p>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight mb-4">비급여 안내</h2>
          <p className="text-gray-500 leading-7">
            비급여 진료비용은 의료법에 따라 원내에 게시하고 있습니다.<br className="hidden sm:block" />
            항목별 비용은 접수처에서 확인하실 수 있으며, 방문 전 문의는 대표전화로 가능합니다.
          </p>
          <a href={`tel:${clinic.phone}`} className="mt-7 inline-flex items-center justify-center rounded-full bg-[#3d9b6a] px-6 py-3 text-[15px] font-black text-white transition-all hover:-translate-y-0.5 hover:bg-[#2d7a53]">
            대표전화 {clinic.phoneLabel}
          </a>
        </div>
      </section>
    </>
  );
}
