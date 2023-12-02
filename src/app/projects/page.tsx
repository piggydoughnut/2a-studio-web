"use client";

import { useEffect, useState } from "react";

import CustomLink from "@/components/CustomLink";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import Par from "@/components/Par";

const Types = {
  Commercial: "Commercial",
  Residential: "Residential",
  School: "School",
};

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
    <Image
      src={image}
      alt={image}
      width="400"
      height="220"
      className="grayscale hover:grayscale-0"
    />
  </div>
);

const projectsList = [
  {
    id: "#batch",
    title: "Grahamstown Florist",
    type: Types.Commercial,
    image: "/projects/Project_other2.png",
  },
  {
    id: "#batch",
    title: "Batch in the Coromandel",
    type: Types.Residential,
    image: "/projects/Project_08.png",
  },
  {
    id: "#batch",
    title: "Coromandel Town School",
    type: Types.School,
    image: "/projects/Project_12.png",
  },
  {
    id: "#batch",
    title: "43 Brown street, Thames",
    type: Types.Residential,
    image: "/projects/Project_14.png",
  },
  {
    id: "#batch",
    title: "Beach house",
    type: Types.Residential,
    image: "/projects/Project_15.png",
  },

  {
    id: "#batch",
    title: "Taranaki school",
    type: Types.School,
    image: "/projects/Project_24.png",
  },

  {
    id: "#batch",
    title: "Auckland beach house",
    type: Types.Commercial,
    image: "/projects/Project_30.png",
  },

  {
    id: "#batch",
    title: "Grahamstown Florist",
    type: Types.Residential,
    image: "/projects/Project_39.png",
  },
  {
    id: "#batch",
    title: "School in the Coromandel",
    type: Types.School,
    image: "/projects/Project_129.png",
  },
  {
    id: "#batch",
    title: "School in Waihi",
    type: Types.Residential,
    image: "/projects/Project_other.png",
  },
  {
    id: "#batch",
    title: "Batch in the Coromandel",
    type: Types.Residential,
    image: "/projects/Project_other3.png",
  },

  {
    id: "#batch",
    title: "Waihi beach school",
    type: Types.Commercial,
    image: "/projects/Project_other4.png",
  },
];

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
  const [projects, setProjects] = useState(projectsList);
  const [selectedType, setSelectedType] = useState("");

  useEffect(() => {
    setProjects(projectsList.filter((p) => p.type === selectedType));
    if (!selectedType) {
      setProjects(projectsList);
    }
  }, [selectedType]);
  return (
    <div className="flex">
      <div className="hidden sm:flex flex-col gap-10 flex-1">
        <div className="flex flex-col gap-1">
          <p className="opacity-60 text-[14px]">projects by name</p>
          {projectsList.map((line) => (
            <CustomLink href={line.id}>{line.title}</CustomLink>
          ))}
        </div>
        <div>
          <p className="opacity-60 text-[14px]">projects by type</p>
          <div className="flex flex-col gap-1">
            <CustomLink onClick={() => setSelectedType("")}>All</CustomLink>
            <CustomLink onClick={() => setSelectedType(Types.Residential)}>
              Residential
            </CustomLink>
            <CustomLink onClick={() => setSelectedType(Types.Commercial)}>
              Commercial
            </CustomLink>
            <CustomLink onClick={() => setSelectedType(Types.School)}>
              Schools
            </CustomLink>
          </div>
        </div>
      </div>
      <div className="flex flex-col  flex-1">
        <PageHeader title="Projects"></PageHeader>
        <div className="flex flex-col gap-6 py-6">
          {projects.map((item) => (
            <Tile id={item.id} title={item.title} image={item.image} />
          ))}
        </div>
      </div>
      <div className="hidden sm:flex flex-1"></div>
    </div>
  );
}
