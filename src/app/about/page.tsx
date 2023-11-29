import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import Par from "@/components/Par";

export default function Home() {
  return (
    <div className="flex justify-between ml-6">
      <div>
        <PageHeader title="About"></PageHeader>
        <div className="flex flex-col gap-8 max-w-[500px]">
          <div className="max-w-[500px] mb-10">
            <p>
              2a Design is focused on delivering conscientious designs casting
              over the Coromandel & Hauraki regions.
            </p>
            <br />

            <p>
              We are a two man architectural collaboration based in Thames. We
              have extensive practical knowledge of the architecture &
              construction sectors. We have distinct knowledge of local district
              plans, rules regulations.
            </p>
            <br />
            <p>
              Our studio applies experience, skill and creativity to meet our
              clients built ambitions.
            </p>
          </div>

          <div>
            <div className="mb-4">
              <h2 className="text-[24px]">
                <Par />
                <b>Rob</b> Johnston
              </h2>
              <p className="opacity-70 tracking-widest">
                BBSc. 1995 , BArch. 1997.
              </p>
            </div>

            <p>
              Rob has a large foundation of Architecture & construction
              knowledge from over 25yrs working in the industry. He collaborates
              on design while managing our projects, clients and council
              liaison.{" "}
            </p>
            <p>
              Rob is an enthusiastic member of the Thames Society of Arts and is
              an elected member of the Thames Community Board.
            </p>
          </div>

          <div>
            <div className="mb-4">
              <h2 className="text-[24px]">
                <Par />
                <b>Scott</b> Autridge
              </h2>
              <p className="opacity-70 tracking-widest">
                Cert. (Carpentry). 2008,BAS. 2012 ,<br />
                M.A. 2014, M.Arch (prof). 2015.
              </p>
            </div>

            <p>
              Scott comes from a background in building, finishing a carpentry
              apprenticeship before undertaking his studies in architecture.{" "}
            </p>
            <p>
              Scott collaborates with Rob on design, and is interested in the
              technical nuts and bolts side of architecture. He undertakes the
              architectural documentation, detailing & 3D modelling for each
              project.{" "}
            </p>
          </div>
        </div>
        <p className="mt-20">
          Feel free to get in touch with any inquiries about our services.{" "}
          <br />
          If you have specific needs, don't hesitate to ask, and we'll do our
          best to help you.
        </p>
      </div>
      <div className="mt-[420px]">
        <Image
          src="/2adesign.png"
          alt="2a desgn"
          width="576"
          height="861"
          className="align-self-start h-[861px] w-[576px]"
        />
      </div>
    </div>
  );
}
