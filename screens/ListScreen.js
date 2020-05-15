import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { RectButton, ScrollView } from "react-native-gesture-handler";
import { Title } from "../components/atoms/StyledText";
import { CardList } from "../components/molecules/Card";
import { FilterButton } from "../components/atoms/FilterButton";

export default function ListScreen() {
  const [activeFilters, setActiveFilters] = useState([]);

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
          onPress={() => onPress("veggie")}
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

      <View style={styles.list}>
        <CardList
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
