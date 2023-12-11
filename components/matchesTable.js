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
    country: match.countryName,
  }));
  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>Country</DataTable.Title>
      </DataTable.Header>

      {items.slice(from, to).map((item) => (
        <DataTable.Row key={item.key}>
          <DataTable.Cell numeric>{item.country}</DataTable.Cell>
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
