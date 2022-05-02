import * as React from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { SmallFlashcard } from "../../components/SmallFlashcard";

// eslint-disable-next-line react/prop-types
export function NewCard ({ navigation }) {
	const styles = StyleSheet.create({
		topContainer: {
			width: "80%",
			marginTop: -75,
			marginBottom: 50
		},
		instructionText: {
			color: "#FFF",
			fontSize: 18,
			textAlign: "center"
		},
		buttonContainer: {
			width: "80%",
			height: 200,
			marginTop: 21,
			display: "flex",
			flexDirection: "column",
			justifyContent: "space-between"
		},
	});

	return (
		<View>
		<Header title="Home" navigation={ navigation }/>
			<Background>
					<View style={ styles.topContainer }>
					<Text style={ styles.instructionText }>Preencha os dados da frente e do verso do flashcard</Text>
					</View>
					<SmallFlashcard frontText="Brinquedo" backText="Toy" />
					<View style={ styles.buttonContainer }>
						<Button title="Cadastrar" color="#6A61A1" />
						<Button title="Cancelar" color="transparent" />
					</View>
			</Background>
		</View>
	);
}