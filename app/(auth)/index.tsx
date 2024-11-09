import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { Link } from "expo-router";

const Login = () => {
  return (
    <SafeAreaView>
      <Link href={"/(home)"}>Login</Link>
      <Link href={"/signup"}>Go to Signup</Link>
    </SafeAreaView>
  );
};

export default Login;
