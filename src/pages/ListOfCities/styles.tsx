import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import { Colors } from '../../styles/Colors';
import { Fonts } from '../../styles/Fonts';

export const styles = StyleSheet.create({
  flatList: {
    flex: 1,
  },
});

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
  margin: 0 20px;
  flex: 1;
`;

export const LabelCities = styled.Text`
  font-size: 28px;
  font-family: ${Fonts.bold};
  color: ${Colors.secondary};
`;
