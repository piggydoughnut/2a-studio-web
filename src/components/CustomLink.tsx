import Link from "next/link";

const CustomLink = ({
  href = "",
  onClick,
  children,
}: {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
}) => (
  <Link
    className="hover:opacity-90 hover:underline hover:underline-offset-4 decoration-2"
    href={href}
    onClick={onClick}
  >
    {children}
  </Link>
);

export default CustomLink;
