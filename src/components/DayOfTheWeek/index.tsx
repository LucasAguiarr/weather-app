import React from 'react';
import { Container, WrapperDay, Text, Degrees } from './styles';

interface IDayProps {
  text: string;
  degrees: string;
}
export const DayOfTheWeek = () => {
  const daysOfTheWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const Day = ({ text, degrees }: IDayProps) => {
    return (
      <WrapperDay>
        <Text>{text}</Text>
        <Degrees>{degrees}</Degrees>
      </WrapperDay>
    );
  };

  return (
    <Container>
      {daysOfTheWeek.map((day: string, index) => (
        <Day key={index} text={day} degrees={'-4°'} />
      ))}
    </Container>
  );
};
