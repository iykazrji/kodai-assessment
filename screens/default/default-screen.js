import React from "react";
import { TextLabel } from "components/StyledText";
import { View } from "react-native";
import ScreenHeader from "screens/home-screen/home-screen-header-view"; // Borrowing the homescreen header

const DefaultScreen = () => {
  return (
    <View
      style={{
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
      }}>
      <TextLabel
        style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: 2 }}>
        Nothing to see here
      </TextLabel>
    </View>
  );
};

export default DefaultScreen;

DefaultScreen.navigationOptions = {
  header: <ScreenHeader showNotification={true} />
};
