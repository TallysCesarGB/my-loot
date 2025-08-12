import { Stack } from "expo-router";
import AuthProvider from "@/src/context/auth";

export default function Layout() {
  return (
    <AuthProvider>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "#3b3dbf",
            // borderBottomWidth: 1,
            // borderColor: "#00b94a",
          },
          headerTintColor: "white",
          statusBarBackgroundColor: "#f0f4ff",
          statusBarStyle: "dark",
        }}
      >
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" options={{ title: "Voltar" }} />
        <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
      </Stack>
    </AuthProvider>
  );
}
