import * as React from "react"
import { View, Text, StyleSheet } from "react-native";

export const Flashcard = ({ text }) => {
	const styles = StyleSheet.create({
		flashcardContainer: {
			width: "80%",
			height: 401,
			margin: "auto",
			display: "flex",
			flexDirection: "column",
			backgroundColor: "#FFF",
			borderRadius: 13
		},
		container: {
			height: "100%",
			marginTop: "40%",
			BorderBottomWidth: 2,
			BorderBottomColor: "#777777",
			textDecorationLine: "underline",
		},
		text: {
			color: "#414141",
			fontSize: 28,
			fontWeight: "bold",
			textDecorationLine: "underline",
			textAlign: "center",
			marginTop: 60
		},
	});

	return (
		<View style={ styles.flashcardContainer }>
			<View style={ styles.container }>
				<Text style={ styles.text }>{ text }</Text>
			</View>
		</View>
	);
}