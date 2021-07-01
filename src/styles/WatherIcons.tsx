import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface IWeatherIconsProps {
  description: string;
  size?: number | undefined;
  color?: string | undefined;
}
export const WeatherIcons = ({
  description,
  size = undefined,
  color = undefined,
}: IWeatherIconsProps) => {
  let iconName: any = '';
  switch (description) {
    case 'clear sky':
      iconName = 'weather-sunny';
      break;
    case 'few clouds':
      iconName = 'weather-partly-cloudy';
      break;
    case 'scattered clouds':
      iconName = 'weather-cloudy';
      break;
    case 'broken clouds':
      iconName = 'weather-fog';
      break;
    case 'shower rain':
      iconName = 'weather-pouring';
      break;
    case 'rain':
      iconName = 'weather-hail';
      break;
    case 'thunderstorm':
      iconName = 'weather-lightning';
      break;
    case 'snow':
      iconName = 'weather-snowy';
      break;
    case 'mist':
      iconName = 'weather-tornado';
      break;
  }
  return (
    <MaterialCommunityIcons
      name={iconName}
      size={size ? size : 24}
      color={color ? color : 'black'}
    />
  );
};
