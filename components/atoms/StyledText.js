import * as React from "react";
import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/Colors";

export function MonoText(props) {
  return (
    <Text {...props} style={[props.style, { fontFamily: "space-mono" }]} />
  );
}

export const Title = (props) => {
  return (
    <Text
      {...props}
      style={[props.style, styles.title, { fontFamily: "gotham-bold" }]}
    />
  );
};

export const SecondaryTitle = (props) => {
  return (
    <Text
      {...props}
      style={[props.style, styles.secondary, { fontFamily: "gotham-medium" }]}
    />
  );
};

export const AddressText = (props) => {
  return (
    <Text
      {...props}
      style={[
        props.style,
        styles.address,
        { fontFamily: "gotham-book-italic" },
      ]}
    />
  );
};

export const TagsText = (props) => {
  return (
    <Text
      {...props}
      style={[props.style, styles.tags, { fontFamily: "gotham-light-italic" }]}
    />
  );
};

export const ThumbnailTitle = (props) => {
  return(
    <Text
      {...props}
      style={[props.style, styles.title, { fontFamily: "gotham-medium" }]}
    />
  );
};


const styles = StyleSheet.create({
  title: {
    fontSize: 17,
    color: Colors.text,
    lineHeight: 24,
    textAlign: "center",
  },

  secondary: {
    fontSize: 17,
    color: Colors.text,
    lineHeight: 24,
    textTransform: "uppercase",
  },

  address: {
    fontSize: 15,
    color: Colors.text,
    lineHeight: 24,
  },
  tags: {
    fontSize: 15,
    color: Colors.grey,
    lineHeight: 24,
  },
});
