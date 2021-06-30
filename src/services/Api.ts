import axios from 'axios';
import { ICityProps } from '../libs/storage';

const api = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/weather',
});
const KEY = 'e6ddc4e167ad3e262684fc755c9d392a';

export const getCityByName = async (
  cityName: string,
): Promise<ICityProps | undefined> => {
  console.log('nome', cityName);
  const url = `?q=${cityName}&units=metric&appid=${KEY}`;
  const res = await api.get(url);
  if (!res) {
    throw new Error('Error');
  }

  return res.data;
};

export const getCityByLatAndLon = async (
  latitude: number,
  longitude: number,
): Promise<ICityProps | undefined> => {
  const url = `?lat=${latitude}&lon=${longitude}&units=metric&appid=${KEY}`;
  const res = await api.get(url);
  if (!res) {
    throw new Error('Error');
  }

  return res.data;
};
