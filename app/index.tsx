import React, { useContext, useState } from "react";
import { Link } from "expo-router";
import {
  AreaInput,
  Background,
  SubmitButton,
  Container,
  Logo,
  SubmitText,
  Input,
  LinkText,
} from "@/src/styles/styleSingInUP";
import { Platform, ActivityIndicator } from "react-native";
import { AuthContext } from "@/src/context/auth";

export default function SingIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error("AuthContext must be used within an AuthProvider");
  }

  const { signIn, loadingAuth, loading } = authContext;

  function handleSingIn() {
    signIn(email, password);
  }

  if (loading) {
    return (
      <Background
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <ActivityIndicator size={"large"} color="#131313" />
      </Background>
    );
  }

  return (
    <Background>
      <Container behavior={Platform.OS === "ios" ? "padding" : ""} enabled>
        <Logo source={require("@/src/assets/Logo.png")} />
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

        <SubmitButton activeOpacity={0.8} onPress={handleSingIn}>
          {loadingAuth ? (
            <ActivityIndicator size={20} color="#FFF" />
          ) : (
            <SubmitText>Acessar</SubmitText>
          )}
        </SubmitButton>
        <Link href="/SignUp">
          <LinkText>Crie uma conta gratuita</LinkText>
        </Link>
      </Container>
    </Background>
  );
}
