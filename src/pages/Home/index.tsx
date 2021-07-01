import React, { useEffect, useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
  Wrapper,
  Header,
  CityButton,
  CityName,
  Day,
  Content,
  Degrees,
  DegreesText,
  NextDayWrapper,
  WrapperRow,
  NextDayDegrees,
  Footer,
} from './styles';
import { Colors } from '../../styles/Colors';

import { DayOfTheWeek } from '../../components/DayOfTheWeek';
import { useCities } from '../../hooks/useCities';
import { convertTemperature } from '../../libs/conver';
import { WeatherIcons } from '../../styles/WatherIcons';

export const Home = () => {
  const cities = useCities();
  const { setUserCities, main, name, weather } = cities;
  const [isCelsius, setIsCelsius] = useState(true);
  const navigation = useNavigation();

  const handleChangeTemperature = () => {
    setIsCelsius(!isCelsius);
    let type: 'c' | 'f' = 'f';
    if (isCelsius) {
      type = 'c';
    }
    const newTemperature = convertTemperature(main.temp, type);
    setUserCities({ ...cities, main: { ...main, temp: newTemperature } });
  };
  return (
    <Wrapper>
      <Header>
        <CityButton onPress={() => navigation.navigate('List')}>
          <CityName>{name}</CityName>
        </CityButton>
        <Day>Today</Day>
      </Header>
      <Content>
        <WeatherIcons
          description={weather[0].description}
          size={100}
          color={Colors.secondary}
        />
        <Degrees activeOpacity={0.7} onPress={handleChangeTemperature}>
          <DegreesText>{main?.temp.toFixed(0)}°</DegreesText>
        </Degrees>

        <NextDayWrapper>
          <Day>Tomorrow</Day>
          <WrapperRow>
            <MaterialCommunityIcons
              name={'weather-cloudy'}
              size={30}
              color={Colors.secondary}
            />
            <NextDayDegrees>-6°</NextDayDegrees>
          </WrapperRow>
        </NextDayWrapper>
      </Content>

      <Footer>
        <DayOfTheWeek />
      </Footer>
    </Wrapper>
  );
};
