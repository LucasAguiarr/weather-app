import AsyncStorage from '@react-native-async-storage/async-storage';

export interface ICityProps {
  base: string;
  clouds: {
    all: number;
  };
  cod: number;
  coord: {
    lat: number;
    lon: number;
  };
  dt: number;
  id: number;
  main: {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  name: string;
  sys: {
    country: string;
    id: number;
    sunrise: number;
    sunset: number;
    type: number;
  };
  timezone: number;
  visibility: number;
  weather: [
    {
      description: string;
      icon: string;
      id: number;
      main: string;
    },
  ];
  wind: {
    deg: number;
    speed: number;
  };
  setUserCities: (item: ICityProps) => void;
}

export interface IStorageCityProps {
  [id: string]: {
    data: ICityProps;
  };
}

export const saveCity = async (city: ICityProps): Promise<void> => {
  try {
    const data = await AsyncStorage.getItem('@weather:cities');
    const onlCities = data ? (JSON.parse(data) as IStorageCityProps) : {};

    const newCity = {
      [city.id]: {
        data: city,
      },
    };

    await AsyncStorage.setItem(
      '@weather:cities',
      JSON.stringify({
        ...newCity,
        ...onlCities,
      }),
    );
  } catch (error) {
    throw new Error(error);
  }
};

export const loadCity = async (): Promise<ICityProps[]> => {
  try {
    const data = await AsyncStorage.getItem('@weather:cities');
    const cities = data ? (JSON.parse(data) as IStorageCityProps) : {};
    const city = Object.keys(cities).map((city) => {
      return { ...cities[city].data };
    });
    return city;
  } catch (error) {
    throw new Error(error);
  }
};

export const removeCity = async (id: string): Promise<void> => {
  try {
    const data = await AsyncStorage.getItem('@weather:cities');
    const cities = data ? (JSON.parse(data) as IStorageCityProps) : {};

    delete cities[id];

    await AsyncStorage.setItem('@weather:cities', JSON.stringify(cities));
  } catch (error) {
    throw new Error(error);
  }
};
