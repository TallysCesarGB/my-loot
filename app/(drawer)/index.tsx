import React, { useContext, useEffect, useState } from "react";
import { Modal, ActivityIndicator } from "react-native";
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
import CalendarModal from "@/components/CalendarModal/CalendarModal";

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
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    let isActive = true;

    async function getMovements() {
      try {
        setLoading(true);
        // const dateFormatted = format(dateMovements, "dd/MM/yyyy");
        let date = new Date(dateMovements);
        let onlyDate = date.valueOf() + date.getTimezoneOffset() * 60000;
        let dateFormatted = format(onlyDate, "dd/MM/yyyy");

        console.log("Data formatada:", dateFormatted);
        console.log("dateMovements:", dateMovements);

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

  async function handleDeleteRegister(id: string) {
    try {
      await api.delete("/receives/delete", {
        params: { item_id: id },
      });

      setDateMovements(new Date());
    } catch (error) {
      console.error("Error deleting register:", error);
    }
  }

  function filterDateMovements(daySelected: Date) {
    console.log("Selected date:", daySelected);
    setDateMovements(daySelected);
  }

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
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Icon name="event" size={30} color="#121212" />
        </TouchableOpacity>
        <MovimentsTitle>Ultimas Movimentações</MovimentsTitle>
      </MovimentsArea>

      <MovimentsList
        data={moviments}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item: any) => item.id}
        renderItem={({ item }: { item: any }) => (
          <Moviments data={item} deleteRegister={handleDeleteRegister} />
        )}
      />

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <CalendarModal
          setModalVisible={() => setModalVisible(false)}
          handleFilterDate={filterDateMovements}
        />
      </Modal>
    </Background>
  );
}
