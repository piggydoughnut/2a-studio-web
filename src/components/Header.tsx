"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logov2-1.svg";
import { useRouter } from "next/navigation";

const Separator = () => <div className="opacity-30 text-[12px] mt-1">|</div>;
const Header = () => {
  const router = useRouter();
  return (
    <div className="flex justify-between">
      <Image
        alt="2aLogo"
        src={logo}
        width="170"
        onClick={() => router.push("/")}
        className="hover:cursor-pointer"
      />
      <div className="flex gap-6">
        <Link className="tracking-wide" href="/about">
          about
        </Link>
        {/* <Separator /> */}

        <Link className="tracking-wide" href="/services">
          services
        </Link>
        {/* <Separator /> */}

        <Link className="tracking-wide" href="/projects">
          projects
        </Link>
        {/* <Separator /> */}

        <Link className="tracking-wide" href="/plans">
          <span className="opacity-50">Only</span>Plans
        </Link>
        {/* <Separator /> */}

        <Link className="tracking-wide" href="/contact">
          contact
        </Link>
      </div>
    </div>
  );
};

export default Header;
