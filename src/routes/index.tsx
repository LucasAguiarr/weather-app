import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { Home } from '../pages/Home';
import { ListOfCities } from '../pages/ListOfCities';

import { Colors } from '../styles/Colors';

const Tab = createBottomTabNavigator();

export const Routes = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle={'light-content'} backgroundColor={Colors.primary} />
      <Tab.Navigator
        initialRouteName={'Home'}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: any;

            if (route.name === 'Home') {
              iconName = focused ? 'home-outline' : 'home';
            } else if (route.name === 'List') {
              iconName = focused ? 'list-outline' : 'list-sharp';
            }

            return <Ionicons name={iconName!} size={size} color={color} />;
          },
          tabBarLabel: ({ color }) => {
            color = 'transparent';
            return;
          },
        })}
        tabBarOptions={{
          activeTintColor: Colors.purple,
          inactiveTintColor: Colors.secondary,
          style: {
            backgroundColor: Colors.primary,
            borderTopColor: 'transparent',
          },
        }}>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="List" component={ListOfCities} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
