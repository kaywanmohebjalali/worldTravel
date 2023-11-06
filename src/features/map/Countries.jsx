import CountryItem from "./CountryItem";
import Spinner from "../../ui/Sidebar";
import Message from "../../ui/Message";
import { useCities } from "./citiesProvider";

const Countries = () => {
  const { state } = useCities([]);

  const countries = state.cities.reduce((pre, cur) => {
    if (!pre.map((el) => el.country).includes(cur.country))
      return [...pre, { country: cur.country, emoji: cur.emoji }];
    else return pre;
  }, []);

  
  if (state?.loading)
    return (
      <div className=" bg-gray-800 h-[100vh] flex justify-center items-start">
        <Spinner colorText={"text-white"}>Loading...</Spinner>
      </div>
    );

    if (state?.error)
    return (
      <p className=" text-2xl text-red-500 bg-gray-800 h-[100vh] flex justify-center items-center">
        {state?.error}
      </p>
    );

  if (!state.cities.length)
    return <Message>Add your first city by clicking on a city the map</Message>;
  return (
    <ul
    style={{ gridTemplateColumns: "repeat(auto-fit, minmax(100px, 600px))" }}
    className="grid gap-4  justify-center"
    >
      {countries &&
        countries.map((country, index) => (
          <CountryItem country={country} key={index} />
        ))}
    </ul>
  );
};

export default Countries;
