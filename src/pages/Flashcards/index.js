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

						<View style={ styles.buttonContainer }>
							<Button text="Jogar!" width={ 157 } color="#57966A" href="Jogar"/>
						</View>

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
				<Link to="/Novo Flashcard">
					<Text style={ styles.addIcon }>+</Text>
				</Link>
			</View>
		</View>
	);
}