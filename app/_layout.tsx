import { Stack } from "expo-router";

// App returns the stack auth or home
const RootLayout = () => {
  return <Stack screenOptions={{ headerShown: false }} />;
};

export default RootLayout;
