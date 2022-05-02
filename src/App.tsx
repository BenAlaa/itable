import React, { useMemo } from "react";
import Header from "./components/Header";
import Table from "./components/Table";
import tableData from "./data/expanses.json";
import { ColumnData } from "./types";
import PageWrapper from "./components/PageWrapper";
import TableWrapper from "./components/TableWrapper";
import useTable from "./hooks/useTable";
import { moneyToNumber } from "./utils";

function App() {
  const columns: ColumnData[] = useMemo(
    () => [
      {
        id: "departments",
        title: "Department",
        hasSort: true,
      },
      {
        id: "project_name",
        title: "Project Name",
        hasSort: true,
      },
      {
        id: "date",
        title: "Date",
        hasSort: true,
      },
      {
        id: "member_name",
        title: "Name",
        hasSort: true,
      },
      {
        id: "amount",
        title: "Amount",
        hasSort: true,
      },
    ],
    []
  );

  const data: Array<unknown> = useMemo(() => tableData.expanses, []);

  const {
    data: finalData,
    columns: finalColumns,
    aggBy,
    aggOptions,
    handleAggChange,
    aggTotal,
    sortBy,
    handleSortChange,
  } = useTable(data, columns, "amount", moneyToNumber);

  return (
    <PageWrapper>
      <Header />
      <TableWrapper>
        <Table
          title="Expenses"
          data={finalData}
          columns={finalColumns}
          hasAggregator={true}
          aggregatorLabel="Total Expenses By:"
          aggByKey={aggBy}
          aggOptions={aggOptions}
          handleAggChange={handleAggChange}
          aggTotal={{
            label: "Total",
            value: aggTotal.value,
          }}
          sortBy={sortBy}
          handleSortChange={handleSortChange}
        />
      </TableWrapper>
    </PageWrapper>
  );
}

export default App;
