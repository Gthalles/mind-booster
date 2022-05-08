import React from "react";
import { StyleSheet, View } from "react-native";

// eslint-disable-next-line react/prop-types
export const Background = ({ children }) => {
	return <View style={style.background}>{children}</View>;
};

const style = StyleSheet.create({
	background: {
		backgroundColor: "#423F5D",
		width: "100%",
		minHeight: 830,
		height: "100%",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
});
