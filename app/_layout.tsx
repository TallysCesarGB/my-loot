import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#3b3dbf" },
        headerTintColor: "white",
        statusBarBackgroundColor: "#f0f4ff",
        statusBarStyle: "dark",
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="SignUp" options={{ title: "Voltar" }} />
    </Stack>
  );
}
