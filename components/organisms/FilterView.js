import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Title } from "../components/atoms/StyledText";
import { FilterButton } from "../atoms/FilterButton";

export const FilterView = (props) => {
  const [activeFilters, setActiveFilters] = useState([]);
  return (
    <View
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <FilterButton title="test" imgUrl="../../assets/veggie.png" />
    </View>
  );
};

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
});
