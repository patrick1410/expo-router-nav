// Entry level redirector

import { Redirect } from "expo-router";

export default function Page() {
  const isLoggedIn = false;

  return isLoggedIn ? (
    <Redirect href={"/(home)"} />
  ) : (
    <Redirect href={"/(auth)"} />
  );
}
