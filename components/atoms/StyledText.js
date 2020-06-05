import * as React from "react";
import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/Colors";

export function MonoText(props) {
  return (
    <Text {...props} style={[props.style, { fontFamily: "space-mono" }]} />
  );
}

export const SimpleText = (props) => {
  return (
    <Text
      {...props}
      style={[
        props.style,
        {
          fontFamily: "gotham-book",
          lineHeight: props.lineHeight ? props.lineHeight : 28,
          color: props.color ? props.color : Colors.text,
          fontSize: props.fontSize ? props.fontSize : 14,
        },
      ]}
    />
  );
};

export const SecondaryText = (props) => {
  return (
    <Text
      {...props}
      style={[
        props.style,
        styles.secondary,
        {
          fontFamily: "gotham-medium",
          fontSize: props.size ? props.size : 15,
          color: props.color ? props.color : Colors.text,
        },
      ]}
    />
  );
};

export const Title = (props) => {
  return (
    <Text
      {...props}
      style={[styles.title, props.style, { fontFamily: "gotham-bold" }]}
    />
  );
};
export const Subtitle = (props) => {
  return (
    <Text
      {...props}
      style={[
        props.style,
        styles.title,
        { fontFamily: "gotham-bold", fontSize: 15 },
      ]}
    />
  );
};

export const SecondaryTitle = (props) => {
  return (
    <Text
      {...props}
      style={[
        props.style,
        styles.secondary,
        {
          fontFamily: "gotham-medium",
          fontSize: props.fontSize ? props.fontSize : 17,
        },
      ]}
    />
  );
};

export const ItalicText = (props) => {
  return (
    <Text
      {...props}
      style={[
        props.style,
        styles.italic,
        {
          fontFamily: "gotham-book-italic",
          color: props.color ? props.color : Colors.text,
        },
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
      style={[props.style, styles.thumbnailTitle, { fontFamily: "gotham-medium" }]}
    />
  )
};

export const ButtonText = (props) => {
  return (
    <Text
      {...props}
      style={[
        props.style,
        styles.button,
        {
          fontFamily: "gotham-medium",
          textTransform: props.transform ? "uppercase" : "none",
        },
      ]}
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
    lineHeight: 30,
    textTransform: "uppercase",
  },

  italic: {
    fontSize: 15,
    lineHeight: 24,
  },
  tags: {
    fontSize: 15,
    color: Colors.grey,
    lineHeight: 24,
  },
  thumbnailTitle:{
    fontSize: 18, 
    lineHeight: 21,
    width: 200,
    color: Colors.black,
  },

  button: {
    fontSize: 14,
    lineHeight: 24,
  },
});
