const DashboardNavbar = () => {
  return (
    <div className="bg-footer text-white flex justify-end items-center">
      <div className="flex items-center">
        <img src="/person.png" alt="" className="w-14 h-14 rounded-full" />
        <div>
          <p className="p-3 h-3 font-medium ">Admin</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
