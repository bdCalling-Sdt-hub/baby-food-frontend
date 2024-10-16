import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className=" md:grid grid-cols-12 items-center ">
        <div
          className="md:col-span-6 h-[calc(90vh)] w-full hidden md:block "
          style={{
            backgroundImage: `url('/baby-banana.png')`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
        ></div>

        <div className="md:col-span-6">{children}</div>
      </div>
    </div>
  );
};

export default layout;
