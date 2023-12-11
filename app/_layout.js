import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { PaperProvider } from "react-native-paper";
import { Appbar } from "react-native-paper";
import { useAtom } from "jotai";
import { titleAtom } from "../store";
import { router } from "expo-router";
import { usePathname } from "expo-router";

export default function HomeLayout() {
  const [title, setTitle] = useAtom(titleAtom);
  const path = usePathname();
  // check active route and set title
  console.log("usePathname", path);

  return (
    <PaperProvider>
      <Appbar.Header>
        {path.includes("team") && (
          <Appbar.BackAction
            onPress={() => {
              setTitle("Select Team");
              router.back();
            }}
          />
        )}
        <Appbar.Content title={title} />
      </Appbar.Header>
      <StatusBar style="auto" />
      <Slot />
    </PaperProvider>
  );
}
