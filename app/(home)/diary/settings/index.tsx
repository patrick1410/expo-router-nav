import { Text, StatusBar } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Settings = () => {
  return (
    <SafeAreaView style={{ paddingTop: StatusBar.currentHeight }}>
      <Text>Route: "/diary/settings"</Text>
      <Text>Settings</Text>
    </SafeAreaView>
  );
};

export default Settings;
