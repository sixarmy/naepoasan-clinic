import SubPageHeader from "@/components/SubPageHeader";
import ServiceDetailPage from "@/components/ServiceDetailPage";
import ServiceDetailIVTherapy from "@/components/ServiceDetailIVTherapy";
import ServiceDetailChronic from "@/components/ServiceDetailChronic";
import ServiceDetailCheckup from "@/components/ServiceDetailCheckup";
import ServiceDetailDepartment from "@/components/ServiceDetailDepartment";
import { getServicePage, servicePages } from "@/lib/servicePages";

export function generateStaticParams() {
  return Object.keys(servicePages).map((key) => ({ slug: key.split("/") }));
}

export default async function GenericPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const key = slug.join("/");
  const page = getServicePage(key);

  if (key === "special/iv-therapy") {
    return (
      <>
        <SubPageHeader category={page.category} title={page.title} />
        <ServiceDetailIVTherapy page={page} />
      </>
    );
  }

  if (key.startsWith("chronic/") || key === "special/osteoporosis" || key === "special/obesity") {
    return (
      <>
        <SubPageHeader category={page.category} title={page.title} />
        <ServiceDetailChronic page={page} />
      </>
    );
  }

  if (key.startsWith("checkup/")) {
    return (
      <>
        <SubPageHeader category={page.category} title={page.title} />
        <ServiceDetailCheckup page={page} />
      </>
    );
  }

  if (key.startsWith("departments/") || key === "vaccination" || key === "special/ultrasound") {
    return (
      <>
        <SubPageHeader category={page.category} title={page.title} />
        <ServiceDetailDepartment page={page} />
      </>
    );
  }

  return (
    <>
      <SubPageHeader category={page.category} title={page.title} />
      <ServiceDetailPage page={page} />
    </>
  );
}
