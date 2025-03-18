import React, { useContext } from "react";
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
import { Platform } from "react-native";
import { AuthContext } from "@/src/context/auth";

export default function SingIn() {
  // const authContext = useContext(AuthContext);

  // if (!authContext) {
  //   throw new Error("AuthContext must be used within an AuthProvider");
  // }

  // const { user } = authContext;

  // function handleSingIn() {
  //   console.log(user);
  // }

  return (
    <Background>
      <Container behavior={Platform.OS === "ios" ? "padding" : ""} enabled>
        <Logo source={require("@/src/assets/Logo.png")} />
        <AreaInput>
          <Input placeholder="Email" />
        </AreaInput>
        <AreaInput>
          <Input placeholder="Senha" secureTextEntry />
        </AreaInput>

        <SubmitButton activeOpacity={0.8} /*onPress={handleSingIn}*/>
          <SubmitText>Acessar</SubmitText>
        </SubmitButton>
        <Link href="/SignUp">
          <LinkText>Crie uma conta gratuita</LinkText>
        </Link>
      </Container>
    </Background>
  );
}
