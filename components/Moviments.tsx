import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import {
  ContainerMoviments,
  IconView,
  TypeMoviments,
  TypeMovimentsText,
  ValueMoviments,
} from "./styleComponents";
import { TouchableWithoutFeedback, Alert } from "react-native";
import Icon from "react-native-vector-icons/Feather";

interface MovimentsProps {
  data: {
    id: string;
    type: string;
    value: number;
    // outras propriedades
  };
  deleteRegister: (id: string) => void;
}

export default function Moviments({ data, deleteRegister }: MovimentsProps) {
  function handleDeleteItem() {
    Alert.alert(
      "Deletar item",
      "Você realmente deseja deletar esse registro?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Deletar",
          onPress: () => deleteRegister(data.id),
        },
      ],
      { cancelable: false }
    );
  }

  return (
    <TouchableWithoutFeedback onLongPress={handleDeleteItem}>
      <ContainerMoviments>
        <TypeMoviments>
          <IconView type={data.type}>
            <Icon
              name={data.type === "despesa" ? "arrow-down" : "arrow-up"}
              size={24}
              color="#fff"
            />
            <TypeMovimentsText>{data.type}</TypeMovimentsText>
          </IconView>
        </TypeMoviments>
        <ValueMoviments>R$ {data.value}</ValueMoviments>
      </ContainerMoviments>
    </TouchableWithoutFeedback>
  );
}
