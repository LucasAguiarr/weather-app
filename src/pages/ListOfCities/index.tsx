import React, { useEffect, useState } from 'react';
import { Alert, Keyboard, TouchableWithoutFeedback, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Wrapper, Header, Content, LabelCities } from './styles';

import { getCityByName } from '../../services/Api';
import { ICityProps, loadCity, removeCity, saveCity } from '../../libs/storage';

import { CardListCities } from '../../components/CardListCities';
import { Input } from '../../components/Input';
import { useCities } from '../../hooks/useCities';

export const ListOfCities = () => {
  const { setUserCities } = useCities();
  const navigation = useNavigation();
  const [cityName, setCityName] = useState('');
  const [userCity, setUserCity] = useState<ICityProps[]>([]);
  const [loading, setLoading] = useState(false);

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
    setLoading(true);
    setCityName('');
    const res = await getCityByName(cityName.trim());
    try {
      if (!res) return;
      await saveCity(res);
      setUserCity([...userCity, res]);
    } catch {
      return Alert.alert('Error ao salvar');
    } finally {
      setLoading(false);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Wrapper>
        <Header>
          <Input
            text={'City'}
            placeholder={loading ? 'Loading...' : 'Enter the city name'}
            onSubmit={handleSubmit}
            onChangeText={(text) => setCityName(text)}
            value={cityName}
          />
        </Header>
        <Content>
          {!userCity.length ? (
            <LabelCities>No city registered</LabelCities>
          ) : (
            <LabelCities>Cities</LabelCities>
          )}
          <FlatList
            data={userCity}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
              <CardListCities
                onPress={() => {
                  setUserCities(item);
                  navigation.navigate('Home', item);
                }}
                data={item}
                handleRemove={() => {
                  handleRemove(item);
                }}
              />
            )}
          />
        </Content>
      </Wrapper>
    </TouchableWithoutFeedback>
  );
};
