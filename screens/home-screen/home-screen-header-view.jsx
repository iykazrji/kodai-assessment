import React, { Fragment } from "react";
import { Platform, View } from "react-native";
import { Tooltip, Text } from "react-native-elements";
import { TextLabel, TextLabelBold } from "components/StyledText";
import Svg, { Path, G } from "react-native-svg";
import Styled from "styled-components";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import PropTypes from "prop-types";

const HeaderContainer = Styled.View`
    background-color: #15161A;
    color: #FFF;
    height: ${Platform.OS === "ios" ? hp("13%") : hp("8%")};
    width: ${wp("100%")};
    padding-top: ${Platform.OS === "ios" ? hp("5.2%") : hp("1.2%")};
    padding-right: ${wp("5%")};
    padding-left: ${wp("5%")};
    justify-content: space-between;  
    shadow-opacity: 0.3;
    shadow-offset: 0px 8px;
    shadow-color: rgba(10, 10, 10, 0.5);
    shadow-radius: 7;
    elevation: 15;
    flex-direction: row;
`;

const HeaderIconContainer = Styled.View`
    width: ${wp("6%")};
`;

const HeaderAvatarContent = Styled.View`
    height: 100%;
    min-width: ${wp("40%")};
    max-width: ${wp("60%")};
    flex-direction: row;
    align-items: center;
    padding: 0;
`;

const AvatarProfileContainer = Styled.View`
    width: ${wp("12%")};
    height: ${wp("12%")};
`;

const AvatarWrapper = Styled.TouchableHighlight`
    width: ${wp("12%")};
    height: ${wp("12%")};
    border-radius: ${wp("12%") / 2};
    overflow: hidden
    background-color: #EEE;
    margin-left: auto;
`;

const AvatarImage = Styled.Image`
    width: 100%;
    height: 100%;
`;

const AvatarContentWrapper = Styled.View`
    height: 100%;
    flex: 1;
    align-items: center;
    justify-content: center;
    margin-right: 15;
`;

const AvatarProfileName = Styled(TextLabel)`
    width: 100%;
    text-align: right;
`;
const AvatarCheckoutInfo = Styled(TextLabelBold)`
    text-align: right;
    width: 100%;
`;

const NotificationIndicator = Styled.View`
   width: ${hp("1.15%")};
   height: ${hp("1.15%")};
   border-radius: ${hp("1.15%") / 2};
   background-color: #FF1335;
   position: absolute;
   top: 0;
   right: 0;
`;

const StyledTooltip = Styled(Tooltip)`
    margin-top: 100;
    position: absolute;
    color: #FFF;
`;

const ToolTipContainer = Styled.View`
    position: absolute;
    border: 1px solid;
    top: auto;
    bottom: 0;
    right: 30;
    flex: 1;
`;

const ToolTipNotificationIndicator = Styled(NotificationIndicator)`
    position: relative;
    width: ${hp(".7%")};
   height: ${hp(".7%")};
   border-radius: ${hp(".7%") / 2};
   
`;
const ToolTipContentContainer = Styled.View`
    width: 100%;
    color: #FFF;
    flex-direction: row;
    align-items: center;
    padding: 0px 5px;
`;
const ToolTipContentWrapper = Styled.View`
    margin-left: 10;
`;

const HeaderMenuIcon = () => {
  return (
    <Svg height="100%" width="100%" viewBox="0 0 384.969 108.271">
      <G transform="translate(0 -180.455)">
        <Path
          d="M372.939,180.455H12.03c-6.641,0-12.03,5.39-12.03,12.03s5.39,12.03,12.03,12.03h360.909c6.641,0,12.03-5.39,12.03-12.03
            S379.58,180.455,372.939,180.455z"
          fill="#FFF"
        />
        <Path
          d="M372.939,264.667H132.333c-6.641,0-12.03,5.39-12.03,12.03c0,6.641,5.39,12.03,12.03,12.03h240.606
            c6.641,0,12.03-5.39,12.03-12.03C384.97,270.056,379.58,264.667,372.939,264.667z"
          fill="#FFF"
          transform="translate(-120.303)"
        />
      </G>
    </Svg>
  );
};

const ToolTipContent = () => {
  return (
    <ToolTipContentContainer>
      <ToolTipNotificationIndicator />
      <ToolTipContentWrapper>
        <TextLabel size={hp("1.15%")}>New Update Available (3.2.1)</TextLabel>
      </ToolTipContentWrapper>
    </ToolTipContentContainer>
  );
};

const HomeScreenHeader = ({ showNotification }) => {
  const toolTipRef = React.createRef();
  return (
    <HeaderContainer>
      <HeaderIconContainer>
        <HeaderMenuIcon />
      </HeaderIconContainer>
      <HeaderAvatarContent>
        <AvatarContentWrapper>
          <AvatarProfileName size={wp("2.8%")}>Daniel Shafer</AvatarProfileName>
          <AvatarCheckoutInfo size={wp("3.2%")}>
            431 Checkouts
          </AvatarCheckoutInfo>
        </AvatarContentWrapper>
        <AvatarProfileContainer>
          <Fragment>
            <AvatarWrapper
              onPress={() => {
                toolTipRef.current.toggleTooltip();
              }}>
              <AvatarImage
                source={require("assets/images/profile-avatar.jpg")}
              />
            </AvatarWrapper>
            {showNotification ? <NotificationIndicator /> : null}
          </Fragment>
          <ToolTipContainer>
            <StyledTooltip
              ref={toolTipRef}
              height={60}
              width={180}
              withOverlay={false}
              backgroundColor="rgb(80, 80, 80)"
              popover={<ToolTipContent />}
            />
          </ToolTipContainer>
        </AvatarProfileContainer>
      </HeaderAvatarContent>
    </HeaderContainer>
  );
};

HomeScreenHeader.propTypes = {
  showNotification: PropTypes.bool
};

export default HomeScreenHeader;
