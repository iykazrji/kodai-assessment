import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import HomeScreen from "../screens/home-screen";
import DefaultScreen from "screens/default/default-screen";
import TabBar from "./tab-bar";

const config = Platform.select({
  web: { headerMode: "screen" },
  default: {
    cardStyle: {
      headerMode: "screen",
      backgroundColor: "#15161A"
    }
  }
});

// Home
const HomeStack = createStackNavigator(
  {
    Home: HomeScreen
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: "Home"
};

HomeStack.path = "";

// Create Task
const CreateTaskStack = createStackNavigator(
  {
    CreateTask: DefaultScreen
  },
  config
);
CreateTaskStack.navigationOptions = {
  tabBarLabel: "Create Task"
};

CreateTaskStack.path = "";

// Tasks
const TasksStack = createStackNavigator(
  {
    Task: DefaultScreen
  },
  config
);
TasksStack.navigationOptions = {
  tabBarLabel: "Tasks"
};

TasksStack.path = "";

// Settings
const SettingsStack = createStackNavigator(
  {
    Settings: DefaultScreen
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: "Settings"
};

SettingsStack.path = "";

const tabNavigator = createBottomTabNavigator(
  {
    HomeStack,
    CreateTaskStack,
    TasksStack,
    SettingsStack
  },
  {
    tabBarComponent: TabBar
  }
);

tabNavigator.path = "";

export default tabNavigator;
