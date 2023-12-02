import Image from "next/image";
import Link from "next/link";
import { inriaSans } from "@/styles/fonts";
import location from "../../public/location.svg";
import mail from "../../public/mail.svg";
import phone from "../../public/phone.svg";

const Separator = ({ className }: { className: string }) => (
  <div className={`opacity-90 ${className}`}>|</div>
);

const Footer = () => (
  <footer className="h-12 left-0 bottom-4 pb-10 pt-20 w-full flex justify-start sm:justify-center">
    {" "}
    <div className={inriaSans.className}>
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex  gap-2">
          <Image alt="2aLogo" src={location} width="24" />
          <Link href="https://maps.app.goo.gl/CpZJZ6BxZaatB9m16">
            209 Rolleston Street, Thames
          </Link>
        </div>
        <Separator className="hidden sm:block" />
        <div className="flex gap-2">
          <Image alt="2aLogo" src={phone} width="24" />
          <p>021 780 989</p>
        </div>
        <Separator className="hidden sm:block" />
        <div className="flex  gap-2">
          <Image alt="2aLogo" src={mail} width="24" />
          <Link href="mailto:office@2adesign.co.nz">office@2adesign.co.nz</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
