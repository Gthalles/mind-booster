import React from "react";
import { styles } from "./styles";
import { Button, TextInput, Text, View, Image } from "react-native";
import { Background } from "../../components/Background";
import { Section } from "../../components/Section";
import mindBoosterImage from "../../assets/mind-booster.png";

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
