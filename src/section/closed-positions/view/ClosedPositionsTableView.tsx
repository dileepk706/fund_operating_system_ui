import Card from "../../../components/cards/Card";
import PageHeadline from "../../../components/headline/PageHeadline";
import NotFound from "../../../components/no-data/NotFound";
import Table from "../../../components/table/Table";
import TableHead from "../../../components/table/TableHead";
import TablePagination from "../../../components/table/TablePagination";
import useBoolean from "../../../hooks/useBoolean";
import ClosedPositionTableToolbar from "../ClosedPositionTableToolbar";
import ClosedPositionTableRow from "../ClosedPositionTableRow";
import useGetClosedPositions from "../useGetClosedPositions";
import useFromAndTo from "../../../hooks/useFromAndTo";
import { useCallback, useEffect, useReducer, useState } from "react";
import { Orderby, Sortby } from "../../../api/APIs";
import DateRangeSelector from "../../../components/calendar/DateRangeSelector";
import Button from "../../../components/button/Button";

const ClosedPositionsListVew = () => {
  const isFiltersAdded = useBoolean();
  const onOpenDateRangeSelector = useBoolean();
  const { from, to, changeFromAndTo } = useFromAndTo({ From: null, To: null });

  const [sort, setSort] = useState<Sortby>("updatedOn");
  const [orderBy, setOrderBy] = useState<Orderby>("desc");

  const filterReducerMethod = (filters: Filter, action: any) => {
    isFiltersAdded.onTrue();
    switch (action.type) {
      case "STRIKE_TARGET":
        return { ...filters, strikeTarget: action.payload };
      case "STRIKE_SL":
        return { ...filters, strikeSl: action.payload };
      case "PROFIT":
        return { ...filters, profit: action.payload };
      case "LOSS":
        return { ...filters, loss: action.payload };
      case "STOCK":
        return { ...filters, stock: action.payload };
      case "SECTOR":
        return { ...filters, sector: action.payload };
      default:
        isFiltersAdded.onFalse();
        return initialFilters;
    }
  };

  const [filterOptions, dispatch] = useReducer(
    filterReducerMethod,
    initialFilters
  );

  const setSortHelper = useCallback((sv: Sortby) => {
    setSort(sv);
  }, []);

  const setOrderByHelper = useCallback((sv: Orderby) => {
    setOrderBy(sv);
  }, []);

  const strikeTarget = (filter: boolean) => {
    dispatch({ type: "STRIKE_TARGET", payload: filter });
  };

  const strikeSl = (filter: boolean) => {
    dispatch({ type: "STRIKE_SL", payload: filter });
  };

  const tradesInProfit = (filter: boolean) => {
    dispatch({ type: "PROFIT", payload: filter });
  };

  const tradesInLoss = (filter: boolean) => {
    dispatch({ type: "LOSS", payload: filter });
  };

  const filterName = (filter: string) => {
    dispatch({ type: "STOCK", payload: filter });
  };

  const filterSector = (filter: string) => {
    dispatch({ type: "SECTOR", payload: filter });
  };

  const getClosedPositionsConfig = useCallback(
    () => ({
      refresh: false,
      from,
      to,
      orderBy,
      sort,
      filter: filterOptions,
    }),
    [filterOptions, from, to, orderBy, sort]
  );

  const { closedPositions } = useGetClosedPositions(getClosedPositionsConfig());

  return (
    <>
      <PageHeadline heading="Closed positions" />
      <ClosedPositionTableToolbar
        onOpenDateRangeSelector={onOpenDateRangeSelector.onTrue}
        setOrderByHelper={setOrderByHelper}
        setSortHelper={setSortHelper}
        setRefresh={null}
        filterOptions={filterOptions}
        filterName={filterName}
        filterSector={filterSector}
        strikeSl={strikeSl}
        strikeTarget={strikeTarget}
        tradesInLoss={tradesInLoss}
        tradesInProfit={tradesInProfit}
        isFilterChanged={isFiltersAdded.value}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "end",
        }}
      >
        <Button
          size="small"
          style={{
            display: isFiltersAdded.value ? "block" : "none",
          }}
          onClick={() => {
            dispatch({ type: "" });
          }}
        >
          Clear All Filters
        </Button>
      </div>
      <Card>
        <Table>
          <TableHead labels={labels} />
          {closedPositions && closedPositions.length ? (
            closedPositions.map((e) => (
              <ClosedPositionTableRow key={e._id} position={e} />
            ))
          ) : (
            <NotFound />
          )}
        </Table>
        <TablePagination
          length={0}
          page={1}
          rowsPerPage={10}
          nextDisabled
          prevDisabled
        />
      </Card>
      <DateRangeSelector
        setState={changeFromAndTo}
        onClose={onOpenDateRangeSelector.onFalse}
        open={onOpenDateRangeSelector.value}
      />
    </>
  );
};

export default ClosedPositionsListVew;

const initialFilters: Filter = {
  strikeTarget: false,
  strikeSl: false,
  profit: false,
  loss: false,
  sector: "",
  stock: "",
};
const labels = [
  "Stock",
  "Bought Date",
  "Sell Date",
  "Hold Period",
  "Buying Price",
  "Selling Price",
  "Quantity",
  "Invested",
  "Sold Value",
  "Net Profit",
  "ROI",
  "Strike Target",
  "Strike SL",
  "Sector",
];

type Filter = {
  strikeTarget: boolean;
  strikeSl: boolean;
  loss: boolean;
  profit: boolean;
  sector: string;
  stock: string;
};
