import React, { useContext } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { Link } from "@react-navigation/native";
import { Background } from "../../components/Background";
import { CollectionCard } from "../../components/CollectionCard";
import { Header } from "../../components/Header";
import { CollectionContext } from "../../providers/CollectionsProvider";


// eslint-disable-next-line react/prop-types
export function MyCollections ({ navigation }) {
	const { collectionList } = useContext(CollectionContext);

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
						{
							collectionList?.map((collection) => {
								return (
									<CollectionCard key={ collection.id } id={ collection.id } title={ collection.title } />
								);
							})
						}
					</View>
				</Background>
			</ScrollView>
			<View style={ styles.button }>
				<Link to="/Nova Coleção">
					<Text style={styles.addIcon}>+</Text>
				</Link>
			</View>
		</View>
	);
}