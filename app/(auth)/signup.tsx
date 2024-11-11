import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { Link } from "expo-router";

const Signup = () => {
  return (
    <SafeAreaView>
      <Text>Route: "/signup"</Text>
      <Text>Signup</Text>
      <Link href={"/"}>Go to Login</Link>
    </SafeAreaView>
  );
};

export default Signup;
