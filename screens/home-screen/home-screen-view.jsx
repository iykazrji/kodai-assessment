import React, { Fragment } from "react";
import { Platform, ScrollView, StyleSheet, View } from "react-native";
import Styled from "styled-components/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";

import { TextLabel, TextLabelBold } from "components/StyledText";
import HomeScreenHeader from "./home-screen-header-view";
import CheckMark from "assets/images/checkmark.svg";
import Heart from "assets/images/heart.svg";
import Fire from "assets/images/fire.svg";

const HomeScreenContainer = Styled.View`
  flex: 1;
  width: ${wp("100%")};
`;

const ScrollContainer = Styled.ScrollView.attrs(props => ({
  contentContainerStyle: {
    alignItems: "center",
    paddingTop: hp("5%")
  }
}))``;

const CardContainer = Styled.TouchableOpacity`
  background-color: ${props => (props.bgColor ? props.bgColor : "#654ea3")};
  height: 100%;
  width: ${wp("80%")};
  margin-left: 20;
  border-radius: 20;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  shadow-opacity: 0.3;
    shadow-offset: 0px 8px;
    shadow-color: rgba(10, 10, 10, 0.5);
    shadow-radius: 20;
    elevation: 25;
`;

const IconContainer = Styled.View`
  height: ${hp("3%")};
  width: ${hp("3%")};
  margin-top: 5;
`;

const InfoCardsContainer = Styled.View`
  height: ${hp("23%")};
  width: ${wp("100%")};
  margin-bottom: ${hp("3.5%")};
`;

const InfoCardsWrapper = Styled.ScrollView.attrs(props => ({
  contentContainerStyle: {
    paddingRight: wp("5%")
  },
  showsHorizontalScrollIndicator: false
}))``;

const StyledLinearGradient = Styled(LinearGradient)`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  transform: scale(1.15);
  z-index: 0;
`;
const gradients = {
  bigHead: ["#8E2DE2", "#4A00E0"],
  happiness: ["#96c93d", "#00b09b"],
  ultraViolet: ["#DA4453", "#89216B"]
};

const FieldContainer = Styled.View`
width: ${wp("100%")};
  padding: 0px 15px; 
  margin-top: ${hp("3%")};
`;

const TextFieldContainer = Styled.View`
  height: ${hp("6.5%")};
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 10;
  color: #FFF;
  flex-direction: row;
  margin-top: ${hp("1%")};
  align-items: center;
  padding: 12px 15px;
  justify-content: space-between;
`;

const StyledInput = Styled.TextInput`
  height: 100%;
  color: #FFF;
  font-family: "montserrat-regular";
  border: 1px solid rgba(255, 255, 255, 0.2);
  width: ${wp("15%")};
  text-align: center;
`;

const ControlBtn = Styled.TouchableOpacity`
  border: 1.5px solid #FFF;
  border-radius: 5;
  width: ${wp("15%")};
  padding: 8px 10px;
  opacity: 0.2;
`;

const InfoCardsComponent = () => {
  return (
    <InfoCardsContainer>
      <InfoCardsWrapper horizontal>
        <CardContainer activeOpacity={0.75}>
          <Fragment>
            <StyledLinearGradient
              colors={gradients.bigHead}
              locations={[0.1, 0.8]}
              start={[0.1, 0.95]}
              end={[0.8, 0.45]}
            />
            <TextLabelBold
              size={wp("3%")}
              style={{
                letterSpacing: 2.8,
                textTransform: "uppercase"
              }}>
              431 Successful Checkouts
            </TextLabelBold>
            <TextLabel
              size={wp("2.8%")}
              style={{
                marginTop: 10,
                marginBottom: 10
              }}>
              Tap for more details
            </TextLabel>
            <IconContainer>
              <CheckMark width={"100%"} height={"100%"} />
            </IconContainer>
          </Fragment>
        </CardContainer>
        <CardContainer activeOpacity={0.75}>
          <Fragment>
            <StyledLinearGradient
              colors={gradients.happiness}
              locations={[0.1, 0.8]}
              start={[0.1, 0.95]}
              end={[0.8, 0.45]}
            />
            <TextLabelBold
              size={wp("3%")}
              style={{
                letterSpacing: 2.8,
                textTransform: "uppercase"
              }}>
              7,000 Favorites
            </TextLabelBold>
            <TextLabel
              size={wp("2.8%")}
              style={{
                marginTop: 10,
                marginBottom: 10
              }}>
              Tap for more details
            </TextLabel>
            <IconContainer>
              <Heart width={"100%"} height={"100%"} />
            </IconContainer>
          </Fragment>
        </CardContainer>
        <CardContainer activeOpacity={0.75}>
          <Fragment>
            <StyledLinearGradient
              colors={gradients.ultraViolet}
              locations={[0.1, 0.8]}
              start={[0.1, 0.95]}
              end={[0.8, 0.45]}
            />
            <TextLabelBold
              size={wp("3%")}
              style={{
                letterSpacing: 2.8,
                textTransform: "uppercase"
              }}>
              50 / 65 Milestones Completed
            </TextLabelBold>
            <TextLabel
              size={wp("2.8%")}
              style={{
                marginTop: 10,
                marginBottom: 10
              }}>
              Tap for more details
            </TextLabel>
            <IconContainer>
              <Fire width={"100%"} height={"100%"} />
            </IconContainer>
          </Fragment>
        </CardContainer>
      </InfoCardsWrapper>
    </InfoCardsContainer>
  );
};

const KeyFieldComponent = () => {};

export default function HomeScreen() {
  return (
    <HomeScreenContainer>
      <ScrollContainer>
        <InfoCardsComponent />
        <FieldContainer>
          <TextLabelBold
            size={wp("3.2%")}
            style={{ textTransform: "uppercase", letterSpacing: 1.5 }}>
            My Key
          </TextLabelBold>
          <TextFieldContainer>
            <StyledInput
              type="password"
              secureTextEntry={true}
              maxLength={4}
              selectionColor="#FFF"
              value="1XCD"
              font-size="20"
            />
            <StyledInput
              type="password"
              secureTextEntry={true}
              maxLength={4}
              selectionColor="#FFF"
              value="VDW6"
              font-size="20"
            />
            <StyledInput
              type="password"
              secureTextEntry={true}
              maxLength={4}
              selectionColor="#FFF"
              value="76XD"
              font-size="20"
            />
            <StyledInput
              type="password"
              secureTextEntry={true}
              maxLength={4}
              selectionColor="#FFF"
              value="3VVP"
              font-size="20"
              disabled={true}
            />
            <ControlBtn activeOpacity={0.75}>
              <TextLabelBold size={wp("3%")} style={{ textAlign: "center" }}>
                Show
              </TextLabelBold>
            </ControlBtn>
          </TextFieldContainer>
        </FieldContainer>
      </ScrollContainer>
    </HomeScreenContainer>
  );
}

HomeScreen.navigationOptions = {
  header: <HomeScreenHeader showNotification={true} />
};
