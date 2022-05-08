import React, { useState, useContext } from "react";
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { FlashcardContext } from "../../providers/FlashcardProvider";
import { useNavigation } from "@react-navigation/native";
import { Link  } from "@react-navigation/native";


export function EditCard ({ route }) {
	const { itemID, front, back } = route.params;
	const [ frontValue, setFrontValue ] = useState(front);
	const [ backValue, setBackValue ] = useState(back);
	const { createFlashcard, flashcardList, updateFlashcard, deleteFlashcard } = useContext(FlashcardContext);
	const navigation = useNavigation();

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
		link: {
			minWidth: "100%"
		}
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
					<View style={ styles.flashcardContainer }>
						<View style={ styles.frontContainer }>
							<Text style={ styles.label }>Frente</Text>
							<TextInput style={ styles.text } onChangeText={ text => setFrontValue(text) } defaultValue={ front } />
						</View>

						<View style={ styles.backContainer }>
							<Text style={ styles.label }>Verso</Text>
							<TextInput style={ styles.text } onChangeText={ text => setBackValue(text) } defaultValue={ back } />
						</View>
					</View>
					<View style={ styles.buttonContainer }>
						<View style={ styles.link }>
							<Link to="/Objetos" onPress={ () => updateFlashcard({ id: itemID, front: frontValue, back: backValue }) }>
								<Button text="SALVAR ALTERAÇÕES" color="#6A61A1" />
							</Link>
						</View>

						<View style={ styles.link }>
							<Link to="/Objetos">
								<Button text="CANCELAR" color="#423F5D" border/>
							</Link>
						</View>
					</View>
			</Background>
		</View>
	);
}