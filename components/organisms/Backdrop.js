import { Ionicons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import {
  RectButton,
  ScrollView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { Title, SimpleText } from "../../components/atoms/StyledText";
import MapView from "react-native-maps";
import { getLocation } from "../../utils/map";
import { Backdrop } from "react-native-backdrop";
import { ListCard } from "../../components/molecules/Card";
import data from "../../utils/poi-api-test.json";
import { FilterButton } from "../../components/atoms/FilterButton";
import Modal from "react-native-modal";
import { FilterView } from "../../components/organisms/FilterView";

export const MapBackDrop = (props) => {
  const [shops, setShops] = useState([]);
  const [activeFilters, setActiveFilters] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (data) {
      setShops(data);
    }
  }, []);

  const onPress = (type) => {
    setActiveFilters((prevState) =>
      prevState.includes(type)
        ? prevState.filter((t) => t !== type)
        : [...prevState, type]
    );
  };

  return (
    <Backdrop
      visible={props.visible}
      handleOpen={props.handleOpen}
      handleClose={props.handleClose}
      onClose={() => {}}
      swipeConfig={{
        velocityThreshold: 0.3,
        directionalOffsetThreshold: 80,
      }}
      animationConfig={{
        speed: 14,
        bounciness: 4,
      }}
      overlayColor="rgba(0,0,0,0.32)"
      closedHeight={50}
      backdropStyle={{
        backgroundColor: "#fff",
      }}
      header={
        <View style={styles.closePlateContainer}>
          <View style={styles.closePlate} />
        </View>
      }
    >
      <TouchableOpacity
        onPress={props.handleClose}
        style={{
          justifyContent: "flex-end",
          flexDirection: "row",
          paddingRight: 20,
          paddingBottom: 20,
        }}
      >
        <SimpleText>Terminer</SimpleText>
      </TouchableOpacity>
      <ScrollView style={{ padding: 20 }}>
        <ScrollView>
          <ScrollView style={styles.filtersContainer} horizontal={true}>
            <FilterButton
              title="Filtres"
              imageType="filters"
              onPress={() => setModalVisible(!modalVisible)}
            />
            <FilterButton
              title="Végétarien"
              imageType="veggie"
              onPress={() => onPress("veggie")}
              focused={activeFilters.includes("veggie")}
            />
            <FilterButton
              title="Local"
              imageType="local"
              onPress={() => onPress("local")}
              focused={activeFilters.includes("local")}
            />
            <FilterButton
              title="Vegan"
              imageType="vegan"
              onPress={() => onPress("vegan")}
              focused={activeFilters.includes("vegan")}
            />
            <FilterButton
              title="Bio"
              imageType="bio"
              onPress={() => onPress("bio")}
              focused={activeFilters.includes("bio")}
            />
          </ScrollView>
          <View>
            <Modal
              isVisible={modalVisible}
              style={{ margin: 0 }}
              propagateSwipe
            >
              <ScrollView style={{ flex: 1 }}>
                <FilterView search={() => setModalVisible(!modalVisible)} />
              </ScrollView>
            </Modal>
          </View>
          <View style={styles.list}>
            {shops.map((shop) => (
              <ListCard
                key={shop.id}
                id={shop.id}
                name={shop.name}
                address={shop.address}
                tags={shop.tags}
                price={shop.price}
                accessibility={shop.accessibility}
                suggestionRate={shop.suggestionRate}
                greenscore={shop.greenscore}
              />
            ))}
          </View>
        </ScrollView>
      </ScrollView>
    </Backdrop>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  list: {
    padding: 20,
  },
  filtersContainer: {
    height: "auto",
    flexDirection: "row",
    marginBottom: 20,
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
