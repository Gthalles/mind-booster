import React, { useContext, useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import { Button } from "../../components/Button";
import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { FlashcardContext } from "../../providers/FlashcardProvider";
import { Link } from "@react-navigation/native";


// eslint-disable-next-line react/prop-types
export function NewCard ({ navigation }) {
	const [ frontValue, setFrontValue ] = useState("");
	const [ backValue, setBackValue ] = useState("");
	const { createFlashcard } = useContext(FlashcardContext);

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
		<View>
			<Header title="Coleção - objetos" navigation={ navigation }/>
			<Background>
					<View style={ styles.topContainer }>
						<Text style={ styles.instructionText }>Preencha os dados da frente e do verso do flashcard</Text>
					</View>

					<View style={ styles.flashcardContainer }>
						<View style={ styles.frontContainer }>
							<Text style={ styles.label }>Frente</Text>
							<TextInput style={ styles.text } onChangeText={ text => setFrontValue(text) } defaultValue={ frontValue } />
						</View>

						<View style={ styles.backContainer }>
							<Text style={ styles.label }>Verso</Text>
							<TextInput style={ styles.text } onChangeText={ text => setBackValue(text) } defaultValue={ backValue } />
						</View>
					</View>

					<View style={ styles.buttonContainer }>
						<Link to="/Objetos" onPress={ () => createFlashcard({ front: frontValue, back: backValue }) }>
							<Button text="CADASTRAR" color="#6A61A1" />
						</Link>
						<Link to="/Objetos">
							<Button text="CANCELAR" color="#423F5D" border/>
						</Link>
					</View>
			</Background>
		</View>
	);
}