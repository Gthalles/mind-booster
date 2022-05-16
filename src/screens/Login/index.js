import React from "react";
import { styles } from "./styles";
import { TextInput, Text, View, Image, TouchableOpacity } from "react-native";
import { Background } from "../../components/Background";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import mindBoosterImage from "../../assets/mind-booster.png";
import { useNavigation } from "@react-navigation/native";

export const Login = () => {
	const navigation = useNavigation();

	return (
		<>
			<Background>
				<Section>
					<View style={styles.logo }>
						<Image source={ mindBoosterImage } style={ styles.logoImage } />
					</View>
					<Text style={ styles.title }>MindBooster</Text>

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
							placeholder="Insira sua senha"
						/>
						<Text style={ styles.link }>Esqueci a senha</Text>
					</View>
					<View style={ styles.buttonContainer }>
						<TouchableOpacity onPress={ () => navigation.navigate("Minhas coleções") }>
							<Button text="ENTRAR" color="#6A61A1" />
						</TouchableOpacity>
						<TouchableOpacity onPress={ () => navigation.navigate("SignUp") }>
							<Button text="CADASTRE-SE" color="#B58D97" />
						</TouchableOpacity>
					</View>
				</Section>
			</Background>
		</>
	);
};
