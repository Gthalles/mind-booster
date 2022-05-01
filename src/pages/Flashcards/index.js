import * as React from "react";
import { Text, View, StyleSheet, ScrollView, Button, TextInput } from "react-native";
import { Background } from "../../components/Background";
import { CollectionCard } from "../../components/CollectionCard";
import { Header } from "../../components/Header";
import Icon  from "react-native-vector-icons/FontAwesome";
import { ObjectCard } from "../../components/ObjectCard";


// eslint-disable-next-line react/prop-types
export function FlashCards ({ navigation }) {
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
							style={styles.input}
							keyboardType="ascii-capable"
							placeholder="Pesquise por um objeto.."
							label="search"
							returnKeyLabel="search"
						/>

						<View style={ styles.buttonContainer }>
							<Button title="Jogar!" color="#57966A"/>
						</View>

						<ObjectCard front="Árvore" back="Tree" />
						<ObjectCard front="Janela" back="Window" />
						<ObjectCard front="Porta" back="Door" />
						<ObjectCard front="Parede" back="Wall" />
						<ObjectCard front="Chão" back="Floor" />
						<ObjectCard front="Cozinha" back="Kitchen" />
						<ObjectCard front="Quarto" back="Bedroom" />
					</View>
				</Background>
			</ScrollView>
			<View style={ styles.addButton }>
				<Text style={styles.addIcon}>+</Text>
			</View>
		</View>
	);
}