import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeContainer/HomeScreen';
import GameScreen from './src/screens/GameContainer/GameScreen';
// import LobbyScreen from './screens/LobbyScreen';

const Stack = createStackNavigator();

const screenConf={ headerShown: false }

const Navigation = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={screenConf} 
      />
      <Stack.Screen 
        name="Game" 
        component={GameScreen} 
        options={screenConf}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
