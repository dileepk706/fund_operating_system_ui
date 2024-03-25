import { useEffect, useState } from "react";
import { Orderby, Sortby } from "../../api/APIs";
import { CalendarIcon } from "../../components/Icons/Icons";
import AutoComplete from "../../components/auto-complete/AutoComplete";
import Button from "../../components/button/Button";
import Select from "../../components/inputs/Select";
import TableToolbar from "../../components/table/TableToolbar";
import useBoolean from "../../hooks/useBoolean";
import { NSE_REG_STOCKS, niftyIndexNames } from "../../utils/indices";

type Props = {
  setRefresh: any;
  setSortHelper: (sv: Sortby) => void;
  setOrderByHelper: (sv: Orderby) => void;
  onOpenDateRangeSelector: () => void;
  strikeTarget: (filter: boolean) => void;
  strikeSl: (filter: boolean) => void;
  tradesInProfit: (filter: boolean) => void;
  tradesInLoss: (filter: boolean) => void;
  filterName: (filter: string) => void;
  filterSector: (filter: string) => void;
  filterOptions: any;
  isFilterChanged:boolean
};
const ClosedPositionTableToolbar = ({
  setRefresh,
  setOrderByHelper,
  setSortHelper,
  onOpenDateRangeSelector,
  filterName,
  filterSector,
  strikeSl,
  strikeTarget,
  tradesInLoss,
  tradesInProfit,
  filterOptions,
  isFilterChanged,
}: Props) => {
  const getCurrentLtpLoading = useBoolean();

  const [filterProfitLoss, setFilterProfitLoss] = useState("");
  const [filterTargetSl, setFilterTargetSl] = useState("");
 
  const setStockNameHandler = (v: string) => {
    filterName(v);
  };

  useEffect(()=>{
    if(!isFilterChanged){
      setFilterTargetSl('')
      setFilterProfitLoss('')
    }
  },[isFilterChanged])

  const filter_profit_loss = (e: string) => {
    setFilterProfitLoss(e);
    if (e === "InProfit") {
      tradesInProfit(true);
      tradesInLoss(false);
    } else if (e === "InLoss") {
      tradesInLoss(true);
      tradesInProfit(false);
    } else {
      tradesInProfit(false);
      tradesInLoss(false);
    }
  };

  const filter_target_sl = (e: string) => {
    setFilterTargetSl(e);
    if (e === "strikeTarget") {
      strikeTarget(true);
      strikeSl(false);
    } else if (e === "strikeSl") {
      strikeSl(true);
      strikeTarget(false);
    } else {
      strikeTarget(false);
      strikeSl(false);
    }
  };

  return (
    <>
      <TableToolbar>
        <AutoComplete
          itemsStringArray={NSE_REG_STOCKS}
          setState={setStockNameHandler}
          placeHolder="Search stocks..."
          value={filterOptions.stock}
        />
        <Select
          itemsArray={niftyIndexNames}
          placeholder="Sector"
          value={filterOptions.sector}
          setSate={filterSector}
        />
        <Select
          itemsArray={Status}
          placeholder="Status"
          setSate={filter_profit_loss}
          value={filterProfitLoss}
        />
        <Select
          itemsArray={Status2}
          placeholder="Target"
          setSate={filter_target_sl}
          value={filterTargetSl}
        />

        <Select
          itemsArray={sortBy}
          placeholder="Sort by"
          setSate={setSortHelper}
        />
        <Select
          itemsArray={orderBy}
          placeholder="Order by"
          setSate={setOrderByHelper}
        />
        <Button onClick={onOpenDateRangeSelector} size="small">
          <div
            className="flex justify-center align-center "
            style={{ whiteSpace: "nowrap", gap: 3 }}
          >
            <CalendarIcon /> Date Range
          </div>
        </Button>
        
      </TableToolbar>
    </>
  );
};

export default ClosedPositionTableToolbar;

const Status = ["InProfit", "InLoss"];
const Status2 = ["strikeTarget", "strikeSl"];
const sortBy: Sortby[] = [
  "updatedOn",
  "createdOn",
  "buyingPrice",
  "profit",
  "loss",
  "returnOnInvestment",
  "holdingPeriodInDays",
  "invested",
  "totalProfit",
];
const orderBy = ["asc", "desc"];
