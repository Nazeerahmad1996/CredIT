import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from '../Screens/Login'
import SignUp from '../Screens/SignUp'


//Before Login Navigator
const AuthStack = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      headerShown: false
    }
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      headerShown: false
    }
  },
});


export default createAppContainer(
  createSwitchNavigator(
    {
      App: AuthStack,
    }
  )
);