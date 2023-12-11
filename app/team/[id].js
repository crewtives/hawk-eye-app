import * as React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import useMatches from "../../hooks/useTeamMatches";
import usePlayers from "../../hooks/useTeamPlayers";
import MatchesTable from "../../components/matchesTable";
import PlayersTable from "../../components/playersTable";
import { useAtom } from "jotai";
import { titleAtom } from "../../store";

export default function Team() {
  const [title, setTitle] = useAtom(titleAtom);
  const { id, name } = useLocalSearchParams();
  const matches = useMatches(id);
  const players = usePlayers(id);

  React.useEffect(() => {
    setTitle(name);
  }, [name]);

  return (
    <>
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
