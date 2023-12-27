import CustomLink from "@/components/CustomLink";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Par from "@/components/Par";

const Service = ({
  id,
  titleP1,
  titleP2,
  children,
}: {
  id: string;
  titleP1: string;
  titleP2: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col gap-2" id={id}>
      <div className="flex flex-col">
        <Par />
        <h3 className="text-accents-heavy">
          <b>{titleP1}</b> {titleP2}
        </h3>
      </div>
      <div className="mt-2 leading-6 text-detail flex flex-col gap-2">
        {children}
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="flex justify-between text-[16px]">
      <div className="hidden sm:flex flex-col gap-2  flex-1">
        {[
          { href: "#preliminary", label: "Preliminary Concept & Design" },
          { href: "#developed", label: "Developed Design" },
          { href: "#docs", label: "Architectural Documentation" },
          { href: "#contract", label: "Contract Works Administration" },
        ].map((a) => (
          <CustomLink href={a.href}>{a.label}</CustomLink>
        ))}
      </div>
      <div className="flex flex-col gap-8 flex-1">
        <PageHeader title="Services" />
        <div className="flex flex-col gap-12">
          <Service
            id="preliminary"
            titleP1="Preliminary"
            titleP2=" & Concept Design"
          >
            <p>Confirmation of building and design scope, </p>
            <p>Development of design brief </p>
            <p>Building preliminary research portfolio</p>
            <ul className="list-disc list-inside  text-[16px]">
              <li>site research</li>
              <li>compliance requirements, </li>
              <li>material </li>
              <li>Research and samples (if required)</li>
            </ul>
            <p>Creation of concept design scheme</p>
          </Service>

          <Service id="developed" titleP1="Developed" titleP2=" Design">
            <p>Incorporating client feedback into design scheme</p>
            <p>Refinement of spatial planning & functional requirements</p>
            <p>Outline specification of material finish</p>
            <p>Produce developed design scheme</p>
          </Service>

          <Service id="docs" titleP1="Architectural" titleP2=" Documentation">
            <p>Produce detailed design documentation & specifications</p>
            <p>Coordinate with any required professional consultants</p>
            <p>
              Collate all documentation with any professional consultants
              designs (CPEng etc)
            </p>
            <p>Apply to council (Territorial Authority) for building consent</p>
            <p>Act as agent to council for processing of building consent. </p>
          </Service>

          <Service
            id="contract"
            titleP1="Contract Works"
            titleP2=" Administration"
          >
            <p className="opacity-50">(If client requires)</p>
            <p>Produce documentation for tender</p>
            <p>Contract documents</p>
            <p>Site observations</p>
            <p>Payment certificates</p>
            <p>Variation certificates</p>
          </Service>

          <p className="opacity-70">
            Feel free to inquire about our services. <br />
            The provided list is not comprehensive, and if you don't see your
            specific request, we could still potentially assist you.
          </p>
        </div>
      </div>
      <div className="hidden sm:flex flex-1"></div>
    </div>
  );
}
