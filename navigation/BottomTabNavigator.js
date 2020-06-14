import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";

import TabBarIcon from "../components/TabBarIcon";
import MapScreen from "../screens/MapScreen";
import ListScreen from "../screens/ListScreen";
import PointsScreen from "../screens/PointsScreen";
import ProfileScreen from "../screens/ProfileScreen";

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = "Home";

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
<<<<<<< HEAD
  //navigation.setOptions({ headerTitle: getHeaderTitle(route) });
  navigation.setOptions({ headerShown: false });
=======
  navigation.setOptions({ headerShown: false });
  //navigation.setOptions({ headerTitle: getHeaderTitle(route) });

>>>>>>> 6cf13c47ab1ac7dfe8a3686aaa2a3f3985d66832
  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Liste"
        component={ListScreen}
        options={{
          title: "Liste",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="md-list" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Map"
        component={MapScreen}
        options={{
          title: "Map",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="md-map" />
          ),
        }}
      />

      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="md-person" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Cagnotte"
        component={PointsScreen}
        options={{
          title: "Cagnotte test test",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="md-gift" />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName =
    route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case "Map":
      return "Map";
    case "Liste":
      return "Selection";
    case "Profile":
      return "Profile";
    case "Cagnotte":
      return "Cagnotte";
  }
}
