import React from "react";
import { styles } from "./styles";
import { TextInput, Text, View, Image, TouchableOpacity } from "react-native";
import { Background } from "../../components/Background";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { ErrorMessage } from "../../components/ErrorMessage";
import mindBoosterImage from "../../assets/mind-booster.png";
import { useNavigation } from "@react-navigation/native";

export const SignUp = () => {
	const navigation = useNavigation();

	return (
		<>
			<Background>
				<View style={ styles.header }>
					<Image source={ mindBoosterImage } style={ styles.logoImage } />
					<Text style={ styles.title }>MindBooster</Text>
				</View>
				<Section>
					<Text style={ styles.textContent }>Preencha os dados do seu cadastro</Text>

					<View style={ styles.form }>
						<TextInput
							style={ styles.input }
							label="E-mail"
							keyboardType="ascii-capable"
							placeholder="email@exemplo.com.br"
						/>
						<TextInput
							style={ styles.input }
							label="Senha"
							keyboardType="ascii-capable"
							autoComplete="password"
							placeholder="Defina sua senha"
						/>
						<TextInput
							style={ styles.input }
							label="Senha"
							keyboardType="ascii-capable"
							autoComplete="password"
							placeholder="Confirme sua senha"
						/>
						<ErrorMessage message={ "Senha não confere" } />
					</View>
					<View style={ styles.buttonContainer }>
						<TouchableOpacity onPress={ () => navigation.navigate("Login") }>
							<Button text="CADASTRAR" color="#6A61A1" />
						</TouchableOpacity>
					</View>
				</Section>
			</Background>
		</>
	);
};
