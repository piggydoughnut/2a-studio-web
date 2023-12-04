import Link from "next/link";

const CustomLink = ({
  href = "",
  selected = false,
  onClick,
  children,
}: {
  href?: string;
  selected?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}) => (
  <Link
    className={`hover:opacity-90 hover:underline hover:underline-offset-4 decoration-2 ${
      selected ? "text-orange-500" : ""
    }`}
    href={href}
    onClick={onClick}
  >
    {children}
  </Link>
);

export default CustomLink;
