"use client";

import Burger from "./Buger";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logov2-1.svg";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  return (
    <div>
      <div className="hidden sm:flex justify-between">
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
      <div className="sm:hidden flex flex-row items-start justify-between pt-10 pb-4 pl-0">
        <Image
          alt="2aLogo"
          src={logo}
          width="170"
          onClick={() => router.push("/")}
          className="hover:cursor-pointer"
        />
        <div className="self-start ">
          <Burger
            menu={[
              { name: "About", url: "/about" },
              { name: "Services", url: "/services" },
              { name: "Projects", url: "/projects" },
              { name: "OnlyPlans", url: "/plans" },
              { name: "Contact", url: "/contact" },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
