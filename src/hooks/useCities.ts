import { useContext } from "react";
import { CitiesContext } from "../contexts/CitiesContext";

export const useCities = () => {
  return useContext(CitiesContext);
};
