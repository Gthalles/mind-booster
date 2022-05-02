import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { SmallFlashcard } from "../../components/SmallFlashcard";

// eslint-disable-next-line react/prop-types
export function EditCard ({ navigation }) {
	const styles = StyleSheet.create({
		topContainer: {
			width: "80%",
			height: 50,
			marginTop: -100,
			marginBottom: 40
		},
		instructionText: {
			color: "#FFF",
			fontSize: 18,
			textAlign: "center"
		},
		buttonContainer: {
			width: "80%",
			height: 255,
			marginTop: 15,
			display: "flex",
			flexDirection: "column",
			justifyContent: "space-between"
		},
	});

	return (
		<View>
		<Header title="Coleção - objetos" navigation={ navigation }/>
			<Background>
					<View style={ styles.topContainer }>
						<Text style={ styles.instructionText }>
							Preencha os dados da frente e do verso do flashcard
						</Text>
					</View>
					<SmallFlashcard frontText="Brinquedo" backText="Toy" />
					<View style={ styles.buttonContainer }>
						<Button text="SALVAR ALTERAÇÕES" color="#6A61A1" />
						<Button text="CANCELAR" color="#423F5D" border/>
					</View>
			</Background>
		</View>
	);
}