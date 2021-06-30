import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const weatherIcons = (description: string) => {
  let iconName:any = '';
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
    default:
      break;
  }
  return <MaterialCommunityIcons name={iconName} size={24} color="black" />;
};
