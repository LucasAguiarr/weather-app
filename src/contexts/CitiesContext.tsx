import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { GetLocation } from '../libs/GetLocation';
import { ICityProps } from '../libs/storage';
import { getCityByLatAndLon } from '../services/Api';
import Load from '../components/Load';

type TCitiesContextProviderProps = { children: ReactNode };
export const CitiesContext = createContext({} as ICityProps);

export const CitiesContextProvider = ({
  children,
}: TCitiesContextProviderProps) => {
  const [userCities, setUserCities] = useState<ICityProps>();

  useEffect(() => {
    const location = async () => {
      const { coords } = await GetLocation();
      console.log(coords);
      const tempByCoords = await getCityByLatAndLon(
        coords.latitude,
        coords.longitude,
      );
      setUserCities(tempByCoords);
    };

    location();
  }, []);
  

  return (
    <>
      {!userCities ? (
        <Load />
      ) : (
        <CitiesContext.Provider value={{...userCities,  setUserCities}}>
          {children}
        </CitiesContext.Provider>
      )}
    </>
  );
};
