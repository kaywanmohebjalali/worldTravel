import Map from "../features/map/Map";
import Sidebar from "../ui/Sidebar";

const AppLayout = () => {
  return (
    <div className="flex">
      <div className="w-[46%] sm:w-[45%]">
        <Sidebar />
      </div>

      <div className="w-[54%] sm:w-[55%]">
        <Map />
      </div>
    </div>
  );
};

export default AppLayout;
