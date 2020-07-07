import { Ionicons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import {
  RectButton,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native-gesture-handler";
import { Title, SimpleText } from "../../components/atoms/StyledText";
import MapView from "react-native-maps";
import { getLocation } from "../../utils/map";
import Backdrop from "react-native-material-backdrop-modal";
import { ListCard } from "../../components/molecules/Card";
import data from "../../utils/poi-api-test.json";
import { FilterButton } from "../../components/atoms/FilterButton";
import Modal from "react-native-modal";
import { FilterView } from "../../components/organisms/FilterView";
import axios from "axios";
import global from "../../Global";

export const MapBackDrop = (props) => {
  const [shops, setShops] = useState([]);
  const [activeFilters, setActiveFilters] = useState([]);
  const [tags, setTags] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (activeFilters) {
      axios
        .get(`${global.base_api_url}tag/`)
        .then((res) =>
          setTags(
            res.data.results.filter((tag) => activeFilters.includes(tag.name))
          )
        );
    }
    if (tags) {
      const parsed = tags.map((tag) => tag.uid).join(",");
      axios
        .get(`${global.base_api_url}shop/?tag___in=${parsed}`)
        .then((res) => setShops(res.data.results));
    } else {
      axios
        .get(`${global.base_api_url}shop/`)
        .then((res) => setShops(res.data.results));
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
      backdropStyle={{ maxHeight: Dimensions.get("window").height - 200 }}
      focused={props.visible}
      onFocus={props.onFocus}
      title=""
      icon={
        <View style={styles.closePlateContainer}>
          <View style={styles.closePlate} />
        </View>
      }
    >
      <View style={{ padding: 20 }}>
        <TouchableOpacity
          onPress={props.onFocus}
          style={{
            justifyContent: "flex-end",
            flexDirection: "row",
            paddingRight: 20,
            paddingBottom: 20,
          }}
        >
          <SimpleText>Fermer</SimpleText>
        </TouchableOpacity>
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
              <FilterView
                handleClose={() => setModalVisible(!modalVisible)}
                setModalVisible={setModalVisible}
                modalVisible={modalVisible}
                setShops={setShops}
              />
            </ScrollView>
          </Modal>
        </View>
        <FlatList
          style={styles.list}
          data={shops}
          renderItem={({ item }) => (
            <ListCard
              id={item.uid}
              name={item.name}
              address={item.address}
              tags={item.tags}
              price={item.range_price}
              accessibility={item.accessibility}
              suggestionRate={item.ratings}
              image={item.image}
              // greenscore={item.greenscore}
            />
          )}
          keyExtractor={(shop) => shop.uid.toString()}
        ></FlatList>
      </View>
    </Backdrop>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  list: {
    padding: 5,
  },
  filtersContainer: {
    height: 100,
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
    alignItems: "center",
    justifyContent: "center",
    marginRight: Dimensions.get("window").width - 100,
  },
});
