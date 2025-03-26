import React, { useContext, useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import { AuthContext } from "@/src/context/auth";
import Header from "@/components/Header";
import { Background } from "@/src/styles/styleSingInUP";

import api from "@/src/services/api";
import { format } from "date-fns";
import { useIsFocused } from "@react-navigation/native";

export default function Home() {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error("AuthContext must be used within an Auth");
  }

  const { signOut, user } = authContext;

  const isFocused = useIsFocused();
  const [listBalance, setListBalance] = useState([]);
  const [dateMovements, setDateMovements] = useState(new Date());

  useEffect(() => {
    let isActive = true;

    async function getMovements() {
      let dateFormatted = format(dateMovements, "dd/MM/yyyy");

      const balance = await api.get("/balance", {
        params: {
          date: dateFormatted,
        },
      });

      if (isActive) {
        setListBalance(balance.data);
      }
    }

    getMovements();
    return () => {
      isActive = false;
    };
  }, [isFocused]);

  return (
    <Background>
      <Header title="Minhas Movimentações" />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Home Screen</Text>
        <Text>Welcome, {user?.name} </Text>
        <Button title="Sign Out" onPress={signOut} />
      </View>
    </Background>
  );
}
