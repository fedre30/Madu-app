import React, { useState, useEffect } from "react";
import axios from "axios";
import { StyleSheet, Text, View } from "react-native";
import {
  RectButton,
  ScrollView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { Title } from "../components/atoms/StyledText";
import { ListCard } from "../components/molecules/Card";
import { FilterButton } from "../components/atoms/FilterButton";
import Modal from "react-native-modal";
import { FilterView } from "../components/organisms/FilterView";
import { API_URL } from "../utils/api";
import data from "../utils/poi-api-test.json";

export default function ListScreen() {
  const [activeFilters, setActiveFilters] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [shops, setShops] = useState([]);

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
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
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
        <Modal isVisible={modalVisible} style={{ margin: 0 }} propagateSwipe>
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
    padding: 10,
  },
  contentContainer: {
    justifyContent: "center",
    paddingTop: 30,
  },
  filtersContainer: {
    height: "auto",
    flexDirection: "row",
    marginBottom: 20,
  },
  list: {
    padding: 10,
  },
});
