import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import React, { useState } from "react";
import Styled from "styled-components/native";
import PropTypes from "prop-types";
import { Platform, StatusBar } from "react-native";
import AppNavigator from "./navigation/AppNavigator";

const AppContainer = Styled.View`
  flex: 1;
  background-color: #15161A;
  color: #FFFFFF;
`;

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  const { skipLoadingScreen } = props;

  if (!isLoadingComplete && !skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  }
  return (
    <AppContainer>
      {Platform.OS === "ios" && <StatusBar barStyle="light-content" />}
      <AppNavigator />
    </AppContainer>
  );
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      // Add what ever images we'd want to Load here...
    ]),
    Font.loadAsync({
      "space-mono": require("./assets/fonts/SpaceMono-Regular.ttf"),
      "montserrat-regular": require("./assets/fonts/Montserrat-Regular.ttf"),
      "montserrat-medium": require("./assets/fonts/Montserrat-Medium.ttf"),
      "montserrat-bold": require("./assets/fonts/Montserrat-Bold.ttf"),
      "montserrat-black": require("./assets/fonts/Montserrat-Black.ttf")
    })
  ]);
}

function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

App.propTypes = {
  skipLoadingScreen: PropTypes.bool
};

App.defaultProps = {
  skipLoadingScreen: false
};
