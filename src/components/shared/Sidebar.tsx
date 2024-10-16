"use client";
import { Dropdown, Space } from "antd";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { MenuProps } from "antd";
import {
  Captions,
  Contact,
  FileQuestion,
  LayoutGrid,
  LayoutList,
  LogOut,
  Package,
  ShoppingBasket,
} from "lucide-react";
import Image from "next/image";

const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();

  interface ItemType {
    title: string;
    path: string;
    icon: React.JSX.Element;
  }

  const linkItems: ItemType[] = [
    {
      title: "Products",
      path: "/products-details",
      icon: <LayoutGrid />,
    },
    {
      title: "Ingredient",
      path: "/ingredient-details",
      icon: <ShoppingBasket />,
    },
    {
      title: "Sustainability & Packaging",
      path: "/sustainability-packaging-details",
      icon: <Package />,
    },
    {
      title: "Contact",
      path: "/contact-details",
      icon: <Contact />,
    },
    {
      title: "About Us",
      path: "/about-details",
      icon: <Captions />,
    },
    {
      title: "FAQ",
      path: "/faq-details",
      icon: <FileQuestion />,
    },
    {
      title: "Blogs",
      path: "/blogs-details",
      icon: <LayoutList />,
    },

    {
      title: "Log Out",
      path: "/login",
      icon: <LogOut size={24} />,
    },
  ];

  const menuItems: MenuProps["items"] = linkItems.map((item, index) => {
    return {
      key: index,
      label: (
        <Link
          href={item.path}
          className={`flex w-full ${
            item.path === pathname
              ? "bg-[#68a2f3] text-white"
              : "bg-transparent text-black"
          } items-center gap-[14px] px-3 py-2 rounded-[5px] font-normal`}
        >
          <div>{item.icon}</div>
          <div>{item.title}</div>
        </Link>
      ),
    };
  });

  return (
    <div>
      <div
        className="lg:h-[110vh] lg:fixed lg:bg-[#6c8738]"
        style={{
          overflow: "auto",
          overflowY: "hidden",
          zIndex: 50,
          paddingRight: "20px",
        }}
      >
        <div className="logo flex items-center justify-between lg:justify-center gap-2 lg:mt-[30px] lg:mb-[20px] mt-[10px] mx-3  border-b-2 py-3 lg:border-none">
          <div>
            <Link href="/">
              <Image
                src="/logo.png"
                alt=""
                className="brightness-0 invert w-[120px]"
                height={100}
                width={500}
              />
            </Link>
          </div>

          <div className="lg:hidden block">
            <Dropdown menu={{ items: menuItems }}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>h</Space>
              </a>
            </Dropdown>
          </div>
        </div>

        <div className="hidden lg:block">
          <ul
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              height: "100%",
              marginTop: 0,
            }}
          >
            {linkItems.map((item, index) => {
              return (
                <li
                  key={index}
                  style={{
                    width: "100%",
                    height: "34px",
                    position: "relative",
                    marginBottom: "10px",
                    paddingLeft: "30px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Link
                    href={item.path}
                    style={{
                      display: "flex",
                      width: "100%",
                      backgroundColor:
                        item.path === pathname ? "#F37D2B" : "transparent",
                      color: item.path === pathname ? "#fff" : "#fff",
                      alignItems: "center",
                      gap: "14px",
                      padding: "10px 10px",
                      fontWeight: "400",
                    }}
                    className="rounded-full rounded-tl-none tracking-wide"
                  >
                    <div style={{ height: "24px" }}>{item.icon}</div>
                    <div
                      style={{
                        fontSize: "16px",
                        height: "fit-content",
                      }}
                    >
                      {item.title}
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
