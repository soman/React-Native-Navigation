import React from "react";
import { View, Text } from "react-native";
import HomeScreen from "./../screens/HomeScreen";
import AboutScreen from "./../screens/AboutScreen";
import SettingsScreen from "./../screens/SettingsScreen";
import ProfileScreen from "./../screens/ProfileScreen";
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from "react-navigation";

export default class Routes extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    About: AboutScreen
  }
);

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
    Profile: ProfileScreen
  }
);

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    Settings: SettingsStack
  }
);

const AppContainer = createAppContainer(TabNavigator);
