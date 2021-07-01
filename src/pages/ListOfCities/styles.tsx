import styled from 'styled-components/native';
import { Colors } from '../../styles/Colors';
import { Fonts } from '../../styles/Fonts';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  background: ${Colors.primary};
`;

export const Header = styled.View`
  width: 100%;
  height: 20%;
  justify-content: center;
`;

export const Content = styled.View`
  flex: 1;
  margin: 0 20px;
  justify-content: center;
`;

export const LabelCities = styled.Text`
  font-size: 28px;
  font-family: ${Fonts.bold};
  color: ${Colors.secondary};
`;
