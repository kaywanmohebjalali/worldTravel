const CountryItem = (prop) => {
  const { country} = prop;
 
  return (
   <div>
    <div className="h-[5rem] bg-orange-500 rounded-md ps-1 ">

    <li className="h-[5rem] text-white py-3   bg-gray-600 rounded-md flex flex-col items-center justify-between  gap-3  ">
     <span className="w-full overflow-auto text-sm md:text-[1rem]">{country.emoji}</span>
     <span className="text-country text-sm md:text-[1rem]">{country.country}</span>
    </li>
    </div>
   </div>
 
  );
};

export default CountryItem;