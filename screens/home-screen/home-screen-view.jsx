import React from "react";
import { ScrollContainer, HomeScreenContainer } from "./home-screen-styles";
import HomeScreenHeader from "./home-screen-header-view";

import CustomFieldComponent from "./custom-field-component";
import KeyFieldComponent from "./key-field-component";
import InfoCardsComponent from "./info-cards-component";

export default function HomeScreen() {
  const keys = ["1XCD", "VDW6", "76XD", "3VVP"];
  return (
    <HomeScreenContainer>
      <ScrollContainer>
        <InfoCardsComponent />
        <KeyFieldComponent keys={keys} />
        <CustomFieldComponent
          fieldTitle="Email"
          fieldType="text"
          secure={false}
          value="danielshaffer@gmail.com"
        />
        <CustomFieldComponent
          fieldTitle="Password"
          fieldType="password"
          secure={true}
          value="password-of-life"
        />
        <CustomFieldComponent
          fieldTitle="Discord"
          fieldType="text"
          secure={false}
          value="danny#7401"
        />
      </ScrollContainer>
    </HomeScreenContainer>
  );
}

HomeScreen.navigationOptions = {
  header: <HomeScreenHeader showNotification={true} />
};
