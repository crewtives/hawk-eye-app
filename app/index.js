import { StyleSheet, ScrollView } from "react-native";
import { Menu } from "react-native-paper";
import useTeam from "../hooks/useTeam";
import { Link } from "expo-router";

export default function App() {
  const teams = useTeam();

  return (
    <>
      <ScrollView style={styles.container}>
        {teams.map((team) => (
          <Link
            href={{
              pathname: "/team/[id]",
              params: { id: team.teamKey, name: team.teamName },
            }}
          >
            <Menu.Item key={team.teamKey} title={team.teamName} />
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
