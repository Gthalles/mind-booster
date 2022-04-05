import React from "react";
import {Button, TextInput, Text, View, StyleSheet} from "react-native";
import {Colors} from "react-native/Libraries/NewAppScreen";
import {Section} from "../../components/Section/Section";

export const Login = () => {
  return (
    <View>
      <Section title="Preencha os dados do seu cadastro">
        <TextInput
          style={styles.input}
          keyboardType="ascii-capable"
          placeholder="email@exemplo.com.br"
        />
        <TextInput
          style={styles.input}
          keyboardType="ascii-capable"
          placeholder="Insira sua senha"
        />
        <Button title="ENTRAR" color="#6A61A1" />
        <Button title="CADASTRE-SE" color="#B58D97" />
      </Section>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    backgroundColor: "blue",
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: Colors.White,
  },
  input: {
    backgroundColor: "#FFFFFF",
  },
});
