import { usePathname } from "next/navigation";
import Link from "next/link";
import { ReactNode } from "react";

interface NavLinkProps {
  href: string;
  children: ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link href={href}>
      <div
        className={`flex items-center gap-4 py-3 px-8 font-medium w-[208px] rounded-lg hover:bg-glass transition-colors duration-200 ${
          isActive ? "bg-fillColor" : ""
        }`}
      >
        {children}
      </div>
    </Link>
  );
};

export { NavLink };
