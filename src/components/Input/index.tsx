import React from 'react';
import { TextInputProps } from 'react-native';
import { Wrapper, InputCity } from './styles';

import { Colors } from '../../styles/Colors';

interface IInputProps extends TextInputProps{
  text: string;
  placeholder?: string;
  onSubmit?: () => void;
}
export const Input = ({ text, placeholder, onSubmit, ...props }: IInputProps) => {
  return (
      <Wrapper>
        <InputCity
          autoFocus
          placeholder={placeholder}
          placeholderTextColor={Colors.secondary}
          onSubmitEditing={onSubmit}
          {...props}
        />
      </Wrapper>
  );
};
