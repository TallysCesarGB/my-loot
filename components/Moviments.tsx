import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import {
  ContainerMoviments,
  IconView,
  TypeMoviments,
  TypeMovimentsText,
  ValueMoviments,
} from "./styleComponents";

import Icon from "react-native-vector-icons/Feather";

interface MovimentsProps {
  data: any; // Replace 'any' with the actual type of your data
}

export default function Moviments({ data }: MovimentsProps) {
  return (
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
  );
}
