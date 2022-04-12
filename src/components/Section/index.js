import React from "react";
import { StyleSheet, View } from "react-native";

// eslint-disable-next-line react/prop-types
export const Section = ({ children }) => {
	return <View style={style.sectionContainer}>{children}</View>;
};

const style = StyleSheet.create({
	sectionContainer: {
		width: "80%",
		margin: "auto",
	},
});
