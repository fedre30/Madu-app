import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { FilterButton } from "../atoms/FilterButton";
import { SecondaryTitle, ButtonText, SimpleText } from "../atoms/StyledText";
import { Button, CheckBox } from "native-base";
import Colors from "../../constants/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";

export const FilterView = (props) => {
  const [activeFilters, setActiveFilters] = useState(["all"]);
  const shopTypes = [
    {
      id: "all",
      label: "Tout type",
    },
    {
      id: "shops",
      label: "Commerces",
    },
    {
      id: "activities",
      label: "Activités",
    },
    {
      id: "restaurants",
      label: "Restaurants",
    },
    {
      id: "retails",
      label: "Retails",
    },
  ];

  const onPress = (type) => {
    setActiveFilters((prevState) =>
      prevState.includes(type)
        ? prevState.filter((t) => t !== type)
        : [...prevState, type]
    );
  };
  return (
    <View
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
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
      <SecondaryTitle>Populaires</SecondaryTitle>
      <View style={styles.buttons}>
        <FilterButton
          title="Végétarien"
          imageType="veggie"
          onPress={() => onPress("veggie")}
          focused={activeFilters.includes("veggie")}
          filterView
        />
        <FilterButton
          title="Local"
          imageType="local"
          onPress={() => onPress("local")}
          focused={activeFilters.includes("local")}
          filterView
        />
        <FilterButton
          title="Vegan"
          imageType="vegan"
          onPress={() => onPress("vegan")}
          focused={activeFilters.includes("vegan")}
          filterView
        />
        <FilterButton
          title="Bio"
          imageType="bio"
          onPress={() => onPress("bio")}
          focused={activeFilters.includes("bio")}
          filterView
        />
        <FilterButton
          title="Sans gluten"
          imageType="glutenfree"
          onPress={() => onPress("glutenfree")}
          focused={activeFilters.includes("glutenfree")}
          filterView
        />
        <FilterButton
          title="Pescetarien"
          imageType="fish"
          onPress={() => onPress("fish")}
          focused={activeFilters.includes("fish")}
          filterView
        />
      </View>
      <SecondaryTitle>Tipes d'établissements</SecondaryTitle>
      <View style={styles.buttons}>
        {shopTypes.map((shop, i) => (
          <Button
            style={[
              styles.shopButton,
              {
                backgroundColor: activeFilters.includes(shop.id)
                  ? Colors.secondary
                  : Colors.white,
              },
            ]}
            onPress={() => onPress(shop.id)}
            key={i}
          >
            <ButtonText
              style={[
                styles.buttonText,
                {
                  color: activeFilters.includes(shop.id)
                    ? Colors.white
                    : Colors.text,
                },
              ]}
            >
              {shop.label}
            </ButtonText>
          </Button>
        ))}
      </View>
      <SecondaryTitle>Budget</SecondaryTitle>
      <View style={styles.buttons}>
        <View style={styles.checkbox}>
          <CheckBox
            checked={activeFilters.includes(1)}
            onPress={() => onPress(1)}
            color={Colors.secondary}
          />
          <SimpleText style={{ marginLeft: 15 }}>1€ à 15€</SimpleText>
        </View>
        <View style={styles.checkbox}>
          <CheckBox
            checked={activeFilters.includes(2)}
            onPress={() => onPress(2)}
            color={Colors.secondary}
          />
          <SimpleText style={{ marginLeft: 15 }}>15€ à 30€</SimpleText>
        </View>
        <View style={styles.checkbox}>
          <CheckBox
            checked={activeFilters.includes(3)}
            onPress={() => onPress(3)}
            color={Colors.secondary}
          />
          <SimpleText style={{ marginLeft: 15 }}>30€ et plus</SimpleText>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          width: Dimensions.get("window").width,
        }}
      >
        <Button style={styles.searchButton} onPress={props.search}>
          <ButtonText style={styles.buttonText} transform>
            Rechercher
          </ButtonText>
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
    padding: 20,
    paddingTop: 50,
  },
  contentContainer: {
    justifyContent: "center",
    paddingTop: 50,
  },
  buttons: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 30,
    marginTop: 10,
  },
  shopButton: {
    justifyContent: "center",
    backgroundColor: Colors.secondary,
    justifyContent: "center",
    marginRight: 10,
    marginBottom: 10,
    padding: 10,
  },
  searchButton: {
    width: 180,
    justifyContent: "center",
    justifyContent: "center",
    backgroundColor: Colors.secondary,
  },
  buttonText: {
    paddingTop: 10,
    alignItems: "center",
    color: Colors.white,
  },
  checkbox: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 5,
  },
});
