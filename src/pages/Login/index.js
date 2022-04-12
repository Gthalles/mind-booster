import React from "react";
import { Button, TextInput, Text, View, StyleSheet, Image } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Background } from "../../components/Background";
import { Section } from "../../components/Section";
import mindBoosterImage from "../../assets/mind-booster.png";

const styles = StyleSheet.create({
	sectionTitle: {
		fontSize: 24,
		fontWeight: "600",
		color: Colors.White,
	},
	logo: {
		marginTop: 47,
		alignSelf: "center",
		width: 132,
		height: 132,
	},
	logoImage: {
		width: "100%",
	},
	title: {
		fontSize: 56,
		color: "#FFFFFF",
	},
	form: {
		width: "100%",
		display: "flex",
		alignItems: "center",
		justifyContent: "space-around",
	},
	input: {
		width: "100%",
		marginTop: 12,
		backgroundColor: "#FFFFFF",
		borderBottomColor: "#707070",
	},
	link: {
		marginTop: 5,
		color: "#FFFFFF",
		fontWeight: "700",
		alignSelf: "flex-end"
	},
	buttonContainer: {
		height: 200,
		marginTop: 21,
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between"
	},
});

export const Login = () => {
	return (
		<Background>
			<Section>
				<View style={styles.logo}>
					<Image source={mindBoosterImage} style={styles.logoImage} />
				</View>
				<Text style={styles.title}>MindBooster</Text>

				<View style={styles.form}>
					<TextInput
						style={styles.input}
						label="E-mail"
						keyboardType="ascii-capable"
						placeholder="email@exemplo.com.br"
					/>
					<TextInput
						style={styles.input}
						label="Senha"
						keyboardType="ascii-capable"
						autoComplete="password"
						placeholder="Insira sua senha"
					/>
					<Text style={styles.link}>Esqueci a senha</Text>
				</View>
				<View style={ styles.buttonContainer }>
					<Button title="ENTRAR" color="#6A61A1" />
					<Button title="CADASTRE-SE" color="#B58D97" />
				</View>
			</Section>
		</Background>
	);
};
