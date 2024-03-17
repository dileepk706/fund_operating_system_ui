import Card from "../../../components/cards/Card";
import PageHeadline from "../../../components/headline/PageHeadline";
import NotFound from "../../../components/no-data/NotFound";
import Table from "../../../components/table/Table";
import TableHead from "../../../components/table/TableHead";
import TablePagination from "../../../components/table/TablePagination";
import PositionsTabletoolbar from "../PositionsTabletoolbar";
import PotionsTableRow from "../PostionsTableRow";
import useGetPositions from "../useGetpositions";

const PositionsListVew = () => {
  const { positions } = useGetPositions();

  return (
    <>
      <PageHeadline heading="Positions" />
      <PositionsTabletoolbar />
      <Card>
        <Table>
          <TableHead labels={labels} />
          {positions && positions.length ? (
            positions.map((e) => <PotionsTableRow key={e._id} row={e} />)
          ) : (
            <NotFound />
          )}
        </Table>
        <TablePagination />
      </Card>
    </>
  );
};

export default PositionsListVew;

const labels = [
  "Stock",
  "Sector",
  "Buying Price",
  "Date",
  "Target",
  "SL",
  "LTP",
  "Unit-PL",
  "Total-PL",
  "ROI",
  "Action",
];
