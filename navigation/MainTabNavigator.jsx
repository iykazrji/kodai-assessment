import React from "react";
import PropTypes from "prop-types";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import LinksScreen from "../screens/LinksScreen";
import SettingsScreen from "../screens/SettingsScreen";

const config = Platform.select({
  web: { headerMode: "screen" },
  default: {
    cardStyle: {
      headerMode: "screen",
      backgroundColor: "#15161A"
    }
  }
});

const TabBarIconWrapper = ({ focused }) => (
  <TabBarIcon
    focused={focused}
    name={Platform.OS === "ios" ? "ios-link" : "md-link"}
  />
);

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarIcon: TabBarIconWrapper
};

HomeStack.path = "";

const LinksStack = createStackNavigator(
  {
    Links: LinksScreen
  },
  config
);

TabBarIconWrapper.propTypes = {
  focused: PropTypes.bool.isRequired
};

LinksStack.navigationOptions = {
  propTypes: {},
  tabBarLabel: "Links",
  tabBarIcon: TabBarIcon
};

LinksStack.path = "";

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: "Settings",
  tabBarIcon: TabBarIconWrapper
};

SettingsStack.path = "";

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack
});

tabNavigator.path = "";

export default tabNavigator;
