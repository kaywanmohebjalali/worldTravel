import { useEffect, useRef, useState } from "react";
import Button from "../ui/Button";
import Spinner from "../ui/Spinner";
import Message from "../ui/Message";
import BackButton from "./BackButton";
import { useGetData } from "../Hooks/useGetData";
import { useUrlPosition } from "../Hooks/useUrlPosition";
import { convertToEmoji, formatDate } from "../fileJs";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useCities } from "../features/map/citiesProvider";
import { useNavigate } from "react-router-dom";
import { createCity, updateCity } from "../services/apiCities";
import { loadingAction } from "../features/map/citiesReducer.js";

const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";

const Form = () => {
  const [flagUpdate, setFlagUpdate] = useState(false);
  const [location, setLocation] = useState({});
  const [isloading, setIsLoading] = useState(false);
  const [iserror, setIsError] = useState(null);
  const [date, setDate] = useState(new Date());
  const cityElem = useRef("");
  const countryElem = useRef("");
  const noteElem = useRef("");
  const whenElem = useRef("");
  const { state, dispatch } = useCities();
  const [lat, lng] = useUrlPosition();
  const navigate = useNavigate();
  let URL = `${BASE_URL}?latitude=${lat}&longitude=${lng}`;
  useGetData(URL, setLocation, setIsLoading, setIsError);

  const exists = state.cities.find(
    (city) =>
      city.city == location?.city && city.countryName == location?.country
  );
  useEffect(() => {
 


    if (cityElem.current) cityElem.current.value = location?.city ?? "";
    if (countryElem.current)
      countryElem.current.value = location?.countryName ?? "";
    if (whenElem.current) whenElem.current.value = formatDate(new Date());
    if (noteElem.current) noteElem.current.value = exists?.note ?? "";
  });
  async function handlerSubmit(e) {
    e.preventDefault();
    if (!cityElem.current.value || !date) return;
    const newCity = {
      city: cityElem.current.value,
      country: countryElem.current.value,
      emoji: convertToEmoji(location?.countryCode ?? ""),
      date: exists ? formatDate(whenElem.current.value) : formatDate(date),
      note: noteElem.current.value,
      position: { lat, lng },
    };
    if (exists) {
      if (newCity.note == exists.note && newCity.date == exists.date) {
        setFlagUpdate(true);
        setTimeout(() => {
          setFlagUpdate(false);
        }, 2000);
      } else {
        dispatch(loadingAction(true));
        await updateCity(dispatch, newCity, exists.id);
        dispatch(loadingAction(false));
      }
    } else {
      await createCity(dispatch, newCity);
      navigate("/app/cities");
    }
  }

  if (state?.error)
    return (
      <p className=" text-2xl text-red-500 bg-gray-800 h-[100vh] flex justify-center items-center">
        {state?.error}
      </p>
    );

  if (!lat && !lng)
    return <Message>Click on a point on the map to start</Message>;
  if (location?.countryName === "")
    return (
      <Message>
        There is no city here. Please click on another point on the map{" "}
      </Message>
    );

  return (
    <>
      {state.loading ? <Spinner /> : ""}
      <form
        onSubmit={handlerSubmit}
        action=""
        className={`${
          state.loading ? "opacity-60" : ""
        } md:w-[90%] bg-gray-700 rounded-sm py-2 sm-py-4 px-2 sm:px-6 mx-auto `}
      >
        <div className="flex flex-col justify-start ">
          <label htmlFor="country" className="w-full text-start text-[0.8rem] sm:text-[1rem]">
            Country name{" "}
          </label>
          <div className=" relative mt-1 ring-indigo-400 focus:ring-4  focus:font-bold bg-slate-200  rounded-sm">
            <input
              disabled={true}
              id="country"
              ref={countryElem}
              defaultValue={location?.countryName ?? ""}
              type="text"
              className="w-full  bg-slate-200 rounded-sm p-1 sm:p-2 text-black outline-none ring-indigo-400 focus:ring-4  focus:font-bold"
            />
            <span className=" text-black absolute top-[15%] right-3 h-full ">
              {convertToEmoji(location?.countryCode ?? "")}
            </span>
          </div>
        </div>

        <div className="flex flex-col justify-start my-6 ">
          <label htmlFor="city" className="w-full text-start text-[0.8rem] sm:text-[1rem]">
            City name{" "}
          </label>
          <div className="relative mt-1 ring-indigo-400 focus:ring-4  focus:font-bold bg-slate-200  rounded-sm">
            <input
              disabled={true}
              id="city"
              ref={cityElem}
              defaultValue={location?.city ?? ""}
              type="text"
              className="w-full  bg-slate-200 rounded-sm p-1 sm:p-2 text-black outline-none ring-indigo-400 focus:ring-4  focus:font-bold"
            />
          </div>
        </div>

        <div className="flex flex-col justify-start my-6">
          <label htmlFor="time" className="w-full text-start mb-1 text-[0.8rem] sm:text-[1rem]">
            When did you go to {location?.city ?? ""}?{" "}
          </label>
          <DatePicker
            ref={whenElem}
            className="w-full bg-slate-200 rounded-m p-1 sm:p-2 text-black outline-none ring-indigo-400 focus:ring-4  focus:font-bold"
            id="time"
            selected={date}
            onChange={(date) => setDate(date)}
            dateFormat="dd/mm/yyyy"
          />
        </div>

        <div className="flex flex-col justify-start my-6">
          <label htmlFor="note" className="w-full text-start mb-1 text-[0.8rem] sm:text-[1rem]">
            note about your trip to
          </label>
          <textarea
            ref={noteElem}
            id="note"
            type="text"
            className=" bg-slate-200 rounded-sm p-1 sm:p-2 text-black  outline-none ring-indigo-400 focus:ring-4 focus:font-bold"
          />
        </div>

        <div className="flex justify-between items-center px-1">
          <Button style={"text-[0.9rem] sm:text-[1rem] w-auto px-1 sm:px-2  bg-orange-500"}>
            {exists ? "Update" : "Add"}
          </Button>
          <BackButton />
        </div>
      </form>
      <div className="mt-10 flex justify-center">
        {isloading ? (
          <Spinner>loading...</Spinner>
        ) : iserror ? (
          iserror
        ) : state.error ? (
          state.error
        ) : (
          ""
        )}
        {flagUpdate ? (
          <Message>The information has not changed, so please update</Message>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Form;
