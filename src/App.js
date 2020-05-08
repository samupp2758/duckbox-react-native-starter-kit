import React, { Component } from 'react';
import {Animated } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator, } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SplashScreen from './screens/splash';
import HomeScreen from './screens/main';
import ErrorScreen from './screens/error';
import ConfigScreen from './screens/config';


const config = {
  animation: 'timing',
  config: {
    duration:100
  },
};

const forFade = ({ current, closing }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});


const Stack= createStackNavigator();

function Tabb() {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      headerMode="none"
    >
    <Stack.Screen
      name="Config"
      component={ConfigScreen}
      options={{
        transitionSpec: {
          open: config,
          close: config,
        },
        cardStyleInterpolator: forFade,
      }}
    />
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{
          transitionSpec: {
          open: config,
          close: config,
        },
        cardStyleInterpolator: forFade,
          gestureEnabled: false,
          title: 'My profile',
        }}
        navigationOptions={{ header: null }}
        tabBarVisible={false}
      />
 <Stack.Screen
        name="Error"
        component={ErrorScreen}
        options={{
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          transitionSpec: {
            open: config,
            close: config,
          },
          cardStyleInterpolator: forFade,
          gestureEnabled: false,
        }}
        navigationOptions={{ header: null }}
      />
    </Stack.Navigator>
  );
}


function Root() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      headerMode="none"
    >
      <Stack.Screen
        name="Home"
        component={Tabb}
        options={{
          transitionSpec: {
            open: config,
            close: config,
          },
          cardStyleInterpolator: forFade,
          gestureEnabled: false,
        }}
      />
      
    </Stack.Navigator>
  );
}




export default function App() {
  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  );
}