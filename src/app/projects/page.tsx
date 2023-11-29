import Image from "next/image";
import PageHeader from "@/components/PageHeader";

const Tile = ({ image }: { image: string }) => (
  <Image src={image} alt={image} width="400" height="220" className="" />
);
export default function Home() {
  return (
    <div>
      <PageHeader title="Projects"></PageHeader>

      <div className="flex flex-wrap gap-6">
        <Tile image="/projects/Project_08.png" />
        <Tile image="/projects/Project_12.png" />
        <Tile image="/projects/Project_14.png" />
        <Tile image="/projects/Project_15.png" />
        <Tile image="/projects/Project_24.png" />
        <Tile image="/projects/Project_30.png" />
        <Tile image="/projects/Project_39.png" />
        <Tile image="/projects/Project_129.png" />
        <Tile image="/projects/Project_other.png" />
        <Tile image="/projects/Project_other2.png" />
        <Tile image="/projects/Project_other3.png" />
        <Tile image="/projects/Project_other4.png" />
      </div>
    </div>
  );
}
