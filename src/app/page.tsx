import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div></div>
      <h2 className="opacity-60">Transform your land or home with</h2>
      <h1 className="font-bold tracking-wide leading-tight text-accents-heavy">
        ARCHITECTURAL DESIGN
      </h1>
      <h3 className="leading-8 mt-8 max-w-[700px]">
        Architectural services for{" "}
        <span className="text-accents-heavy">
          residential, commercial & educational projects
        </span>
        . Extensive knowledge of the New Zealand building code and construction
        administration.{" "}
      </h3>
      <div className="flex flex-col sm:flex-row justify-end items-center">
        <p className="hidden sm:block">
          Grahamstown Florist
          <br />
          <span className="opacity-40">location:</span> Thames
          <br />
          <span className="opacity-40">material:</span> containers <br />
          <span className="opacity-40">type:</span> commercial
        </p>
        <Image
          alt="Florist"
          src={"/florist2.png"}
          width="800"
          height="600"
          className="float-right grayscale hover:grayscale-0 z-1"
        />
      </div>
    </div>
  );
}
