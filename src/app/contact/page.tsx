import PageHeader from "@/components/PageHeader";
import { company } from "@/config";

export default function Home() {
  return (
    <div className="flex justify-between">
      <div className="hidden sm:flex flex-1"></div>
      <div className="flex flex-col gap-8 flex-1 h-[100%]">
        <PageHeader title="Contact" />
        <p className="mt-4">
          Feel free to get in touch with any inquiries about our services. If
          you have specific needs, don't hesitate to ask, and we'll do our best
          to help you.
        </p>
        <div className="flex flex-col gap-2">
          <h4>{company.address}</h4>
          <h4>{company.phone}</h4>
          <h4>{company.email}</h4>
        </div>
      </div>
      <div className="hidden sm:flex flex-1"></div>
    </div>
  );
}
