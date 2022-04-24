import * as React from "react";
import { Text, View } from "react-native";
import { Header } from "../../components/Header";

// eslint-disable-next-line react/prop-types
export function Home ({ navigation }) {
	return (
		<View>
			<Header title="Home" navigation={ navigation }/>
			<Text>Home works</Text>
		</View>
	);
}