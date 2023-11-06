import Button from "../../ui/Button";
import { logout } from "../../services/apiAuthentication";
import { NavLink, useNavigate } from "react-router-dom";
import { useGetUser } from "./useGetUser";
import { useState } from "react";
import Spinner from "../../ui/Spinner";
import { FaUserEdit } from "react-icons/fa";


const User = () => {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const {
    user: { user_metadata },
    loading
  } = useGetUser();
  async function handlerLogout() {
    setIsLoading(true);
    await logout();
    setIsLoading(false);

    navigate("/login");
  }
  return (
    <div className="relative w-[90%]  max-w-[600px] h-auto  mx-auto px-3 py-3  bg-gray-700 rounded-md  flex flex-col md:flex-row justify-between items-center gap-3  ">
      {isLoading ||loading ? <Spinner /> : ""}
      <abbr title="profile">
        <NavLink  to='./profile' ><FaUserEdit size='1.5rem' className="absolute top-[-10px] left-[46%]  cursor-pointer hover:text-cyan-400 transition-all duration-300 "/></NavLink>
        </abbr>
      <div className="w-full flex flex-col justify-center md:justify-start  items-center gap-2 sm:flex-row">
        <img
          className="w-[3rem] h-[3rem] rounded-full "
          src={user_metadata?.avatar}
          alt=""
        />
        <p className="text-sm">{user_metadata?.fullName}</p>
      </div>


      <div className="">
        <Button
          click={handlerLogout}
          style={"text-sm w-[4rem] md:text-[12px]  md:w-16 lg:text-sm lg:w-[8rem]  rounded-md !bg-gray-500"}
        >
          logout
        </Button>
      </div>
    </div>
  );
};



export default User;
