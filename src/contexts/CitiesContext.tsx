import AppLoading from 'expo-app-loading';
import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { GetLocation } from '../libs/GetLocation';
import { ICityProps } from '../libs/storage';
import { getCityByLatAndLon } from '../services/Api';

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
  
  const changeUserCities = (item:ICityProps) => {
    setUserCities(item)
  }

  return (
    <>
      {!userCities ? (
        <AppLoading />
      ) : (
        <CitiesContext.Provider value={{...userCities,  changeUserCities}}>
          {children}
        </CitiesContext.Provider>
      )}
    </>
  );
};
