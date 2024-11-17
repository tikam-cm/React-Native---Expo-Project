import { Stack } from "expo-router";
import React from "react";
import GlobalProvider from "../context/GlobalProvider";

// Import your global CSS file
import "../global.css";

export default function RootLayout() {
  return (
    <GlobalProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="/search/[query]" options={{ headerShown: false }} />
      </Stack>
    </GlobalProvider>
  );
}
