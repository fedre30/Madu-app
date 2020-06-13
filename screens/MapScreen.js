import { Ionicons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import {
  RectButton,
  ScrollView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { Title, SimpleText } from "../components/atoms/StyledText";
import MapView, { Marker } from "react-native-maps";
import { getLocation } from "../utils/map";
import { Backdrop } from "react-native-backdrop";
import { ListScreen } from "./ListScreen";
import { ListCard } from "../components/molecules/Card";
import data from "../utils/poi-api-test.json";
import { FilterButton } from "../components/atoms/FilterButton";
import Modal from "react-native-modal";
import { FilterView } from "../components/organisms/FilterView";
import { MapBackDrop } from "../components/organisms/Backdrop";
import Geocoder from "react-native-geocoding";
import pin from "../assets/images/pin.png";

export default function MapScreen() {
  const [location, setLocation] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    getLocation().then((data) => {
      setLocation({
        latitude: data.latitude,
        longitude: data.longitude,
        latitudeDelta: 0.003,
        longitudeDelta: 0.003,
      });
    });
    // if (data) {
    //   data.forEach((shop) => {
    //     const address = `${shop.address}, ${shop.zipcode}, ${shop.city}`;
    //     Geocoder.from(address)
    //       .then((json) => {
    //         setMarkers((prevState) => [
    //           ...prevState,
    //           {
    //             ...shop,
    //             latitude: json.results[0].geometry.location.lat,
    //             longitude: json.results[0].geometry.location.lng,
    //           },
    //         ]);
    //       })
    //       .catch((error) => console.warn(error));
    //   });
    // }
  }, [data]);

  const handleOpen = () => {
    setVisible(true);
  };

  const handleClose = () => {
    setVisible(false);
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapStyle}
        initialRegion={location}
        region={location}
        onPress={() => setVisible(true)}
        provider="google"
        loadingEnabled={true}
        loadingIndicatorColor="#666666"
        loadingBackgroundColor="#eeeeee"
        moveOnMarkerPress={false}
        showsUserLocation={true}
        showsCompass={true}
        showsPointsOfInterest={false}
      />

      <Marker
        title={"test"}
        coordinate={{
          latitude: 48.8905173,
          longitude: 2.3453026,
        }}
        image={pin}
      />
      <MapBackDrop
        visible={visible}
        handleClose={handleClose}
        handleOpen={handleOpen}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height - 30,
  },
  mapStyle: {
    flex: 1,
  },

  closePlateContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 32,
  },
  closePlate: {
    width: 40,
    height: 5,
    borderRadius: 5,
    backgroundColor: "#bdbdbd",
  },
});
