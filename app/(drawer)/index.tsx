import React, { useContext, useEffect, useState } from "react";
import { View, Text, Button, ActivityIndicator } from "react-native";
import { AuthContext } from "@/src/context/auth";
import Header from "@/components/Header";
import Moviments from "@/components/Moviments";
import { Background } from "@/src/styles/styleSingInUP";
import {
  MovimentsArea,
  MovimentsList,
  MovimentsTitle,
} from "@/components/styleComponents";
import { TouchableOpacity } from "react-native-gesture-handler";

import api from "@/src/services/api";
import { format } from "date-fns";
import { useIsFocused } from "@react-navigation/native";
import BalanceCard from "@/components/BalanceCard";
import { ListCardsBalance } from "@/components/styleComponents";
import Icon from "react-native-vector-icons/MaterialIcons";

interface BalanceItem {
  tag: string;
  saldo: number;
}

export default function Home() {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error("AuthContext must be used within an Auth");
  }

  const { signOut, user } = authContext;

  const isFocused = useIsFocused();
  const [listBalance, setListBalance] = useState<BalanceItem[]>([]);
  const [dateMovements, setDateMovements] = useState(new Date());
  const [loading, setLoading] = useState(true);
  const [moviments, setMoviments] = useState([]);

  useEffect(() => {
    let isActive = true;

    async function getMovements() {
      try {
        setLoading(true);
        const dateFormatted = format(dateMovements, "dd/MM/yyyy");

        const receives = await api.get("/receives", {
          params: { date: dateFormatted },
        });
        const { data } = await api.get("/balance", {
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
          params: { date: dateFormatted },
        });
        console.log("Token enviado:", user?.token);

        if (isActive) {
          setMoviments(receives.data);
          setListBalance(data);
        }
      } catch (error) {
        console.error("Error fetching balance:", error);
      } finally {
        if (isActive) setLoading(false);
      }
    }

    getMovements();
    return () => {
      isActive = false;
    };
  }, [isFocused, dateMovements]);

  return (
    <Background>
      <Header title="Minhas Movimentações" />
      {loading ? (
        <ActivityIndicator
          size={"large"}
          color="#3b3dbf"
          style={{ justifyContent: "center", alignItems: "center" }}
        />
      ) : (
        <ListCardsBalance
          data={listBalance}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item: BalanceItem) => item.tag}
          renderItem={({ item }: { item: BalanceItem }) => (
            <BalanceCard data={item} />
          )}
        />
      )}

      <MovimentsArea>
        <TouchableOpacity>
          <Icon name="event" size={30} color="#121212" />
        </TouchableOpacity>
        <MovimentsTitle>Ultimas Movimentações</MovimentsTitle>
      </MovimentsArea>

      <MovimentsList
        data={moviments}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item: any) => item.id}
        renderItem={({ item }: { item: any }) => <Moviments data={item} />}
      />

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
