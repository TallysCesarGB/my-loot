import React from "react";
import { View, Text } from "react-native";
import { Link } from "expo-router";

// SignIn.tsx

export default function SingIn() {
  return (
    <View>
      <Text>Sign In</Text>
      <Text>
        Don't have an account? <Link href="/SignUp">Sign Up</Link>
      </Text>
    </View>
  );
}
