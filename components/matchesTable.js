import * as React from "react";
import { DataTable } from "react-native-paper";

const MatchesTable = ({ matches }) => {
  const [page, setPage] = React.useState(0);
  const [itemsPerPage, setItemsPerPage] = React.useState(10);
  const from = page * itemsPerPage;
  const to = (page + 1) * itemsPerPage;
  const numberOfItemsPerPageList = [10, 20, 30];

  const onItemsPerPageChange = React.useCallback((value) => {
    setItemsPerPage(value);
  }, []);

  const items = matches.map((match) => ({
    key: match.id,
    league: match.leagueName,
    status: match.matchStatus,
    homeTeam: match.matchHomeTeamName,
    awayTeam: match.matchAwayTeamName,
    scoreHome: match.matchHomeTeamScore,
    scoreAway: match.matchAwayTeamScore,
  }));
  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>League</DataTable.Title>
        <DataTable.Title>Home Team</DataTable.Title>
        <DataTable.Title>Away Team</DataTable.Title>
        <DataTable.Title>Status</DataTable.Title>
      </DataTable.Header>

      {items.map((item, index) => (
        <DataTable.Row>
          <DataTable.Cell>{item.league}</DataTable.Cell>
          <DataTable.Cell>
            ({item.scoreHome || 0}) - {item.homeTeam}
          </DataTable.Cell>
          <DataTable.Cell>
            ({item.scoreAway || 0}) - {item.awayTeam}
          </DataTable.Cell>
          <DataTable.Cell>{item.status || "Pending"}</DataTable.Cell>
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

export default MatchesTable;
