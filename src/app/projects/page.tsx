import CustomLink from "@/components/CustomLink";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import Par from "@/components/Par";

const Tile = ({
  image,
  title,
  id,
}: {
  image: string;
  title: string;
  id: string;
}) => (
  <div id={id} className="">
    <ProjectTitle title={title} />
    <Image src={image} alt={image} width="400" height="220" className="" />
  </div>
);

const ProjectTitle = ({ title }: { title: string }) => {
  return (
    <div className="flex flex-col">
      <Par />
      <h2 className="text-[16px]">
        <b>{title}</b>
      </h2>
    </div>
  );
};
export default function Home() {
  return (
    <div className="flex  ">
      <div className="flex flex-col gap-10 flex-1">
        <div className="flex flex-col">
          <p className="opacity-60">projects by name</p>
          {[
            {
              title: "Grahamstown Florist",
              href: "#florist",
            },
            {
              title: "Batch in the Coromandel",
              href: "#batch1",
            },
            {
              title: "School in Taranaki",
              href: "#school1",
            },
            {
              title: "Commercial space",
              href: "#commercial",
            },
            {
              title: "Grahamstown Florist",
              href: "#florist",
            },
            {
              title: "Batch in the Coromandel",
              href: "#batch1",
            },
            {
              title: "School in Taranaki",
              href: "#school1",
            },
            {
              title: "Commercial space",
              href: "#commercial",
            },
            {
              title: "Grahamstown Florist",
              href: "#florist",
            },
            {
              title: "Batch in the Coromandel",
              href: "#batch1",
            },
            {
              title: "School in Taranaki",
              href: "#school1",
            },
            {
              title: "Commercial space",
              href: "#commercial",
            },
          ].map((line) => (
            <CustomLink href={line.href}>{line.title}</CustomLink>
          ))}
        </div>
        <div>
          <p className="opacity-60">projects by type</p>
          <p>Residential</p>
          <p>Commercial</p>
          <p>Schools</p>
        </div>
      </div>
      <div className="flex flex-col  flex-1">
        <PageHeader title="Projects"></PageHeader>
        <div className="flex flex-col gap-6 py-6">
          <Tile
            title="Grahamstown Florist"
            image="/projects/Project_other2.png"
          />
          <Tile
            title="Batch in the Coromandel"
            image="/projects/Project_08.png"
          />
          <Tile
            id="#batch"
            title="Grahamstown Florist"
            image="/projects/Project_12.png"
          />
          <Tile
            id="#school1"
            title="School in Taranaki"
            image="/projects/Project_14.png"
          />
          <Tile
            id="#commercial"
            title="Commercial space"
            image="/projects/Project_15.png"
          />
          <Tile title="Grahamstown Florist" image="/projects/Project_24.png" />
          <Tile title="Grahamstown Florist" image="/projects/Project_30.png" />
          <Tile title="Grahamstown Florist" image="/projects/Project_39.png" />
          <Tile title="Grahamstown Florist" image="/projects/Project_129.png" />
          <Tile
            title="Grahamstown Florist"
            image="/projects/Project_other.png"
          />
          <Tile
            title="Grahamstown Florist"
            image="/projects/Project_other.png"
          />
          <Tile
            title="Grahamstown Florist"
            image="/projects/Project_other3.png"
          />
          <Tile
            title="Grahamstown Florist"
            image="/projects/Project_other4.png"
          />
        </div>
      </div>
      <div className="flex-1"></div>
    </div>
  );
}
