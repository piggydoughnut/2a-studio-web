"use client";

import { useEffect, useState } from "react";

import CustomLink from "@/components/CustomLink";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import Par from "@/components/Par";

const Types = {
  Commercial: "Commercial",
  Residential: "Residential",
  Educational: "Educational",
};

const Tile = ({
  image,
  title,
  detail,
  id,
  selected,
}: {
  image: string;
  title: string;
  detail?: React.ReactNode;
  id: string;
  selected: boolean;
}) => (
  <div id={id} className="">
    <ProjectTitle title={title} accent={selected} />
    {detail && <div className="mb-4 opacity-70">{detail}</div>}
    <Image
      src={image}
      alt={image}
      width="400"
      height="220"
      className={`grayscale hover:grayscale-0 ${selected ? "grayscale-0" : ""}`}
    />
  </div>
);

const projectsList = [
  {
    id: "1_container_florist",
    title: "Container Florist",
    detail: "Florist; 1 x 40' & 2 x 20' Containers stacked.",
    type: Types.Commercial,
    image: "/projects/1_container_florist.png",
  },
  {
    id: "2_townhouse_3bdr",
    title: "Townhouse with 3 bedrooms",
    detail: "House; 3 Bedroom, 2 Bathroom, Double Garage.",
    type: Types.Residential,
    image: "/projects/2_townhouse_3bdr.png",
  },
  {
    id: "3_thames_coast_reno",
    title: "Thames coast renovation",
    detail: "Renovation; Bedrooms, Bathroom, Kitchen, Dining & Outdoor Living.",
    type: Types.Residential,
    image: "/projects/3_thames_coast_reno.png",
  },
  {
    id: "4_3bdr_family_home",
    title: "3 bedroom family home with minor unit",
    detail:
      "House; 3 Bedrooms, 2 Bathrooms, Kitchen, Dining, Living, Outdoor Living, Double Garage, Boat shed & Workshop.",
    type: Types.Residential,
    image: "/projects/4_3bdr_family_home.png",
  },
  {
    id: "5_school_classroom",
    title: "School classroom",
    detail:
      "School; Mixed use Classrooms. Kitchen - Wahi Kai, Resource & Store.",
    type: Types.Educational,
    image: "/projects/5_school_classroom.png",
  },

  {
    id: "6_4bdr_house_thames_coast",
    title: "3 bedroom Thames coast house",
    detail:
      "House; 3 Bedrooms, 2 Bathrooms, Kitchen, Dining, Living, Outdoor Living, Double Garage, Boat shed & Workshop.",
    type: Types.Residential,
    image: "/projects/6_4bdr_house_thames_coast.png",
  },

  {
    id: "7_tiny_house",
    title: "Tiny house ",
    detail:
      "Minor Unit; 50m sq, 1.5 Bedroom, Kitchen, Dining, Living, Bathroom & Outdoor Living.",
    type: Types.Residential,
    image: "/projects/7_tiny_house.png",
  },

  {
    id: "8_kitchen_renovation",
    title: "Kitchen Renovation",
    detail: "Interiors; Kitchen, Living & Bedroom Interiors.",
    type: Types.Residential,
    image: "/projects/8_kitchen_renovation.png",
  },
  {
    id: "9_school_refurbishment",
    title: "School refurbishment ",
    detail: (
      <p>
        School; Outdoor Learning Area, Senior Student Hub Toilets & General
        Refurbishment.
      </p>
    ),
    type: Types.Educational,
    image: "/projects/9_school_refurbishment.png",
  },
  {
    id: "10_3bdrm_home_minor_unit",
    title: "3 bedroom family home with minor unit",
    detail: (
      <p>
        House; 3 Bedrooms, 2 Bathrooms, Kitchen, Dining, Living, Outdoor Living
        & Double Garage. <br /> <br />
        Minor Unit: 1.5 Bedroom, Kitchen, Dining, Living, Bathroom, Office &
        Outdoor Living
      </p>
    ),
    type: Types.Residential,
    image: "/projects/10_3bdrm_home_minor_unit.png",
  },
  {
    id: "11_school_amphitheatre",
    title: "School refurbishment and amphitheatre",
    detail: "School; Outdoor Assembly Area, Toilets & General Refurbishment",
    type: Types.Educational,
    image: "/projects/11_school_amphitheatre.png",
  },
  {
    id: "12_1bdr_townhouse",
    title: "1 bedroom townhouse",
    detail:
      "Town House; 1.5 Bedroom, Kitchen, Dining, Living, Bathroom, Office, Outdoor Living & Single Garage.",
    type: Types.Residential,
    image: "/projects/12_1bdr_townhouse.png",
  },
];

const ProjectTitle = ({
  title,
  accent,
}: {
  title: string;
  accent?: boolean;
}) => {
  return (
    <div className="flex flex-col mb-2">
      <Par black={!accent} />
      <h4 className={`${accent ? "text-accents-heavy" : ""}`}>
        <b>{title}</b>
      </h4>
    </div>
  );
};
export default function Home() {
  const [projects, setProjects] = useState(projectsList);
  const [selectedType, setSelectedType] = useState("");
  const [selectedId, setSelectedId] = useState("");

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
          <p className="opacity-60 text-detail">name</p>
          {projectsList.map((line) => (
            <CustomLink
              key={line.id}
              selected={selectedId === line.id}
              onClick={() => {
                setSelectedId(line.id);
                setSelectedType("");
              }}
              href={`#${line.id}`}
            >
              {line.title}
            </CustomLink>
          ))}
        </div>
        <div>
          <p className="opacity-60 text-detail">type</p>
          <div className="flex flex-col gap-1">
            <CustomLink
              selected={selectedType === ""}
              onClick={() => {
                setSelectedType("");
                setSelectedId("");
              }}
            >
              All
            </CustomLink>

            <CustomLink
              selected={selectedType === Types.Residential}
              onClick={() => {
                setSelectedType(Types.Residential);
                setSelectedId("");
              }}
            >
              {Types.Residential}
            </CustomLink>

            <CustomLink
              selected={selectedType === Types.Commercial}
              onClick={() => {
                setSelectedType(Types.Commercial);
                setSelectedId("");
              }}
            >
              {Types.Commercial}
            </CustomLink>
            <CustomLink
              selected={selectedType === Types.Educational}
              onClick={() => {
                setSelectedType(Types.Educational);
                setSelectedId("");
              }}
            >
              {Types.Educational}
            </CustomLink>
          </div>
        </div>
      </div>
      <div className="flex flex-col  flex-1">
        <PageHeader title="Projects"></PageHeader>
        <div className="flex flex-col gap-20 py-6 scroll-mt-4 overflow-auto">
          {projects.map((item) => (
            <Tile
              key={item.id}
              selected={selectedId === item.id}
              detail={item.detail}
              id={item.id}
              title={item.title}
              image={item.image}
            />
          ))}
        </div>
      </div>
      <div className="hidden sm:flex flex-1"></div>
    </div>
  );
}
