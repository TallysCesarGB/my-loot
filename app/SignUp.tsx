import React from "react";
import {
  AreaInput,
  Background,
  SubmitButton,
  Container,
  SubmitText,
  Input,
} from "@/src/styles/styleSingInUP";
import { Platform } from "react-native";

export default function SingIn() {
  return (
    <Background>
      <Container behavior={Platform.OS === "ios" ? "padding" : ""} enabled>
        <AreaInput>
          <Input placeholder="Nome" />
        </AreaInput>
        <AreaInput>
          <Input placeholder="Email" secureTextEntry />
        </AreaInput>
        <AreaInput>
          <Input placeholder="Senha" secureTextEntry />
        </AreaInput>

        <SubmitButton activeOpacity={0.8}>
          <SubmitText>Acessar</SubmitText>
        </SubmitButton>
      </Container>
    </Background>
  );
}
