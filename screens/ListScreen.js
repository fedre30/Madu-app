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

export default function ListScreen() {
  const [activeFilters, setActiveFilters] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [shops, setShops] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/shops`).then((resp) => setShops(resp.data));
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
      {console.log(shops)}
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
        <ListCard
          id={1}
          name="Rose Bakery"
          address="Rue de test, 28"
          tags={["vegetarien", "bio", "vegan"]}
          price={2}
          accessibility={true}
          suggestionRate={78}
          greenscore={80}
        />
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
