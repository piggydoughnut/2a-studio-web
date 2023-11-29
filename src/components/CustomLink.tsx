import Link from "next/link";

const CustomLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    className="hover:opacity-90 hover:underline hover:underline-offset-4 decoration-2"
    href={href}
  >
    {children}
  </Link>
);

export default CustomLink;
