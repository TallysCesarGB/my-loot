import React from "react";
import Icon from "react-native-vector-icons/Feather";
import { ButtonDrawer, HeaderComponent, HeaderTitle } from "./styleComponents";
import { Background } from "@/src/styles/styleSingInUP";
import { useNavigation } from "expo-router";
import { DrawerActions } from "@react-navigation/native";

interface HeaderProps {
  title?: string;
}

export default function Header({ title }: HeaderProps) {
  const navigation = useNavigation();

  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <HeaderComponent>
      <ButtonDrawer onPress={openDrawer}>
        <Icon name="menu" size={30} color="#121212" />
      </ButtonDrawer>
      {title && <HeaderTitle>{title}</HeaderTitle>}
    </HeaderComponent>
  );
}
