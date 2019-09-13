import React, { Fragment } from "react";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { TextLabelBold, TextLabel } from "components/StyledText";
import CheckMark from "assets/images/checkmark.svg";
import Heart from "assets/images/heart.svg";
import Fire from "assets/images/fire.svg";

import {
  InfoCardsContainer,
  InfoCardsWrapper,
  CardContainer,
  IconContainer,
  StyledLinearGradient
} from "./home-screen-styles";

const InfoCardsComponent = () => {
  const gradients = {
    bigHead: ["#8E2DE2", "#4A00E0"],
    happiness: ["#96c93d", "#00b09b"],
    ultraViolet: ["#DA4453", "#89216B"]
  };

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

export default InfoCardsComponent;
