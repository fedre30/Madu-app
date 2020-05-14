import { Ionicons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import * as React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { RectButton, ScrollView } from "react-native-gesture-handler";
import { Title } from "../components/atoms/StyledText";
import MapView from "react-native-maps";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { getLocation } from "../utils/map";
import { GOOGLE_API_KEY } from "../api-config";

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
      <View style={styles.autocomplete}>
        <GooglePlacesAutocomplete
          placeholder="Search"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}
          style={styles.inputStyle}
          query={{
            key: GOOGLE_API_KEY,
            language: "en",
          }}
        />
      </View>
      <MapView style={styles.mapStyle} initialRegion={location} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  autocomplete: {
    width: Dimensions.get("window").width,
    height: 90,
    paddingTop: 30,
  },
  inputStyle: {
    backgroundColor: "transparent",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height - 30,
  },
});
