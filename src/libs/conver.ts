export const convertTemperature = (temp: number, type: 'c' | 'f'): number => {
  console.log(temp, type);
  let tempConverted: number = temp * (9 / 5) + 32;
  if (type === 'f') {
    tempConverted = (temp - 32) * (5 / 9);
  }
  return tempConverted;
};
