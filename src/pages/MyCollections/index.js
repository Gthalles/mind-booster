import * as React from "react";
import { Text, View, StyleSheet, ScrollView, Button } from "react-native";
import { Background } from "../../components/Background";
import { CollectionCard } from "../../components/CollectionCard";
import { Header } from "../../components/Header";


// eslint-disable-next-line react/prop-types
export function MyCollections ({ navigation }) {
	const styles = StyleSheet.create({
		section: {
			height: "100%",
			margin: "auto",
			marginTop: 20
		},
		button: {
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
				<Header title="Minhas coleções" navigation={ navigation }/>
				<Background>
					<View style={ styles.section }>
						<CollectionCard title="Objetos" />
						<CollectionCard title="Cores" />
						<CollectionCard title="Animais" />
						<CollectionCard title="Adjetivos" />
						<CollectionCard title="Pronomes" />
					</View>
				</Background>
			</ScrollView>
			<View style={ styles.button }>
				<Text style={styles.addIcon}>+</Text>
			</View>
		</View>
	);
}