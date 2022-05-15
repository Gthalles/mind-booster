import React from "react";
import { styles } from "./styles";
import { Text } from "react-native";

export const ErrorMessage = ({ message }) => {
	return (
		<Text style={ styles.errorMessage }>{ message }</Text>
	);
}