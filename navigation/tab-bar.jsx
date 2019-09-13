import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

const S = StyleSheet.create({
  container: { flexDirection: "row", height: 52, elevation: 2 },
  tabButton: { flex: 1, justifyContent: "center", alignItems: "center" }
});

import {
  TabBarContainer,
  ActiveIndicatorContainer,
  ActiveIndicator,
  TabLink,
  Scaler,
  ActiveIndicatorWrapper
} from "./navigation-styles";

const TabBar = props => {
  const {
    getLabelText,
    onTabPress,
    onTabLongPress,
    getAccessibilityLabel,
    navigation
  } = props;

  const { routes, index: activeRouteIndex } = navigation.state;
  return (
    <TabBarContainer>
      <ActiveIndicatorContainer>
        <ActiveIndicatorWrapper pose={`route${activeRouteIndex}`}>
          <ActiveIndicator />
        </ActiveIndicatorWrapper>
      </ActiveIndicatorContainer>
      {routes.map((route, routeIndex) => {
        const isRouteActive = routeIndex === activeRouteIndex;

        return (
          <TouchableOpacity
            key={routeIndex}
            style={S.tabButton}
            onPress={() => {
              onTabPress({ route });
            }}
            onLongPress={() => {
              onTabLongPress({ route });
            }}
            accessibilityLabel={getAccessibilityLabel({ route })}>
            <Scaler pose={isRouteActive ? "active" : "inactive"}>
              <TabLink>{getLabelText({ route })}</TabLink>
            </Scaler>
          </TouchableOpacity>
        );
      })}
    </TabBarContainer>
  );
};

export default TabBar;
