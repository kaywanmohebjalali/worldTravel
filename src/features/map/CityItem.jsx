import { Link, useNavigate } from "react-router-dom";
import { useCities } from "./citiesProvider";
import { formatDate } from "../../fileJs";
import { deleteCity } from "../../services/apiCities";
import {loadingAction} from './citiesReducer'
import Spinner from "../../ui/Spinner";
const CityItem = (prop) => {
  const { state, dispatch } = useCities();
  const { city, emoji, date, id, position } = prop.city;
  async function handlerDelete() {
    dispatch(loadingAction(true))
    await deleteCity(dispatch, id);
    dispatch(loadingAction(false))
  }
  const navigate = useNavigate();
  function handlerEdit() {
    navigate(`/app/form?lat=${position?.lat}&lng=${position?.lng}`);
  }

  if (state?.error)
  return (
    <p className=" text-2xl text-red-500 bg-gray-800 h-[100vh] flex justify-center items-center">
      {state?.error}
    </p>
  );

  return (
    <div className="">
      {state?.loading?<Spinner/>:""}
      <div className="h-[10rem] sm:h-[5rem] bg-green-500 rounded-md ps-1">
        <li
          className={`w-full h-[10rem] flex flex-col sm:flex-row items-center justify-between sm:h-[5rem] text-white  bg-gray-600 rounded-md  sm:p-3  ${
            state.currentCity?.city == city ? "border-2 border-green-500" : ""
          }`}
        >
          <Link
            className="h-full flex sm:items-center w-[90%]"
            to={`${id}?lat=${position?.lat}&lng=${position?.lng}`}
          >
            <div className=" w-[100%] flex flex-col sm:flex-row justify-evenly sm:items-center sm:justify-between gap-x-1 sm:gap-x-3 md:gap-x-6  ">
              <div className="text-[1rem] sm:text-[0.9rem] md:text-[1rem] flex flex-col sm:flex-row   items-center gap-x-5 ">
                <span className="text-xl md:text-[1.4rem]">{emoji}</span>
                <h3 className="mt-1 font-bold">{city}</h3>
              </div>
              <time className="text-[0.9rem] sm:text-[0.9rem] md:text-[1rem]  ">{formatDate(date)}</time>
            </div>
          </Link>
          <div className="w-full sm:w-auto h-[4rem] flex sm:flex-col items-center justify-evenly sm:justify-center gap-8 sm:gap-1  ms-2 ">
            <span
              onClick={handlerDelete}
              className="rounded-full bg-black cursor-pointer  px-[6px] hover:bg-orange-600  sm:h-[40%]"
            >
              &times;
            </span>
            <span onClick={handlerEdit} className="cursor-pointer ">
              <span title="edit city" className="!border-b-none">
                ✏️
              </span>
            </span>
          </div>
        </li>
      </div>
    </div>
  );
};

export default CityItem;
