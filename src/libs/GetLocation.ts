import * as Location from 'expo-location';
import { LocationObject } from 'expo-location';


export const GetLocation = async (): Promise<LocationObject> => {
  let { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted') {
    throw new Error('Permission to access location was denied');
  }
  return await Location.getCurrentPositionAsync({});
};
