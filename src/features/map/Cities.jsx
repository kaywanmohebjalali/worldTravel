import CityItem from "./CityItem";
import Spinner from "../../ui/Spinner";
import Message from "../../ui/Message";
import { useCities } from "./citiesProvider";
import { useEffect } from "react";
import { getCities } from "../../services/apiCities";

const Cities = () => {
  const { state, dispatch } = useCities();
  useEffect(()=>{
 if(state?.cities?.length<1){
  getCities(dispatch)
 }
},[dispatch,state?.cities])



  if (state?.loading)
    return (
    <Spinner/>
    );

  if (state.error)
    return (
      <p className=" text-2xl text-red-500 bg-gray-800 h-[100vh] flex justify-center items-center">
        {state.error}
      </p>
    );

  if (!state.cities.length)
    return <Message>Add your first city by clicking on a city the map</Message>;
  return (
    <div className="flex justify-center ">
      <ul
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(100px, 600px))" }}
        className="grid gap-4  mx-auto px-2"
      >
        {state.cities.length>0 &&
          state.cities?.map((city) => <CityItem city={city} key={city.id} />)
          }
      </ul>
    </div>
  );
};

export default Cities;
