
import Image from "next/image";
import Link from "next/link";
import React from "react";

const DashboardNavbar = () => {
  return (
    <div
      className=" "
      style={{
        padding: 0,
        display: "flex",
        justifyContent: "space-between",
        paddingRight: "60px",
        paddingLeft: "270px",
        alignItems: "center",
      }}
    >
      <div></div>
      <Link href="/profile">
        <div className=" flex items-center  ">
          <Image
            src="/person.png"
            alt=""
            height={60}
            width={50}
            style={{
              borderRadius: "100%",
              border: "2px solid  #89a809",
              height: "50px",
              width: "50px",
            }}
          />
          <div>
            <p className="p-3 h-3 font-medium ">Mithila </p>
            <p className="p-3 text-[14px] font-normal"> Admin </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default DashboardNavbar;
