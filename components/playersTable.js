import * as React from "react";
import { DataTable } from "react-native-paper";

const PlayersTable = ({ players }) => {
  const [page, setPage] = React.useState(0);
  const [itemsPerPage, setItemsPerPage] = React.useState(10);
  const from = page * itemsPerPage;
  const to = (page + 1) * itemsPerPage;
  const numberOfItemsPerPageList = [10, 20, 30];

  const onItemsPerPageChange = React.useCallback((value) => {
    setItemsPerPage(value);
  }, []);

  const items = players.map((player) => ({
    key: player.id,
    playerName: player.player_name,
    playerGoals: player.player_goals,
    playerAssists: player.player_assists,
  }));
  items.sort((a, b) => b.playerGoals - a.playerGoals);
  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>Name</DataTable.Title>
        <DataTable.Title>Goals</DataTable.Title>
        <DataTable.Title>Assists</DataTable.Title>
      </DataTable.Header>

      {items.slice(from, to).map((item) => (
        <DataTable.Row key={item.key + item.playerName}>
          <DataTable.Cell>{item.playerName}</DataTable.Cell>
          <DataTable.Cell>{item.playerGoals}</DataTable.Cell>
          <DataTable.Cell>{item.playerAssists}</DataTable.Cell>
        </DataTable.Row>
      ))}

      <DataTable.Pagination
        page={page}
        numberOfPages={Math.ceil(items.length / itemsPerPage)}
        onPageChange={(page) => setPage(page)}
        label={`${from + 1}-${to} of ${items.length}`}
        numberOfItemsPerPageList={numberOfItemsPerPageList}
        numberOfItemsPerPage={itemsPerPage}
        onItemsPerPageChange={onItemsPerPageChange}
        showFastPaginationControls
        selectPageDropdownLabel={"Rows per page"}
      />
    </DataTable>
  );
};

export default PlayersTable;
