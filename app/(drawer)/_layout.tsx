import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: "Home",
            headerShown: false,

            drawerItemStyle: {
              marginBottom: 8,
              borderRadius: 16,
            },

            drawerStyle: {
              backgroundColor: "#fff",
              paddingTop: 16,
            },

            drawerActiveBackgroundColor: "#3b3dbf",
            drawerActiveTintColor: "#fff",

            drawerInactiveBackgroundColor: "#f0f2ff",
            drawerInactiveTintColor: "#121212",
          }}
        />
        <Drawer.Screen
          name="newRegister"
          options={{
            drawerLabel: "Novo Registro",
            headerShown: false,

            drawerItemStyle: {
              marginBottom: 8,
              borderRadius: 16,
            },

            drawerStyle: {
              backgroundColor: "#fff",
              paddingTop: 16,
            },

            drawerActiveBackgroundColor: "#3b3dbf",
            drawerActiveTintColor: "#fff",

            drawerInactiveBackgroundColor: "#f0f2ff",
            drawerInactiveTintColor: "#121212",
          }}
        />
        <Drawer.Screen
          name="profilePage"
          options={{
            drawerLabel: "Perfil",
            headerShown: false,

            drawerItemStyle: {
              marginBottom: 8,
              borderRadius: 16,
            },

            drawerStyle: {
              backgroundColor: "#fff",
              paddingTop: 16,
            },

            drawerActiveBackgroundColor: "#3b3dbf",
            drawerActiveTintColor: "#fff",

            drawerInactiveBackgroundColor: "#f0f2ff",
            drawerInactiveTintColor: "#121212",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
