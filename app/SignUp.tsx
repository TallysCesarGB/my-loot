import React, { useContext, useState } from "react";
import {
  AreaInput,
  Background,
  SubmitButton,
  Container,
  SubmitText,
  Input,
} from "@/src/styles/styleSingInUP";
import { Platform, ActivityIndicator } from "react-native";
import { AuthContext } from "@/src/context/auth";

export default function SingIn() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error("AuthContext must be used within an AuthProvider");
  }

  const { signUp, loading } = authContext;

  function handleSingUp() {
    if (!name || !email || !password) {
      alert("Preencha todos os campos");
      return;
    }
    signUp({ name, email, password });
  }

  return (
    <Background>
      <Container behavior={Platform.OS === "ios" ? "padding" : ""} enabled>
        <AreaInput>
          <Input
            placeholder="Nome"
            value={name}
            onChangeText={(name: string) => setName(name)}
          />
        </AreaInput>
        <AreaInput>
          <Input
            placeholder="Email"
            value={email}
            onChangeText={(email: string) => setEmail(email)}
          />
        </AreaInput>
        <AreaInput>
          <Input
            placeholder="Senha"
            secureTextEntry
            value={password}
            onChangeText={(pass: string) => setPassword(pass)}
          />
        </AreaInput>

        <SubmitButton activeOpacity={0.8} onPress={handleSingUp}>
          {loading ? (
            <ActivityIndicator size={20} color="#FFF" />
          ) : (
            <SubmitText>Acessar</SubmitText>
          )}
        </SubmitButton>
      </Container>
    </Background>
  );
}
