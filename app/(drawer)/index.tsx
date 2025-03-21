import React, { useContext } from "react";
import { View, Text, Button } from "react-native";
import { AuthContext } from "@/src/context/auth";

export default function Home() {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error("AuthContext must be used within an Auth");
  }

  const { signOut, user } = authContext;

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home Screen</Text>
      <Text>Welcome, {user?.name} </Text>
      <Button title="Sign Out" onPress={signOut} />
    </View>
  );
}
