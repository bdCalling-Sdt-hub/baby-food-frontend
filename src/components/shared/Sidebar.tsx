"use client";
import Link from "next/link";
import { MdLogout, MdProductionQuantityLimits } from "react-icons/md";
import { IoMdCheckmarkCircleOutline, IoMdContacts, IoMdPerson } from "react-icons/io";
import {
  IoDocumentAttachOutline,
  IoPeopleOutline,
  IoVideocamOutline,
} from "react-icons/io5";
import { usePathname, useRouter } from "next/navigation";
import { Dropdown, Space, Menu } from "antd";
import { RxHamburgerMenu } from "react-icons/rx";
import { GrMoney } from "react-icons/gr";
import { FaQuestion } from "react-icons/fa6";

import { MenuProps } from "antd";
import Image from "next/image";
import { GoPackage } from "react-icons/go";
import { RiBloggerLine } from "react-icons/ri";

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
      icon: <MdProductionQuantityLimits size={24} />,
    },
    {
      title: "Ingredient",
      path: "/ingredient-details",
      icon: <GrMoney size={24} />,
    },
    {
      title: "Sustainability & Packaging",
      path: "/sustainability-packaging-details",
      icon: <GoPackage size={24} />,
    },
    {
      title: "Contact",
      path: "/contact-details",
      icon: <IoMdContacts size={24} />,
    },
    {
      title: "About Us",
      path: "/about-details",
      icon: <IoPeopleOutline size={24} />,
    },
    {
      title: "FAQ",
      path: "/faq-details",
      icon: <FaQuestion size={24} />,
    },
    {
      title: "Blogs",
      path: "/blogs-details",
      icon: <RiBloggerLine  size={24} />,
    },

    {
      title: "Log Out",
      path: "/login",
      icon: <MdLogout size={24} />,
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
          <div className="h-[24px]">{item.icon}</div>
          <div className="text-[16px]">{item.title}</div>
        </Link>
      ),
    };
  });

  return (
    <div>
      <div
        className="lg:h-[110vh] lg:fixed lg:bg-[#F7F7F7]"
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
              <Image src="/logo.png" alt="" height={10} width={170} />
            </Link>
          </div>

          <div className="lg:hidden block">
            <Dropdown menu={{ items: menuItems }}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <RxHamburgerMenu size={20} />
                </Space>
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
                        item.path === pathname ? "#89a809" : "transparent",
                      color: item.path === pathname ? "#fff" : "#222222",
                      alignItems: "center",
                      margin: "auto  0 auto 0",
                      gap: "14px",
                      padding: "7px 14px 7px",
                     
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
