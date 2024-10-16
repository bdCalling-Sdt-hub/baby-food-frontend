const DashboardNavbar = () => {
  return (
    <div className="bg-footer h-16 px-4 text-white flex justify-end items-center">
      <div className="flex items-center gap-4">
        <img src="/person.png" alt="" className="size-6 rounded-full" />
        <div>
          <p className="font-medium ">Admin</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
