import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { PaperProvider } from "react-native-paper";

export default function HomeLayout() {
  return (
    <PaperProvider>
      <StatusBar style="auto" />
      <Slot />
    </PaperProvider>
  );
}
