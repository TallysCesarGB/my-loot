import React, { useState } from "react";
import {
  RegisterContainer,
  RegisterTypeButton,
  RegisterTypeText,
} from "./styleComponents";
import Feather from "react-native-vector-icons/Feather";

interface RegisterTypesProps {
  type: string;
  sendTypeChange: (item: string) => void;
}

export default function RegisterTypes({
  type,
  sendTypeChange,
}: RegisterTypesProps) {
  const [typeChecked, setTypeChecked] = useState(type);

  return (
    <RegisterContainer>
      <RegisterTypeButton
        checked={typeChecked === "receita" ? true : false}
        onPress={() => {
          setTypeChecked("receita");
          sendTypeChange("receita");
        }}
      >
        <Feather name="arrow-up" size={25} color="#121212" />
        <RegisterTypeText>Receita</RegisterTypeText>
      </RegisterTypeButton>
      <RegisterTypeButton
        checked={typeChecked === "despesa" ? true : false}
        onPress={() => {
          setTypeChecked("despesa");
          sendTypeChange("despesa");
        }}
      >
        <Feather name="arrow-down" size={25} color="#121212" />
        <RegisterTypeText>Despesa</RegisterTypeText>
      </RegisterTypeButton>
    </RegisterContainer>
  );
}
