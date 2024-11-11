import { Text } from "react-native";

import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

const Home = () => {
  return (
    <SafeAreaView>
      <Text>Route: "/"</Text>
      <Text>Home</Text>
      <Link href={"/(auth)"}>Logout</Link>
    </SafeAreaView>
  );
};

export default Home;
