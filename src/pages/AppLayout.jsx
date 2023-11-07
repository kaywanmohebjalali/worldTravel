import Map from "../features/map/Map";
import Sidebar from "../ui/Sidebar";

const AppLayout = () => {
  return (
    <div className="flex">
      <div className="w-[50%] sm:w-[45%]">
        <Sidebar />
      </div>

      <div className="w-[50%] sm:w-[55%]">
        <Map />
      </div>
    </div>
  );
};

export default AppLayout;
