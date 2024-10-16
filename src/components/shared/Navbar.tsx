"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileDrawer from "./MobileDrawer";
import { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";

const Navbar = () => {
  const path = usePathname();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const links = [
    { path: "/", title: "Home" },
    { path: "/products", title: "Products" },
    { path: "/ingredient", title: "Ingredient" },
    { path: "/sustainability-packaging", title: "Sustainability & Packaging" },
    { path: "/contact", title: "Contact" },
    { path: "/products-details", title: "Dashboard" },
  ];

  return (
    <div className={`${path !== "/" && "bg-footer"}`}>
      <div className="container flex items-center justify-between py-4">
        <a href="/">
          <img
            alt="Logo"
            className="w-[20%] brightness-0 invert"
            src="/logo.png"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className={`tracking-wider text-white whitespace-nowrap ${
                path === link.path ? "border-b-2 border-primary" : ""
              }`}
            >
              {link.title}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsDrawerOpen(true)}
          className="block md:hidden text-white text-2xl"
        >
          <MenuOutlined />
        </button>
      </div>

      {/* Mobile Drawer */}
      <MobileDrawer
        open={isDrawerOpen}
        links={links}
        onClose={() => setIsDrawerOpen(false)}
      />
    </div>
  );
};

export default Navbar;
