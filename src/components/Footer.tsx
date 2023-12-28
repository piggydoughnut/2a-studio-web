import Image from "next/image";
import Link from "next/link";
import { company } from "@/config";
import { inriaSans } from "@/styles/fonts";
import location from "../../public/location.svg";
import mail from "../../public/mail.svg";
import phone from "../../public/phone.svg";

const Separator = ({ className }: { className: string }) => (
  <div className={`opacity-90 ${className}`}>|</div>
);

const Footer = () => (
  <footer className="h-[170px] sm:h-12 pb-10 pt-10 w-full flex justify-start sm:justify-center bg-accents-secondary">
    {" "}
    <div className={inriaSans.className}>
      <div className="flex flex-col sm:flex-row ml-4 sm:ml-0 gap-4">
        <div className="flex  gap-2">
          <Image alt="2aLogo" src={location} width="24" />
          <Link href="https://maps.app.goo.gl/CpZJZ6BxZaatB9m16">
            {company.address}
          </Link>
        </div>
        <Separator className="hidden sm:block" />
        <div className="flex gap-2">
          <Image alt="2aLogo" src={phone} width="24" />
          <p>{company.phone}</p>
        </div>
        <Separator className="hidden sm:block" />
        <div className="flex  gap-2">
          <Image alt="2aLogo" src={mail} width="24" />
          <Link href={`mailto:${company.email}`}>{company.email}</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
