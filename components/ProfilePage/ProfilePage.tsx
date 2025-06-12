import React, { useContext } from "react";
import {
  Container,
  Message,
  Name,
  AddRegisterButton,
  AddRegisterButtonText,
  LogoutButton,
  LogoutButtonText,
} from "./ProfilePageStyle";
import Header from "../Header";
import { AuthContext } from "@/src/context/auth";
import { useRouter } from "expo-router";

export default function ProfilePage() {
  const authContext = useContext(AuthContext);
  const router = useRouter();

  if (!authContext) {
    throw new Error("AuthContext deve ser usado dentro de um AuthProvider");
  }

  const { user, signOut } = authContext;

  return (
    <Container>
      <Header title="Meu Perfil" />
      <Message>Hi, Bem vindo de volta!</Message>
      <Name numberOflines={1}>{user && user.name}</Name>
      <AddRegisterButton onPress={() => router.push("/newRegister")}>
        <AddRegisterButtonText>Registrar</AddRegisterButtonText>
      </AddRegisterButton>
      <LogoutButton onPress={signOut}>
        <LogoutButtonText>Sair</LogoutButtonText>
      </LogoutButton>
    </Container>
  );
}
