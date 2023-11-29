import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import Par from "@/components/Par";

export default function Home() {
  return (
    <div className="">
      <PageHeader title="Services" />
      <div className="flex flex-col gap-6 transition-opacity delay-100">
        <div className="flex gap-10">
          <div className="flex flex-col w-[400px]">
            <Par />
            <h2 className="text-[24px]">
              <b>Preliminary</b> & Concept Design
            </h2>
          </div>
          <div className="mt-2 leading-7">
            <p>Confirmation of building and design scope, </p>
            <p>Development of design brief </p>
            <p>Building preliminary research portfolio</p>
            <ul className="list-disc list-inside">
              <li>site research</li>
              <li>compliance requirements, </li>
              <li>material </li>
              <li>Research and samples (if required)</li>
            </ul>
            <p>Creation of concept design scheme</p>
          </div>
        </div>{" "}
        <div className="flex gap-10">
          <div className="flex flex-col w-[400px]">
            <Par />
            <h2 className="text-[24px]">
              <b>Developed</b> Design
            </h2>
          </div>
          <div className="mt-2">
            <p>Incorporating client feedback into design scheme</p>
            <p>Refinement of spatial planning & functional requirements</p>
            <p>Outline specification of material finish</p>
            <p>Produce developed design scheme</p>
          </div>
        </div>
        <div className="flex gap-10">
          <div className="flex flex-col w-[400px]">
            <Par />
            <h2 className="text-[24px]">
              <b>Architectural</b> Documentation
            </h2>
          </div>
          <div className="mt-2">
            <p>Produce detailed design documentation & specifications</p>
            <p>Coordinate with any required professional consultants</p>
            <p>
              Collate all documentation with any professional consultants
              designs (CPEng etc)
            </p>
            <p>Apply to council (Territorial Authority) for building consent</p>
            <p>Act as agent to council for processing of building consent. </p>
          </div>
        </div>
        <div className="flex gap-10">
          <div className="flex flex-col w-[400px]">
            <Par />
            <h2 className="text-[24px]">
              <b>Contract Works</b> Administration
            </h2>
          </div>
          <div className="mt-2">
            <p className="opacity-50">(If client requires)</p>
            <p>Produce documentation for tender</p>
            <p>Contract documents</p>
            <p>Site observations</p>
            <p>Payment certificates</p>
            <p>Variation certificates</p>
          </div>
        </div>
        <p className="opacity-70">
          Feel free to inquire about our services. <br />
          The provided list is not comprehensive, and if you don't see your
          specific request, <br />
          we could still potentially assist you.
        </p>
      </div>
    </div>
  );
}
