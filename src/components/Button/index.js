import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

export const Button = ({ text, color, border }) => {
	const styles = StyleSheet.create({
		button: {
			width: "100%",
			height: 46,
			backgroundColor: color,
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			borderWidth: border ? 1 : null,
			borderColor: border ? "#FFF" : null,
		},
		text: {
			color: "#FFF",
			fontSize: 14,
			fontWeight: "700"
		}
	});

	return (
		<View style={ styles.button }>
			<Text style={ styles.text }>{ text }</Text>
		</View>
	);
}