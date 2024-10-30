import { LucideUsers2 } from "lucide-react";

const DashboardNavbar = () => {
  return (
    <div className="bg-[#bcd49a] h-16 px-4 text-white flex justify-end items-center">
      <div className="flex items-center gap-4">
        <LucideUsers2 />
        <div>
          <p className="font-medium ">Admin</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
