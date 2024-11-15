import { Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

const Feedback = () => {
  return (
    <SafeAreaView>
      <Text>Route: "/feedback"</Text>
      <Text>Feedback</Text>
      <Link href={"/(home)"}>Go to Home</Link>
    </SafeAreaView>
  );
};

export default Feedback;
