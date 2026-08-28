import { clinic } from "@/lib/clinic";

export function handleReservation() {
  if (typeof window === "undefined") return;

  const phone = clinic.phone.trim();
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  if (phone && isMobile) {
    window.location.href = `tel:${phone}`;
    return;
  }

  if (clinic.reservationUrl) {
    window.open(clinic.reservationUrl, "_blank", "noopener,noreferrer");
    return;
  }

  const location = document.getElementById("location");
  location?.scrollIntoView({ behavior: "smooth", block: "start" });

  if (!phone) {
    window.setTimeout(() => {
      alert("대표전화와 예약 링크가 확정되면 src/lib/clinic.ts에서 phone, reservationUrl 값을 입력하세요.");
    }, 250);
  } else {
    window.location.href = `tel:${phone}`;
  }
}
