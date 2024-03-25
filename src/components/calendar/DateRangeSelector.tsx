import { memo, useCallback, useState } from "react";
import Modal from "../modal/CustomeModal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Typography from "../typography/Typography";
import { ColorSchema } from "../../theme";
import Button from "../button/Button";
import dayjs from "dayjs";

type Props = {
  setState: ({ from, to }: any) => void;
  open: boolean;
  onClose: () => void;
};
function DateRangeSelector({ setState, onClose, open }: Props) {
  const [startDate, setStartDate] = useState<Date | undefined>(new Date());
  const [endDate, setEndDate] = useState<Date | undefined>(new Date());
  const [error, setError] = useState("");

  const handleDateChange = useCallback((date: Date, type: any) => {
    if (type === "start") {
      setStartDate(date);
    } else {
      setEndDate(date);
    }
    return;
  }, []);

  const submit = () => {
    if (!startDate || !endDate) {
      setError("please select start and end date");
      return;
    }
    if (startDate > endDate) {
      setError("start date should be less than end date");
      return;
    }
    setState({
      from: dayjs(startDate).startOf("date").toDate().getTime(),
      to: dayjs(endDate).endOf("date").toDate().getTime(),
    });
    onClose();
    return;
  };

  const [selectedOpt, setSelectedOpt] = useState<number | null>(null);

  const selectRange = useCallback(
    (index: number) => {
      setSelectedOpt(index);

      const { endOfRange, startOfRange } = rangeMaker(opt[index]);
      setStartDate(startOfRange);
      setEndDate(endOfRange);
    },
    [selectedOpt]
  );

  return (
    <Modal open={open} onClose={onClose}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          padding: 10,
        }}
      >
        <div
          style={{
            padding: 10,
            // backgroundColor: "whitesmoke",
          }}
        >
          {opt.map((e, i) => (
            <div
              onClick={() => {
                selectRange(i);
              }}
            >
              <Options key={i} index={i} label={e} selected={selectedOpt} />
            </div>
          ))}
        </div>
        <div
          style={{
            padding: 25,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              gap: 10,
              color: ColorSchema().INFO.main,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              <Typography variant="subtitle2">Start date</Typography>
              <DatePicker
                onChange={(e: any) => {
                  handleDateChange(e, "start");
                }}
                inline
                selected={startDate}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              <Typography variant="subtitle2">End date</Typography>
              <DatePicker
                selected={endDate}
                onChange={(e: any) => handleDateChange(e, "end")}
                inline
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px 0px 0 10px",
            }}
          >
            <Typography style={{ color: "red" }} variant="captionUltra">
              {error}
            </Typography>
            <Button onClick={submit} size="small">
              Apply
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default memo(DateRangeSelector);

type OptionsProps = {
  label: OPTIONS;
  selected: number | null;
  index: number;
};
const Options = ({ label, selected, index }: OptionsProps) => {
  return (
    <div
      style={{
        padding: "1px 10px",
        margin: "5px 0",
        backgroundColor: selected === index ? ColorSchema().INFO.main : "",
        border: "1px solid black",
      }}
    >
      <Typography
        noWrap
        style={{
          color: index === selected ? "white" : "black",
          cursor: "pointer",
          fontWeight: index === selected ? "bold" : "",
        }}
        variant="captionUltra"
      >
        {label}
      </Typography>
      {/* <hr style={{borderBottom:'1px solid gray'}} /> */}
    </div>
  );
};

const opt: OPTIONS[] = [
  "This Week",
  "Last Week",
  "This Month",
  "Last Month",
  "This Year",
  "Last Year",
  "Quarter-1",
  "Quarter-2",
  "Quarter-3",
  "Quarter-4",
  "Semiannual-1",
  "Semiannual-2",
];
type OPTIONS =
  | "This Week"
  | "Last Week"
  | "This Month"
  | "Last Month"
  | "Quarter-4"
  | "Quarter-3"
  | "Quarter-2"
  | "Quarter-1"
  | "Semiannual-2"
  | "Semiannual-1"
  | "This Year"
  | "Last Year";

const rangeMaker = (range: OPTIONS) => {
  let startOfRange = new Date();
  let endOfRange = new Date();

  if (range === "This Week") {
    startOfRange = dayjs().startOf("week").toDate();
    endOfRange = dayjs().endOf("week").toDate();
  } else if (range === "Last Week") {
    startOfRange = dayjs().startOf("week").subtract(1, "week").toDate();
    endOfRange = dayjs().startOf("week").subtract(1, "second").toDate();
  } else if (range === "This Month") {
    startOfRange = dayjs().startOf("month").toDate();
    endOfRange = dayjs().endOf("month").toDate();
  } else if (range === "Last Month") {
    startOfRange = dayjs().startOf("month").subtract(1, "month").toDate();
    endOfRange = dayjs().startOf("month").subtract(1, "second").toDate();
  } else if (range === "Quarter-4") {
    const { startDate, endDate } = getQuarterDates(4);
    startOfRange = startDate.toDate();
    endOfRange = endDate.toDate();
  } else if (range === "Quarter-3") {
    const { startDate, endDate } = getQuarterDates(3);
    startOfRange = startDate.toDate();
    endOfRange = endDate.toDate();
  } else if (range === "Quarter-2") {
    const { startDate, endDate } = getQuarterDates(2);
    startOfRange = startDate.toDate();
    endOfRange = endDate.toDate();
  } else if (range === "Quarter-1") {
    const { startDate, endDate } = getQuarterDates(1);
    startOfRange = startDate.toDate();
    endOfRange = endDate.toDate();
  } else if (range === "Semiannual-1") {
    const { startDate, endDate } = getSemiannualDates(1);
    startOfRange = startDate.toDate();
    endOfRange = endDate.toDate();
  } else if (range === "Semiannual-2") {
    const { startDate, endDate } = getSemiannualDates(2);
    startOfRange = startDate.toDate();
    endOfRange = endDate.toDate();
  } else if (range === "This Year") {
    startOfRange = dayjs().startOf("year").toDate();
    endOfRange = dayjs().endOf("year").toDate();
  } else if (range === "Last Year") {
    const f = dayjs().startOf("year").subtract(1, "year").toDate();
    startOfRange = dayjs(f).startOf("year").toDate();
    endOfRange = dayjs(f).endOf("year").toDate();
  }
  return {
    startOfRange,
    endOfRange,
  };
};

function getQuarterDates(quarter: number) {
  const year = dayjs().year();

  const startMonth = (quarter - 1) * 3 + 1;
  const startDate = dayjs(`${year}-${startMonth}-01`).startOf("month");
  const endDate = startDate.add(3, "month").subtract(1, "day").endOf("day");

  return { startDate, endDate };
}

function getSemiannualDates(period: 1 | 2) {
  const year = dayjs().year();

  let startDate, endDate;
  if (period === 1) {
    startDate = dayjs(`${year}-01-01`).startOf("year");
    endDate = dayjs(`${year}-06-30`).endOf("day");
  } else if (period === 2) {
    startDate = dayjs(`${year}-07-01`).startOf("day");
    endDate = dayjs(`${year}-12-31`).endOf("year");
  } else {
    throw new Error("Invalid semiannual period number. It should be 1 or 2.");
  }
  return { startDate, endDate };
}
