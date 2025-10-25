"use client";
import { Nav_Items } from "@/lib/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItems = () => {
  const pathname = usePathname();
  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };
  return (
    <>
      <ul className="flex flex-col sm:flex-row p-2 gap-3 sm:gap-10 font-medium">
        {Nav_Items.map((item) => (
          <li key={item.title}>
            <Link
              className={`hover:text-yellow-500 transition-colors ${
                isActive(item.href) ? "text-gray-100" : ""
              }`}
              href={item.href}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavItems;
