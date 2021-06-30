import React from 'react';
import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import { Colors } from '../../styles/Colors';
import { Fonts } from '../../styles/Fonts';

export const Button = styled(({ ...rest }) => <RectButton {...rest} />)`
  width: 100%;
  background-color: ${Colors.secondary};
  border-radius: 10px;
  margin: auto;
  padding: 25px 10px;
  align-items: center;
  border-radius: 10px;
  flex-direction: row;
  margin: 5px 0;
`;

export const CityName = styled.Text`
  flex: 1;
  font-size: 24px;
  font-family: ${Fonts.regular};
  margin-left: 10px;
  color: ${Colors.primary};
`;
export const Details = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const DegreesText = styled.Text`
  margin-top: 5px;
  font-size: 16px;
  font-family: ${Fonts.regular};
  color: ${Colors.primary};
  margin-left: 8px;
`;

// Swipeble

export const ViewAnimated = styled.View`
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 90%;
  margin: auto 0;
  border-radius: 10px;
  background-color: ${Colors.danger};
`;

export const ButtonRemove = styled(({ ...rest }) => <RectButton {...rest} />)`
  width: 100%;
  justify-content: center;
  align-items: center;
`;
