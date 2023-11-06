/* eslint-disable react-refresh/only-export-components */
import { useContext, useMemo, useReducer } from "react";
import { reducer } from "./citiesReducer";
import { createContext } from "react";

const CitiesContext = createContext();

const initialState = {
  cities: [],
  currentCity: [],
  loading: false,
  error: null,
};

const CitiesProvider = (prop) => {
  const { children } = prop;
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  return (
    <CitiesContext.Provider value={value}>{children}</CitiesContext.Provider>
  );
};

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("please call useCities outside  CitiesProvider");
  return context;
}

export { CitiesProvider, useCities };
