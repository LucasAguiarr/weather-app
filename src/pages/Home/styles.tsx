import styled from 'styled-components/native';
import { Colors } from '../../styles/Colors';
import { Fonts } from '../../styles/Fonts';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  background: ${Colors.primary};
`;
export const Header = styled.View`
  flex: 1;
  width: 100%;
  height: 20%;
  align-items: center;
  justify-content: space-evenly;
`;

export const CityButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const CityName = styled.Text`
  font-size: 24px;
  font-family: ${Fonts.bold};
  color: ${Colors.secondary};
  margin-left: 8px;
  margin-right: 16px;
`;

export const Day = styled.Text`
  font-size: 18px;
  font-family: ${Fonts.regular};
  color: ${Colors.secondary};
`;

export const Content = styled.View`
  flex: 3;
  align-items: center;
  justify-content: space-around;
`;

export const Degrees = styled.TouchableOpacity`

`;

export const DegreesText = styled.Text`
  font-size: 100px;
  font-family: ${Fonts.bold};
  color: ${Colors.secondary};
`;

export const NextDayWrapper = styled.View`
  width: 100%;
  height: 20%;
  justify-content: space-evenly;
  align-items: center;
`;

export const WrapperRow = styled.View`
  flex-direction: row;
`;

export const NextDayDegrees = styled.Text`
  font-size: 30px;
  margin-left: 12px;
  font-family: ${Fonts.regular};
  color: ${Colors.secondary};
`;

export const Footer = styled.View`
  flex: 1;
  width: 100%;
`;
