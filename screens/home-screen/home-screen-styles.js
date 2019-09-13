import Styled from "styled-components";
import { LinearGradient } from "expo-linear-gradient";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

export const HomeScreenContainer = Styled.View`
  flex: 1;
  width: ${wp("100%")};
`;

export const ScrollContainer = Styled.ScrollView.attrs(props => ({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    alignItems: "center",
    paddingTop: hp("5%"),
    paddingBottom: hp("7%")
  }
}))``;

export const CardContainer = Styled.TouchableOpacity`
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

export const IconContainer = Styled.View`
  height: ${hp("3%")};
  width: ${hp("3%")};
  margin-top: 5;
`;

export const InfoCardsContainer = Styled.View`
  height: ${hp("23%")};
  width: ${wp("100%")};
  margin-bottom: ${hp("3.5%")};
`;

export const InfoCardsWrapper = Styled.ScrollView.attrs(props => ({
  contentContainerStyle: {
    paddingRight: wp("5%")
  },
  showsHorizontalScrollIndicator: false
}))``;

export const StyledLinearGradient = Styled(LinearGradient)`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  transform: scale(1.15);
  z-index: 0;
`;

export const gradients = {
  bigHead: ["#8E2DE2", "#4A00E0"],
  happiness: ["#96c93d", "#00b09b"],
  ultraViolet: ["#DA4453", "#89216B"]
};

export const FieldContainer = Styled.View`
width: ${wp("100%")};
  padding: 0px 15px; 
  margin-top: ${hp("3%")};
`;

export const TextFieldContainer = Styled.View`
  height: ${hp("6.3%")};
  background-color: rgba(255, 255, 255, 0.08);
  border-radius: 10;
  color: #FFF;
  flex-direction: row;
  margin-top: ${hp("1%")};
  align-items: center;
  padding: 12px 15px;
  justify-content: space-between;
`;

export const StyledInput = Styled.TextInput`
  height: 100%;
  color: #FFF;
  font-family: "montserrat-regular";
  border: ${props =>
    props.border ? "1.5px solid rgba(255, 255, 255, 0.2)" : "none"};
  width: ${wp("15%")};
  text-align: ${props => (props.center ? "center" : "left")};
`;

export const ControlBtn = Styled.TouchableOpacity`
  border: 1.5px solid #FFF;
  border-radius: 5;
  width: ${wp("15%")};
  padding: 8px 10px;
  opacity: ${props => (props.active ? 0.9 : 0.2)};
`;

export const UnbindBtn = Styled.TouchableOpacity`
  width: ${wp("25%")};
  padding: 10px 15px;
  background-color: #FF1335;
  border-radius: 7;
  align-self: center;
  margin-top:  ${hp("1.3%")};
`;
