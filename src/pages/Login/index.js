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
  form: {
    width: "90%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  input: {
    backgroundColor: "#FFFFFF",
  },
  passwordInput: {},
  link: {
    color: "#FFFFFF",
    fontWeight: "700",
  },
});

export const Login = () => {
  return (
    <Background>
      <Section>
        <Image source={mindBoosterImage} />
        <Text>MindBooster</Text>
        <TextInput
          style={styles.input}
          keyboardType="ascii-capable"
          placeholder="email@exemplo.com.br"
        />
        <TextInput
          style={styles.input}
          keyboardType="ascii-capable"
          autoComplete="password"
          placeholder="Insira sua senha"
        />
        <Text style={styles.link}>Esqueci a senha</Text>
        <Button title="ENTRAR" color="#6A61A1" />
        <Button title="CADASTRE-SE" color="#B58D97" />
      </Section>
    </Background>
  );
};
