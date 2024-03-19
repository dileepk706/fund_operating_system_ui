import { useState } from "react";
import Card from "../../../components/cards/Card";
import PageHeadline from "../../../components/headline/PageHeadline";
import NotFound from "../../../components/no-data/NotFound";
import Table from "../../../components/table/Table";
import TableHead from "../../../components/table/TableHead";
import TablePagination from "../../../components/table/TablePagination";
import { Position } from "../../../types/position/position";
import PositionsTabletoolbar from "../PositionsTabletoolbar";
import PotionsTableRow from "../PostionsTableRow";
import useGetPositions from "../useGetpositions";
import useBoolean from "../../../hooks/useBoolean";

const PositionsListVew = () => {
  const refresh = useBoolean();

  const { positions, setPositions } = useGetPositions({
    refresh: refresh.value,
  });
  const setPositionsHandler = (data: Position) => {
    setPositions([...[data], ...positions]);
  };

  return (
    <>
      <PageHeadline heading="Positions" />
      <PositionsTabletoolbar
        setRefresh={refresh.onToggle}
        setPosition={setPositionsHandler}
      />
      <Card>
        <Table>
          <TableHead labels={labels} />
          {positions && positions.length ? (
            positions.map((e) => <PotionsTableRow key={e._id} row={e} />)
          ) : (
            <NotFound />
          )}
        </Table>
        <TablePagination
          length={positions.length}
          page={1}
          rowsPerPage={10}
          nextDisabled
          prevDisabled
        />
      </Card>
    </>
  );
};

export default PositionsListVew;

const labels = [
  "Stock",
  "Date",
  "Buying Price",
  "Quantity",
  "LTP",
  "T-PL",
  "U-PL",
  "ROI",
  "Target",
  "SL",
  "Sector",
  "Action",
];
