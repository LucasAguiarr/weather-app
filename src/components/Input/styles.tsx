import React from 'react';
import { TextInput } from 'react-native';
import styled from 'styled-components/native';
import { Colors } from '../../styles/Colors';

export const Wrapper = styled.View`
  margin: 0 20px;
  height: 20%;
  justify-content: center;
`;

export const InputCity = styled(({ ...rest }) => <TextInput {...rest} />)`
  color: ${Colors.white};
  width: 100%;
  height: 40px;
  border: 1px solid ${Colors.secondary};
  border-radius: 5px;
  padding-left: 8px;
  font-size: 18px;
`;
