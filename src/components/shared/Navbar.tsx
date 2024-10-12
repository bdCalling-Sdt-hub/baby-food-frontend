"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname();
  const links = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/products",
      title: "Products",
    },
    {
      path: "/ingredient",
      title: "Ingredient",
    },
    {
      path: "/sustainability-packaging",
      title: "Sustainability & Packaging",
    },
    {
      path: "/contact",
      title: "Contact",
    },
  ];
  return (
    <div className={`${path !== "/" && "bg-footer"}`}>
      <div className="flex items-center justify-between container py-4">
        <div>
          <a href="http://">
            <img
              className="w-[20%] brightness-0 invert"
              src="/logo.png"
              alt=""
            />
          </a>
        </div>
        <div className="flex items-center gap-8">
          {links.map((link, index) => (
            <Link
              className={`tracking-wider text-white whitespace-nowrap ${
                path === link.path ? "border-b-2 border-primary" : " "
              }`}
              key={index}
              href={link.path}
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
