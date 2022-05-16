import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Icon  from "react-native-vector-icons/FontAwesome";

Icon.loadFont();
export const Header = ({ title, navigation }) => {

	return (
		<View style={ styles.container }>
			<View style={ styles.containerButton }>
			<TouchableOpacity style={ styles.button } onPress={ () => navigation.openDrawer() }>
					<Icon name="bars" size={ 25 } color={ "#FFFFFF" } />
				</TouchableOpacity>
			</View>

			<View style={ styles.containerTitle }>
				<Text style={ styles.text }>{ title }</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		height: 60,
	},
	button: {
		backgroundColor: "#4A4568"
	},
	text: {
		color: "white",
		fontWeight: "700",
		padding: 5,
		fontSize: 23
	},
	containerTitle: {
		backgroundColor: "#4A4568",
		justifyContent: "center",
		width: "100%"
	},
	containerButton: {
		justifyContent: "center",
		backgroundColor: "#4A4568",
		paddingHorizontal: 10
	}
});