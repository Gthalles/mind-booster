import React, { useContext } from "react";
import { Link } from "@react-navigation/native";
import { Text, View, StyleSheet, ScrollView, TextInput, TouchableOpacity } from "react-native";
import { Button } from "../../components/Button";
import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { ObjectCard } from "../../components/ObjectCard";
import { FlashcardContext } from "../../providers/FlashcardProvider";


export function FlashCards ({ navigation }) {
	const { flashcardList } = useContext(FlashcardContext);

	const styles = StyleSheet.create({
		section: {
			height: "100%",
			margin: "auto",
			marginTop: 20
		},
		input: {
			marginTop: 10,
			width: 364,
			borderTopRightRadius: 5,
			borderTopLeftRadius: 5,
			paddingHorizontal: 10,
			alignSelf: "center",
			textAlign: "left",
			backgroundColor: "#FFFFFF",
			borderBottomWidth: 3,
			borderBottomColor: "#6200EE",
		},
		buttonContainer: {
			marginHorizontal: 120,
			marginVertical: 30
		},
		addButton: {
			position: "absolute",
			width: 50,
			height: 50,
			alignItems: "center",
			justifyContent: "center",
			right: 15,
			top: "85%",
			backgroundColor: "#7A71AF",
			borderRadius: 100

		},
		addIcon: {
			fontSize: 40,
			lineHeight: 45,
			color: "#FFF",
		}
	});

	return (
		<View>
			<ScrollView>
				<Header title="Coleção - Objetos" navigation={ navigation }/>
				<Background>
					<View style={ styles.section }>
						<TextInput
							style={ styles.input }
							keyboardType="ascii-capable"
							placeholder="Pesquise por um objeto.."
							label="search"
							returnKeyLabel="search"
						/>

						<TouchableOpacity style={ styles.buttonContainer } onPress={ () => navigation.navigate("Jogar", {
							index: 1
						}) }>
							<Button text="Jogar!" width={ 157 } color="#57966A" href="Jogar"/>
						</TouchableOpacity>

						{
							flashcardList?.map((flashcard) => {
								return (
									<ObjectCard key={ flashcard.id } id={ flashcard.id } front={ flashcard.front } back={ flashcard.back } />
								);
							})
						}

					</View>
				</Background>
			</ScrollView>
			<View style={ styles.addButton }>
				<TouchableOpacity onPress={ () => navigation.navigate("Novo Flashcard")}>
					<Text style={ styles.addIcon }>+</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}