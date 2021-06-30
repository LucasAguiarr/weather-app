import styled from 'styled-components/native';
import { Colors } from '../../styles/Colors';
import { Fonts } from '../../styles/Fonts';

export const Container = styled.View`
  flex-direction: row;
  width: 90%;
  margin: auto;
  align-items: center;
  justify-content: space-evenly;
`;

export const WrapperDay = styled.View`
  align-items: center;
`;

export const Text = styled.Text`
  font-size: 14px;
  font-family: ${Fonts.regular};
  color: ${Colors.secondary};
  margin-bottom: 4px;
`;

export const Degrees = styled.Text`
  font-size: 18px;
  font-family: ${Fonts.bold};
  color: ${Colors.secondary};
`;
