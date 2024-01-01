"use client";

import { ProjectDetail, Types } from "./types";
import { useEffect, useState } from "react";

import CustomLink from "@/components/CustomLink";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import Par from "@/components/Par";
import { projectsList } from "./data";

const Tile = ({
  image,
  title,
  detail,
  id,
  selected,
}: Omit<ProjectDetail, "type"> & {
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
  const [projects, setProjects] = useState<Array<ProjectDetail>>(projectsList);
  const [selectedType, setSelectedType] = useState<string>(Types.All);
  const [selectedId, setSelectedId] = useState<string>("");

  useEffect(() => {
    if (selectedType === Types.All) {
      setProjects(projectsList);
    } else {
      setProjects(projectsList.filter((p) => p.type === selectedType));
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
                if (!!selectedType) {
                  setSelectedType(Types.All);
                }
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
            {Object.values(Types).map((type) => (
              <CustomLink
                key={type}
                selected={selectedType === type}
                onClick={() => {
                  setSelectedType(type);
                }}
              >
                {type}
              </CustomLink>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col  flex-1">
        <PageHeader title="Projects"></PageHeader>
        <div className="flex flex-col gap-20 py-6 scroll-mt-4 overflow-auto">
          {projects?.map((item) => (
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
      <div className="flex-1 hidden lg:flex "></div>
    </div>
  );
}
