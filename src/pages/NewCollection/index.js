import * as React from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import { Button } from "../../components/Button";
import { Background } from "../../components/Background";
import { Header } from "../../components/Header";

// eslint-disable-next-line react/prop-types
export function NewCollection ({ navigation }) {
	const styles = StyleSheet.create({
		topContainer: {
			width: "80%",
			marginTop: -80,
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
			width: "100%",
			height: 56,
			marginTop: 12,
			textAlign: "left",
			backgroundColor: "#FFFFFF",
			borderBottomColor: "#707070",
			borderTopRightRadius: 10,
			borderTopLeftRadius: 10
		},
		description: {
			width: "100%",
			height: 118,
			marginTop: 12,
			textAlign: "left",
			backgroundColor: "#FFFFFF",
			borderBottomColor: "#707070",
			borderTopRightRadius: 10,
			borderTopLeftRadius: 10
		},
		imageInput: {
			width: "100%",
			height: 190,
			marginTop: 12,
			textAlign: "left",
			backgroundColor: "#FFFFFF",
			borderBottomColor: "#707070",
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
						<Text style={ styles.instructionText }>Preencha os dados referente à coleção a ser criada</Text>
					</View>

					<View style={styles.form}>
						<TextInput
							style={styles.name}
							label="E-mail"
							keyboardType="ascii-capable"
							placeholder="Insira o nome do objeto"
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
						<Button text="CADASTRAR" color="#6A61A1" />
						<Button text="CANCELAR" color="#423F5D" border/>
					</View>
			</Background>
		</View>
	);
}