import { StatusBar } from "expo-status-bar";
import { PaperProvider } from "react-native-paper";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { Appbar, Menu } from "react-native-paper";
import { useLocalSearchParams } from "expo-router";
import useMatches from "../../hooks/useTeamMatches";
import usePlayers from "../../hooks/useTeamPlayers";
import MatchesTable from "../../components/matchesTable";
import PlayersTable from "../../components/playersTable";

export default function Team() {
  const { id } = useLocalSearchParams();
  const matches = useMatches(id);
  const players = usePlayers(id);

  console.log(players);
  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="Select Team" />
      </Appbar.Header>
      <ScrollView style={styles.container}>
        <MatchesTable matches={matches} />
        <PlayersTable players={players} />
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
