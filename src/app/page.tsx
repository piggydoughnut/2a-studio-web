import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div></div>
      <h1 className="text-[36px] opacity-60">
        Transform your land or home with
      </h1>
      <h1 className="font-bold text-[64px] tracking-wide">
        ARCHITECTURAL DESIGN
      </h1>
      <p className="text-[24px]">
        Architectural services for residential, commercial & educational
        projects. <br />
        Extensive knowledge of the New Zealand building code and construction
        administration.{" "}
      </p>
      <Image
        alt="Florist"
        src={"/florist.png"}
        width="1000"
        height="600"
        className="float-right"
      />
    </div>
  );
}
