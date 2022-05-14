import React, { useContext } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Button } from "../../components/Button";
import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { Flashcard } from "../../components/Flashcard";
import { FlashcardContext } from "../../providers/FlashcardProvider";

// eslint-disable-next-line react/prop-types
export function Play ({ navigation, route }) {
	const { flashcardList } = useContext(FlashcardContext);
	const { index } = route.params;

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
			height: 155,
			marginTop: 50,
			marginBottom: 50,
		},
	});

	return (
		<View>
			<Header title="Coleção - Objetos" navigation={ navigation }/>
			<Background>
					<View style={ styles.topContainer }>
						<Text style={ styles.instructionText }>Cartão { index }/{ flashcardList?.length }</Text>
					</View>
					<Flashcard text={ flashcardList[index - 1]?.front }/>
					<TouchableOpacity style={ styles.buttonContainer } onPress={ () => navigation.navigate("Jogar 1", {
						id: index
					}) }>
						<Button text="VIRAR" color="#6A61A1" />
					</TouchableOpacity>
			</Background>
		</View>
	);
}