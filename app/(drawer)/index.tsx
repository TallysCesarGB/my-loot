import React, { useContext } from "react";
import { View, Text, Button } from "react-native";
import { AuthContext } from "@/src/context/auth";
import Header from "@/components/Header";
import { Background } from "@/src/styles/styleSingInUP";

export default function Home() {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error("AuthContext must be used within an Auth");
  }

  const { signOut, user } = authContext;

  return (
    <Background>
      <Header title="Minhas Movimentações" />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Home Screen</Text>
        <Text>Welcome, {user?.name} </Text>
        <Button title="Sign Out" onPress={signOut} />
      </View>
    </Background>
  );
}
