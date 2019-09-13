import Styled from "styled-components/native";
import Posed from "react-native-pose";
import { Platform } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

export const TabBarContainer = Styled.View`
    flex-direction: row;
    height: ${Platform.OS === "ios" ? hp("8%") : hp("5%")};
    padding-bottom: ${Platform.OS === "ios" ? hp("2%") : hp("1%")};
    padding-top: 10px;
    shadow-opacity: 0.4;
    shadow-offset: 0px 0px;
    shadow-color: rgba(10, 10, 10, 0.75);
    shadow-radius: 15;
    elevation: 15;
    border-top-width: 1px;
    border-style: solid;
    border-top-color: rgba(250, 250, 250, 0.05);
`;

export const ActiveIndicatorContainer = Styled.View`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: ${wp("100%")};
    margin: 0 auto;
    justify-content: center;
    padding-bottom: ${Platform.OS === "ios" ? hp("1%") : hp("0%")};

`;

export const TabLink = Styled.Text`
    font-family: "montserrat-bold";
    color: #FFF;
    letter-spacing: 1.5;
    text-transform: uppercase;
    font-size: ${wp("1.9%")};
`;

const tabWidth = wp("100%") / 4;

const SpotLight = Posed.View({
  route0: { x: 0 },
  route1: { x: tabWidth },
  route2: { x: tabWidth * 2 },
  route3: { x: tabWidth * 3 }
});

export const Scaler = Posed.View({
  active: { scale: 1, opacity: 1 },
  inactive: { scale: 0.8, opacity: 0.5 }
});

export const ActiveIndicatorWrapper = Styled(SpotLight)`
    width: ${wp("100%") / 4};
    height: ${wp("7%")};
    align-items: center;
`;

export const ActiveIndicator = Styled.View`
    background-color: #FF1335;
    border-radius: ${wp("7%") / 2};
    height: 100%;
    width: 85%;
    shadow-opacity: 0.3;
    shadow-offset: 0px 3px;
    shadow-color: #FF1335;
    shadow-radius: 7;
    elevation: 7;
`;
