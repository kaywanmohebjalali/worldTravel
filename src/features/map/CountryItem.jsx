const CountryItem = (prop) => {
  const { country} = prop;
 
  return (
   <div>
    <div className="h-[5rem] bg-orange-500 rounded-md ps-1">

    <li className="h-[5rem] text-white  bg-gray-600 rounded-md flex flex-col items-center justify-between  gap-3 p-3 ">
     <span>{country.emoji}</span>
     <span>{country.country}</span>
    </li>
    </div>
   </div>
 
  );
};

export default CountryItem;