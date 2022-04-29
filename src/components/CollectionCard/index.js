import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import Icon  from "react-native-vector-icons/FontAwesome";

import ball from "../../assets/icons/ball.png";
import bear from "../../assets/icons/bear.png";
import colors from "../../assets/icons/colors.png";
import tree from "../../assets/icons/tree.png";
import arrow from "../../assets/icons/arrow.png";


export const CollectionCard = ({ title }) => {

	function handleCardImage (imageText) {
		if (imageText === "Objetos") {
			return ball;
		} else if (imageText === "Animais") {
			return bear;
		} else if (imageText === "Cores") {
			return colors;
		} else if (imageText === "Adjetivos") {
			return tree;
		} else if (imageText === "Pronomes") {
			return arrow;
		}

		return arrow;
	}

	const styles = StyleSheet.create({
		cardBackground: {
			backgroundColor: "#FFF",
			width: 374,
			height: 126,
			marginVertical: 10,
			paddingHorizontal: 15,
			display: "flex",
			flexDirection: "row",
			alignItems: "center",
			alignSelf: "center",
			justifyContent: "space-between",
			borderRadius: 13
		},
		cardText: {
			width: 170,
			marginRight: 20,
			fontSize: 36,
			color: "#27ACA7",
			fontWeight: "bold"
		},
		control: {
			height: "100%",
			flexDirection: "column",
			justifyContent: "space-around"
		}
	});

	return (
		<View style={ styles.cardBackground }>
			<Image source={ handleCardImage(title) } />
			<Text style={ styles.cardText }>{ title }</Text>

			<View style={ styles.control }>
				<Icon name="pencil" color="#2680EB" size={ 30 } />
				<Icon name="trash-o" color="#FF0C0C" size={ 30 } />
			</View>
		</View>
	);
};



