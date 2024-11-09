import { Text, StatusBar } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

const Diary = () => {
  return (
    <SafeAreaView style={{ paddingTop: StatusBar.currentHeight }}>
      <Text>Diary</Text>
      <Link href={"/(home)"}>Go to Home</Link>
    </SafeAreaView>
  );
};

export default Diary;
