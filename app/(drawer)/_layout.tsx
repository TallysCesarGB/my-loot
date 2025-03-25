import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="index" // This is the name of the page and must match the url from root
          options={{
            headerShown: false,

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
