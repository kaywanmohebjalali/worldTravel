import { useNavigate, useParams } from "react-router-dom";
import { useCities } from "./citiesProvider";
import Spinner from "../../ui/Spinner";
import { formatDate } from "../../fileJs";

import BackButton from "../../ui/BackButton";
import { useEffect } from "react";
import Logo from "../../ui/Logo";
const City = () => {
  const navigator= useNavigate()
  const { id } = useParams();
  const { state} = useCities();
let desiredCity= state?.cities.filter(city=>city.id==id)[0]||false

useEffect(()=>{
  if(!desiredCity){
    navigator('/app/cities')
  
  }
},[desiredCity,navigator])


if(!desiredCity)return<div className="bg-gray-800 w-full h-[100vh] flex justify-center items-center"><Logo/></div>


  const { emoji, note, city, date } = desiredCity
  
  if (state.loading)
    return (
      <div

       className="flex justify-center ">
        <div className=" bg-gray-800 h-[100vh] flex flex-col items-center">
          <Spinner colorText={"text-white"}>Loading...</Spinner>
        </div>
      </div>
    );

  if (state?.error)
    return (
      <p className=" text-2xl text-red-500 bg-gray-800 h-[100vh] flex justify-center items-center">
        {state?.error}
      </p>
    );

  return (
  
      <div 
      style={{ gridTemplateColumns: "repeat(auto-fit, minmax(100px, 600px))" }}

      className="grid gap-4  items-start justify-center text-start landscape:px-2">
        <section

        className="w-full  bg-gray-600 p-2 sm:p-4 mx-auto rounded-sm flex flex-col items-start gap-4">
          <div className="">
            <h6 className="text-gray-400 text-[0.8rem] sm:text-[1rem] md:text-[1.1rem] text-start">CITY</h6>
            <h1 className="text-white mt-1 text-[0.8rem] sm:text-[1.1rem] md:text-[1.3rem]">
             
              <span className="me-1 ">{emoji}</span> {city}
            </h1>
          </div>

          <div className="">
            <h6 className="text-gray-400 text-[0.8rem] sm:text-[1rem]  text-start">
              YOU WENT TO {city} ON
            </h6>
            <h1 className="text-white mt-1 text-[0.8rem] sm:text-[1.1rem] md:text-[1.3rem] text-start">
              {date && formatDate(date)}
            </h1>
          </div>

          <div className="w-full">
            <h6 className="text-gray-400 text-[0.8rem] sm:text-[1rem]   text-start">YOUR NOTE</h6>
            <h1 className="text-white mt-1 text-[0.8rem] sm:text-[1.1rem] md:text-[1.3rem] w-full break-words text-start">{note}</h1>
          </div>

          <div className="">
            <h6 className="text-gray-400 text-[0.8rem] sm:text-[1rem]   text-start">LEARN MORE</h6>
            <a
              className="text-white mt-1 text-[0.8rem] sm:text-[1rem] lg:text-[1.2rem] visited:text-yellow-300 break-words text-start"
              href={`https://en.wikipedia.org/wiki/${city}`}
            >
              check out {city} on Wikipedia &rarr;
            </a>
          </div>

          <div className="flex justify-between items-center w-full">
            <BackButton />
          </div>
        </section>
      </div>
    
  );
};

export default City;
