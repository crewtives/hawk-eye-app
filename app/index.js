import { StatusBar } from "expo-status-bar";
import { PaperProvider } from "react-native-paper";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { Appbar, Menu } from "react-native-paper";
import useTeam from "../hooks/useTeam";
import { Link } from "expo-router";

export default function App() {
  const teams = useTeam();

  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="Select Team" />
      </Appbar.Header>
      <ScrollView style={styles.container}>
        {teams.map((team) => (
          <Link
            href={{
              pathname: "/team/[id]",
              params: { id: team.teamKey },
            }}
          >
            <Menu.Item key={team.id} title={team.teamName} />
          </Link>
        ))}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 20,
  },
});
