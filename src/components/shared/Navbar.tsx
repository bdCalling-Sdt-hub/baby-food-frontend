"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileDrawer from "./MobileDrawer";
import { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";

const Navbar = () => {
  const path = usePathname();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const leftLinks = [
    { path: "/about-us", title: "About Us" },
    { path: "/products", title: "Products" },
    { path: "/ingredient", title: "Ingredients" },
  ];

  const rightLinks = [
    { path: "/sustainability", title: "Sustainability" },
    { path: "/contact", title: "Contact" },
    { path: "/faq", title: "FAQ" },
  ];

  return (
    <div className={`z-[999] ${path !== "/" && "bg-footer "}`}>
      <div className="container flex items-center justify-between py-4">
        {/* Left Links */}
        <div className="hidden md:flex items-center gap-8 uppercase">
          {leftLinks.map((link, index) => (
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

        {/* Logo (Centered) */}
        <div className="flex justify-center w-[20%]">
          <a href="/">
            <img
              alt="Logo"
              className="navLogo w-[90%] h-14 brightness-0 invert"
              src="/logo.png"
            />
          </a>
        </div>

        {/* Right Links */}
        <div className="hidden md:flex items-center gap-8 uppercase">
          {rightLinks.map((link, index) => (
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
        links={[...leftLinks, ...rightLinks]}
        onClose={() => setIsDrawerOpen(false)}
      />
    </div>
  );
};

export default Navbar;
