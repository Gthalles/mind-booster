import React from "react";
import {StyleSheet, Text, View} from "react-native";

export const Section = ({title, children}) => {
  return (
    <View style={style.sectionContainer}>
      <Text>{title}</Text>
      <>{children}</>
    </View>
  );
};

const style = StyleSheet.create({
  sectionContainer: {
    backgroundColor: "#423F5D",
    width: "100%",
    height: "100%",
  },
});
