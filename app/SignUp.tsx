import React from "react";
import { View, Text } from "react-native";
import { Link } from "expo-router";

// SignIn.tsx

export default function SignIn() {
  return (
    <View>
      <Text>Sign In</Text>
      <Text>
        Don't have an account? <Link href="/">Sign In</Link>
      </Text>
    </View>
  );
}
