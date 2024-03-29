import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button } from "../../components/Button";
import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { LargeFlashcard } from "../../components/LargeFlashcard";

// eslint-disable-next-line react/prop-types
export function Play3 ({ navigation }) {
	const styles = StyleSheet.create({
		topContainer: {
			marginTop: 60,
		},
		instructionText: {
			color: "#FFF",
			fontSize: 18,
			marginBottom: 30,
			textAlign: "center"
		},
		buttonContainer: {
			width: "80%",
			height: 175,
			marginTop: 50,
			marginBottom: 50,
		},
	});

	return (
		<View>
			<Header title="Coleção - Objetos" navigation={ navigation }/>
			<Background>
					<View style={ styles.topContainer }>
						<Text style={ styles.instructionText }>Cartão 8/8</Text>
					</View>
					<LargeFlashcard frontText="Janela" backText="Window" />
					<View style={ styles.buttonContainer }>
						<Button text="FINALIZAR" color="#61A170"/>
					</View>
			</Background>
		</View>
	);
}