import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import Icon  from "react-native-vector-icons/FontAwesome";


export const ObjectCard = ({ front, back }) => {
	const styles = StyleSheet.create({
		cardBackground: {
			backgroundColor: "#FFF",
			width: 374,
			height: 74,
			marginVertical: 10,
			paddingHorizontal: 15,
			display: "flex",
			flexDirection: "row",
			alignItems: "center",
			alignSelf: "center",
			justifyContent: "space-between",
			borderRadius: 13
		},
		cardLabel: {
			fontSize: 12,
			color: "#868686"
		},
		cardText: {
			marginRight: 20,
			fontSize: 24,
			color: "#27ACA7",
			fontWeight: "bold"
		},
		control: {
			width: 120,
			height: "100%",
			flexDirection: "row",
			alignItems: "center",
			justifyContent: "space-between"
		}
	});

	return (
		<View style={ styles.cardBackground }>
			<View>
				<Text style={ styles.cardLabel }>Frente</Text>
				<Text style={ styles.cardText }>{ front }</Text>
			</View>

			<View>
				<Text style={ styles.cardLabel }>Verso</Text>
				<Text style={ styles.cardText }>{ back }</Text>
			</View>

			<View style={ styles.control }>
				<Icon name="trash-o" color="#FFF" size={ 30 } />
				<Icon name="pencil" color="#2680EB" size={ 30 } />
				<Icon name="trash-o" color="#FF0C0C" size={ 30 } />
			</View>
		</View>
	);
};



