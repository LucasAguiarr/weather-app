import React from 'react';
import { Animated } from 'react-native';
import { RectButtonProps, Swipeable } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import {
  ViewAnimated,
  Button,
  ButtonRemove,
  Details,
  DegreesText,
  CityName,
} from './styles';
import { Colors } from '../../styles/Colors';
import { WeatherIcons } from '../../styles/WatherIcons';
import { ICityProps } from '../../libs/storage';

export interface ICardProps extends RectButtonProps {
  data: ICityProps;
  handleRemove: () => void;
  onPress: () => void;
}

export const CardListCities: React.FC<ICardProps> = ({
  data,
  handleRemove,
  onPress,
  ...rest
}) => {
  console.log(data);
  return (
    <Swipeable
      overshootRight={false}
      renderRightActions={() => (
        <ViewAnimated as={Animated.View}>
          <ButtonRemove onPress={handleRemove} activeOpacity={0}>
            <Feather name={'trash'} size={32} color={Colors.white} />
          </ButtonRemove>
        </ViewAnimated>
      )}>
      <Button {...rest} onPress={onPress}>
        <CityName>{data.name}</CityName>
        <Details>
          <WeatherIcons description={data.weather[0].description} />
          <DegreesText>{data.main.temp}°</DegreesText>
        </Details>
      </Button>
    </Swipeable>
  );
};
