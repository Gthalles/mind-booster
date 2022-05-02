import * as React from "react"
import { View, Text, StyleSheet } from "react-native";

export const SmallFlashcard = ({ frontText, backText }) => {
	const styles = StyleSheet.create({
		flashcardContainer: {
			width: "80%",
			height: 290,
			margin: "auto",
			display: "flex",
			flexDirection: "column",
			backgroundColor: "#FFF",
			borderRadius: 13
		},
		frontContainer: {
			height: "50%",
			BorderBottomWidth: 2,
			BorderBottomColor: "#777777",
		},
		backContainer: {
			height: "50%",
			borderTopWidth: 2,
			borderTopColor: "#777777",
		},
		label: {
			color: "#777777",
			fontSize: 18,
			marginTop: 15,
			marginLeft: 15
		},
		text: {
			color: "#414141",
			fontSize: 28,
			fontWeight: "bold",
			textDecorationLine: "underline",
			textAlign: "center",
			alignItems: "center",
			margin: "auto",
		},
	});

	return (
		<View style={ styles.flashcardContainer }>
			<View style={ styles.frontContainer }>
				<Text style={ styles.label }>Frente</Text>
				<Text style={ styles.text }>{ frontText }</Text>
			</View>

			<View style={ styles.backContainer }>
				<Text style={ styles.label }>Verso</Text>
				<Text style={ styles.text }>{ backText }</Text>
			</View>
		</View>
	);
}