import React, { useState, useContext } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import { Button } from "../../components/Button";
import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { CollectionContext } from "../../providers/CollectionsProvider";
import { Link } from "@react-navigation/native";

// eslint-disable-next-line react/prop-types
export const NewCollection = ({ navigation, route }) => {
	const { itemID, title } = route.params;
	const [ collectionTitle, setCollectinTitle ] = useState("");
	const { createCollection } = useContext(CollectionContext);

	const styles = StyleSheet.create({
		topContainer: {
			width: "80%",
			marginTop: -100,
			marginBottom: 30,
		},
		instructionText: {
			color: "#FFF",
			fontSize: 18,
			textAlign: "center"
		},
		form: {
			width: "80%",
			display: "flex",
			alignItems: "center",
			justifyContent: "space-around",
		},
		name: {
			width: 310,
			paddingHorizontal: 10,
			height: 56,
			marginTop: 12,
			textAlign: "left",
			borderTopRightRadius: 5,
			borderTopLeftRadius: 5,
			backgroundColor: "#FFFFFF",
			borderBottomWidth: 3,
			borderBottomColor: "#6200EE",
		},
		description: {
			width: 310,
			paddingHorizontal: 10,
			height: 118,
			marginTop: 12,
			textAlign: "left",
			borderTopRightRadius: 5,
			borderTopLeftRadius: 5,
			backgroundColor: "#FFFFFF",
			borderBottomWidth: 3,
			borderBottomColor: "#6200EE",
		},
		imageInput: {
			width: 310,
			paddingHorizontal: 10,
			height: 190,
			marginTop: 12,
			textAlign: "left",
			borderTopRightRadius: 5,
			borderTopLeftRadius: 5,
			backgroundColor: "#FFFFFF",
			borderBottomWidth: 3,
			borderBottomColor: "#6200EE",
		},
		buttonContainer: {
			width: "80%",
			height: 150,
			marginTop: 15,
			marginBottom: 15,
			display: "flex",
			flexDirection: "column",
			justifyContent: "space-between"
		},
	});

	return (
		<View>
			<Header title="Minhas coleções" navigation={ navigation }/>
			<Background>
					<View style={ styles.topContainer }>
						<Text style={ styles.instructionText }>Preencha os dados referente à coleção a ser editada</Text>
					</View>

					<View style={styles.form}>
						<TextInput
							style={styles.name}
							label="E-mail"
							keyboardType="ascii-capable"
							placeholder="Insira o nome do objeto"
							onChangeText={ text => setCollectinTitle(text) }
						/>
						<TextInput
							style={styles.description}
							label="Senha"
							keyboardType="ascii-capable"
							autoComplete="password"
							placeholder="Insira a descrição do objeto"
						/>

						<TextInput
							style={styles.imageInput}
							label="Senha"
							keyboardType="ascii-capable"
							autoComplete="password"
							placeholder="Faça o upload da imagem"
						/>
					</View>
					<View style={ styles.buttonContainer }>
						<Link to="/Minhas coleções" onPress={ () => createCollection({ title: collectionTitle }) }>
							<Button text="SALVAR ALTERAÇÕES" color="#6A61A1" />
						</Link>

						<Link to="/Minhas coleções">
							<Button text="CANCELAR" color="#423F5D" border/>
						</Link>
					</View>
			</Background>
		</View>
	);
}