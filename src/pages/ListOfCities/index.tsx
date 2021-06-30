import React, { useEffect, useState } from 'react';
import { Alert, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Wrapper, Header, Content, styles, LabelCities } from './styles';

import { getCityByName } from '../../services/Api';
import { ICityProps, loadCity, removeCity, saveCity } from '../../libs/storage';

import { CardListCities } from '../../components/CardListCities';
import { Input } from '../../components/Input';
import { useCities } from '../../hooks/useCities';

export const ListOfCities = () => {
  const {changeUserCities} = useCities();
  const navigation = useNavigation();
  const [cityName, setCityName] = useState('');
  const [userCity, setUserCity] = useState<ICityProps[]>([]);

  useEffect(() => {
    const loadStorageData = async () => {
      const citiesStorage = await loadCity();
      setUserCity(citiesStorage);
    };
    loadStorageData();
  }, []);

  const handleRemove = (city: ICityProps) => {
    Alert.alert('Remover', `Deseja remover ${city.name} da lista?`, [
      {
        text: 'Não 🙏🏻',
        style: 'cancel',
      },
      {
        text: 'Sim 😢',
        onPress: async () => {
          try {
            await removeCity(String(city.id));
            setUserCity((oldData) =>
              oldData.filter((item) => item.id !== city.id),
            );
          } catch (error) {
            Alert.alert('Não foi possivel remover! 😢');
          }
        },
      },
    ]);
  };

  const handleSubmit = async () => {
    const res = await getCityByName(cityName.trim());
    try {
      if (!res) return;
      await saveCity(res);
      setUserCity([...userCity, res])
    } catch {
      return Alert.alert('Error ao salvar');
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Wrapper>
        <Header>
          <Input
            text={'City'}
            placeholder={'Enter the city name'}
            onSubmit={handleSubmit}
            onChangeText={(text) => setCityName(text)}
            value={cityName}
          />
        </Header>
        <Content>
          {!userCity.length ? (
            <LabelCities>Nenhuma cidade cadastrada</LabelCities>
          ) : (
            <LabelCities>Cities</LabelCities>
          )}
          <FlatList
            data={userCity}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
              <CardListCities
                onPress={() => {
                  changeUserCities(item)
                  navigation.navigate('Home', item)}}
                data={item}
                handleRemove={() => {
                  handleRemove(item);
                }}
              />
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.flatList}
          />
        </Content>
      </Wrapper>
    </TouchableWithoutFeedback>
  );
};
