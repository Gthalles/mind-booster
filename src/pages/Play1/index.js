import React, { useContext } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Button } from "../../components/Button";
import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { LargeFlashcard } from "../../components/LargeFlashcard";
import { FlashcardContext } from "../../providers/FlashcardProvider";


// eslint-disable-next-line react/prop-types
export function Play1 ({ navigation, route }) {
	const { id } = route.params;
	const { flashcardList } = useContext(FlashcardContext);

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

	function handleButton () {
		if (id == flashcardList?.length) {
			return (
				<View>
					<TouchableOpacity style={ styles.buttonContainer } onPress={ () => navigation.navigate("Objetos") }>
						<Button text="FINALIZAR" color="#57966A" />
					</TouchableOpacity>
				</View>
			);
		}

		return (
			<View>
				<TouchableOpacity style={ styles.buttonContainer } onPress={ () => navigation.navigate("Jogar", {
					index: id + 1
				}) }>
					<Button text="PRÓXIMO" color="#6A61A1" />
				</TouchableOpacity>
			</View>
		);
	}

	return (
		<View>
			<Header title="Coleção - Objetos" navigation={ navigation }/>
			<Background>
				<View style={ styles.topContainer }>
					<Text style={ styles.instructionText }>Cartão { id }/{ flashcardList?.length }</Text>
				</View>
				<LargeFlashcard frontText={ flashcardList[id - 1]?.front } backText={ flashcardList[id - 1]?.back } />
				<View>
					{ handleButton() }
				</View>
			</Background>
		</View>
	);
}