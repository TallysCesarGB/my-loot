import Header from "@/components/Header";
import RegisterTypes from "@/components/RegisterTypes";
import {
  Background,
  HeaderTitle,
  Input,
  SubmitButton,
  SubmitText,
} from "@/components/styleComponents";
import React, { useState } from "react";
import { Keyboard, Alert } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import api from "@/src/services/api";
import { format } from "date-fns";

export default function NewRegister() {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [type, setType] = useState("receita");

  async function handleRegister() {
    Keyboard.dismiss();

    if (description === "" || value === "") {
      alert("Preencha todos os campos");
      return;
    }
    if (isNaN(parseFloat(value))) {
      alert("Valor inválido");
      return;
    }

    Alert.alert(
      `Confirmação`,
      `Deseja registrar ${type} de ${value} com a descrição: ${description}?`,
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Continuar",
          onPress: () => {
            addRegister();
          },
        },
      ]
    );
  }

  async function addRegister() {
    Keyboard.dismiss();

    await api.post("/receive", {
      description: description,
      value: parseFloat(value),
      type: type,
      date: format(new Date(), "dd/MM/yyyy"),
    });

    setDescription("");
    setValue("");
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Header title="Novo Registro" />
      <Background>
        <Input
          placeholder="Digite a descrição"
          value={description}
          onChangeText={(text: any) => setDescription(text)}
        />
        <Input
          placeholder="Digite o valor"
          keyboardType="numeric"
          value={value}
          onChangeText={(text: any) => setValue(text)}
        />

        <RegisterTypes
          type={type}
          sendTypeChange={(item: string) => setType(item)}
        />

        <SubmitButton onPress={() => handleRegister()}>
          <SubmitText>Registrar</SubmitText>
        </SubmitButton>
      </Background>
    </TouchableWithoutFeedback>
  );
}
