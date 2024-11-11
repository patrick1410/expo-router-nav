import { Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

const Chat = () => {
  return (
    <SafeAreaView>
      <Text>Route: "/chat"</Text>
      <Text>Chat</Text>
      <Link href={"/(home)"}>Go to Home</Link>
    </SafeAreaView>
  );
};

export default Chat;
