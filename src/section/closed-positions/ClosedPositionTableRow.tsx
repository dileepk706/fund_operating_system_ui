import { Orderby, Sortby } from "../../api/APIs";
import DateTableField from "../../components/table/DateTableField";
import TableCell from "../../components/table/TableCell";
import TableRow from "../../components/table/TableRow";
import Typography from "../../components/typography/Typography";
import { Position } from "../../types/position/position";
import { fCurrency, fNumber, fPercent } from "../../utils/formatNumbers";
import { getColorOfValues } from "../../utils/helpers";

type Props = {
  position: Position;
};
function ClosedPositionTableRow({ position }: Props) {
  return (
    <TableRow>
      {/* "Stock", */}

      <TableCell style={{ whiteSpace: "nowrap" }}>{position.stock}</TableCell>
      {/* "Bought Date", */}
      <TableCell style={{ whiteSpace: "nowrap" }}>
        <DateTableField date={position.createdOn} />
      </TableCell>

      {/* "Sell Date", */}
      <TableCell style={{ whiteSpace: "nowrap" }}>
        <DateTableField date={position.updatedOn} />
      </TableCell>

      {/* "Hold Period", */}
      <TableCell style={{ whiteSpace: "nowrap" }}>
        {Math.floor(position.holdingPeriodInDays) + " days"}
      </TableCell>

      {/* "Buying Price", */}
      <TableCell style={{ whiteSpace: "nowrap" }}>
        {fCurrency(position.buyingPrice)}
      </TableCell>

      {/* "Selling Price", */}
      <TableCell style={{ whiteSpace: "nowrap" }}>
        {fCurrency(position.ltd || 0)}
      </TableCell>

      {/* "Quantity", */}
      <TableCell style={{ whiteSpace: "nowrap" }}>
        {fNumber(position.qty)}
      </TableCell>

      {/* "Invested", */}
      <TableCell style={{ whiteSpace: "nowrap" }}>
        {fCurrency(position.invested)}
      </TableCell>

      {/* "Sold Value", */}
      <TableCell style={{ whiteSpace: "nowrap" }}>
        {fCurrency(position.currentWorth)}
      </TableCell>

      {/* "Net Profit", */}
      <TableCell
        style={{
          whiteSpace: "nowrap",
          color: getColorOfValues(position.totalProfit),
        }}
      >
        {fCurrency(position.totalProfit)}
      </TableCell>

      {/* "ROI", */}
      <TableCell style={{ whiteSpace: "nowrap" }}>
        <Typography
          noWrap
          style={{ color: getColorOfValues(position.returnOnInvestment) }}
        >
          {fPercent(position.returnOnInvestment)}
        </Typography>
      </TableCell>

      {/* "Strike Target", */}
      <TableCell style={{ whiteSpace: "nowrap" }}>
        <Stirk>
          <Typography noWrap>{fCurrency(position.target || 0)}</Typography>
          <Typography noWrap style={{ color: position.strikeTarget[1] }}>
            {position.strikeTarget[0]}
          </Typography>
        </Stirk>
      </TableCell>

      {/* "Strike SL", */}
      <TableCell style={{ whiteSpace: "nowrap" }}>
        <Stirk>
          <Typography noWrap>{fCurrency(position.sl || 0)}</Typography>
          <Typography noWrap style={{ color: position.strikeSl[1] }}>
            {position.strikeSl[0]}
          </Typography>
        </Stirk>
      </TableCell>

      {/* "Sector", */}
      <TableCell style={{ whiteSpace: "nowrap" }}>{position.sector}</TableCell>
    </TableRow>
  );
}

export default ClosedPositionTableRow;

type StirkProps = {
  children: React.ReactNode;
};
const Stirk = ({ children }: StirkProps) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
      gap: 20,
      border: "1px solid black",
    }}
  >
    {children}
  </div>
);
