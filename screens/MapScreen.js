import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import { Title, SimpleText } from "../components/atoms/StyledText";
import MapView, { Marker, Callout } from "react-native-maps";
import { getLocation } from "../utils/map";
import data from "../utils/poi-api-test.json";
import { MapBackDrop } from "../components/organisms/Backdrop";
import Geocoder from "react-native-geocoding";
import { useNavigation } from "@react-navigation/native";
import { MapCallout } from "../components/atoms/Callout";
import ShopInfoScreen from "./shops-subscreens/ShopInfoScreen";
import GreenscoreScreen from "./shops-subscreens/GreenscoreScreen";
import ConfirmationScreen from "./shops-subscreens/ConfirmationScreen";
import FeedbackScreen from "./shops-subscreens/FeedbackScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Map = () => {
  const navigation = useNavigation();
  navigation.setOptions({ headerShown: false });
  const [location, setLocation] = useState(null);
  const [markers, setMarkers] = useState([
    {
      accessibility: true,
      address: "89 rue de Bagnolet",
      city: "Paris",
      criteria: {
        equipment: {
          note: 37,
        },
        food: {
          note: 89,
        },
        social: {
          note: 78,
        },
      },
      description: "Cantine végetarienne",
      greenscore: 78,
      id: 1,
      latitude: 48.8588241,
      longitude: 2.4013073,
      name: "given",
      openingHours: "Tous les jours sauf le lundi de 10h à 18h.",
      price: 2,
      suggestionRate: 89,
      tags: ["bio", "local", "traditionnelle"],
      website: "https://www.facebook.com/givencantine/",
      zipcode: "75020",
    },
    {
      accessibility: true,
      address: "61 rue Ramey",
      city: "Paris",
      criteria: {
        equipment: {
          note: 37,
        },
        food: {
          note: 89,
        },
        social: {
          note: 78,
        },
      },
      description:
        "Restaurant vegan situé au coeur de Montmartre proposant plats de cuisine végétale très variés. Brunch disponible le dimanche",
      greenscore: 70,
      id: 2,
      latitude: 48.8905173,
      longitude: 2.3453026,
      name: "abattoir vegetal",
      openingHours: "Tous les jours sauf le lundi de 10h à 18h.",
      price: 3,
      suggestionRate: 74,
      tags: ["bio", "local", "vegan"],
      website: "https://www.abattoirvegetal.com",
      zipcode: "75018",
    },
    {
      accessibility: true,
      address: "123 Boulevard Voltaire",
      city: "Paris",
      criteria: {
        equipment: {
          note: 87,
        },
        food: {
          note: 72,
        },
        social: {
          note: 68,
        },
      },
      description:
        "Pâtisseriee vegan située près de Bastille. Différents types de pâtisserie sont proposés, dont des alternatives sans lactose ouu gluten",
      greenscore: 74,
      id: 3,
      latitude: 48.856933,
      longitude: 2.3820088,
      name: "vg patisserie",
      openingHours: "Tous les jours sauf le lundi de 10h à 18h.",
      price: 1,
      suggestionRate: 90,
      tags: ["patisserie", "glutenfree", "vegan"],
      website: "hvgpatisserie-commande.fr",
      zipcode: "75018",
    },
  ]);
  const [visible, setVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    getLocation().then((data) => {
      setLocation({
        latitude: data.latitude,
        longitude: data.longitude,
        latitudeDelta: 0.003,
        longitudeDelta: 0.003,
      });
    });
    if (data) {
      data.forEach((shop) => {
        const address = `${shop.address}, ${shop.zipcode}, ${shop.city}`;
        Geocoder.from(address)
          .then((json) => {
            setMarkers((prevState) => [
              ...prevState,
              {
                ...shop,
                latitude: json.results[0].geometry.location.lat,
                longitude: json.results[0].geometry.location.lng,
              },
            ]);
          })
          .catch((error) => console.warn(error));
      });
    }
  }, [data]);

  useEffect(() => {
    if (markers) {
      setVisibleCards(
        markers.map((marker) => ({ id: marker.id, visible: false }))
      );
    }
  }, []);

  const handleCardVisibility = (idx) =>
    setVisibleCards(
      visibleCards.map((card) => {
        if (idx === card.id) {
          if (card.visible) {
            return { id: card.id, visible: false };
          } else {
            return { id: card.id, visible: true };
          }
        }
        return card;
      })
    );

  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapStyle}
        initialRegion={location}
        onPress={() => setVisible(false)}
        provider="google"
        loadingEnabled={true}
        loadingIndicatorColor="#666666"
        loadingBackgroundColor="#eeeeee"
        moveOnMarkerPress={false}
        showsUserLocation={true}
        showsCompass={true}
        showsPointsOfInterest={false}
      >
        {markers &&
          markers.map((marker, idx) => (
            <Marker
              coordinate={{
                latitude: marker.latitude,
                longitude: marker.longitude,
              }}
              name={marker.name}
              key={idx}
              stopPropagation={true}
              onPress={() => handleCardVisibility(marker.id)}
              onSelect={() => handleCardVisibility(marker.id)}
              onCalloutPress={() =>
                navigation.navigate("Shop", { id: marker.id })
              }
              image={require("../assets/images/pin.png")}
              calloutVisible={
                visibleCards[marker.id] &&
                visibleCards[marker.id].visible &&
                visibleCards
              }
            >
              <MapCallout
                id={marker.id}
                name={marker.name}
                address={marker.address}
                tags={marker.tags}
                price={marker.price}
                accessibility={marker.accessibility}
                suggestionRate={marker.suggestionRate}
                mapCard
                onPress={() => navigation.navigate("Shop", { id: marker.id })}
              />
            </Marker>
          ))}
      </MapView>
      <MapBackDrop visible={visible} onFocus={() => setVisible(!visible)} />
    </View>
  );
};

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
  markerContainer: {
    flex: 1,
    flexDirection: "column",
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

export default function MapScreen() {
  const PointsStack = createStackNavigator();
  return (
    <PointsStack.Navigator>
      <PointsStack.Screen name="Map" component={Map} />
      <PointsStack.Screen name="Shop" component={ShopInfoScreen} />
      <PointsStack.Screen name="Greenscore" component={GreenscoreScreen} />
      <PointsStack.Screen name="Confirmation" component={ConfirmationScreen} />
      <PointsStack.Screen name="Feedback" component={FeedbackScreen} />
    </PointsStack.Navigator>
  );
}
