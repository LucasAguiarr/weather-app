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
import { ICityProps } from '../../libs/storage';
import { convertTemperature } from '../../libs/conver';
import { useCities } from '../../hooks/useCities';

export const Home = () => {
  const {name, main} = useCities();
  const [isCelsius, setIsCelsius] = useState(true);
  const navigation = useNavigation();
  const [temperature, setTemperature] = useState<number>();

  useEffect(() => {
    setTemperature(main.temp)
  },[])

  const handleChangeTemperature = () => {
    setIsCelsius(!isCelsius);
    let type: 'c' | 'f' = 'f';
    if (isCelsius) {
      type = 'c';
    }
    const newTemperature = convertTemperature(temperature!, type);
    setTemperature(newTemperature);
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
        <MaterialCommunityIcons
          name={'weather-cloudy'}
          size={100}
          color={Colors.secondary}
        />
        <Degrees activeOpacity={0.7} onPress={handleChangeTemperature}>
          <DegreesText>{temperature}°</DegreesText>
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
