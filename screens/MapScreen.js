import { Ionicons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import * as React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { RectButton, ScrollView } from "react-native-gesture-handler";
import { Title } from "../components/atoms/StyledText";
import MapView from "react-native-maps";
import { getLocation } from "../utils/map";
import { Backdrop } from "react-native-backdrop";

export default function MapScreen() {
  const [location, setLocation] = React.useState(null);

  React.useEffect(() => {
    getLocation().then((data) => {
      setLocation({
        latitude: data.latitude,
        longitude: data.longitude,
        latitudeDelta: 0.003,
        longitudeDelta: 0.003,
      });
    });
  }, []);

  return (
    <View style={styles.container}>
      <MapView style={styles.mapStyle} initialRegion={location} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height - 30,
  },
});
