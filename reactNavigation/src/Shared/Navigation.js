import React from 'react';
import {Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../Features/Home/Home';
import About from '../Features/About/About';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    //untuk menentukan main router supaya default yg muncul gitu
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={Home}
        options={{
          headerShown: true,
          title: 'Anu',
          headerTintColor: 'red',
        }}
      />
      <Stack.Screen
        name="AboutScreen"
        component={About}
        options={{
          headerShown: true,
          title: 'ini header',
          headerTintColor: 'red',
          headerRight: () => {
            return (
              <TouchableOpacity
                onPress={() => props.navigation.navigate('HomeScreen')}>
                <Text>ini ikon tambahan</Text>
              </TouchableOpacity>
            );
          },
        }}
      />
    </Stack.Navigator>
  );
}
