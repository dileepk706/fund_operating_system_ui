import Card from "../../components/cards/Card";
import Typography from "../../components/typography/Typography";
import { ColorSchema } from "../../theme";
import { TransactionHistory } from "../../types/fund/fund";
import { fCurrency } from "../../utils/formatNumbers";
import { getColorOfValues, getDate } from "../../utils/helpers";
import { useGetFundsTimeline } from "./useGetTransactions";


type Props={
    addFundLoading:any
}

const TimelineSection = ({addFundLoading}:Props) => {
  const { timeline, } = useGetFundsTimeline(addFundLoading.value);

  return (
    <div
      style={{
        flexGrow: 3,
      }}
    >
      <div>
        {timeline?.map((e) => (
          <Elements key={e._id} transaction={e} />
        ))}
      </div>
    </div>
  );
};

export default TimelineSection;

type ElementsProps = {
  transaction: TransactionHistory;
};
const Elements = ({ transaction }: ElementsProps) => {
  return (
    <Card
      style={{
        flexGrow: 1,
        margin: "10px 0",
        padding: 10,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 35px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "start",
            gap: 10,
          }}
        >
          <Typography variant="captionUltra" style={{ fontWeight: "bold" }}>
            {transaction.note}
          </Typography>
          <Typography
            variant="small"
            style={{ color: ColorSchema().GREY[600] }}
          >
            {fCurrency(transaction.fundAtTheTime)}
          </Typography>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "start",
            gap: 10,
          }}
        >
          <Typography
            style={{
              color: getColorOfValues(transaction.amount),
            }}
            variant="subtitle2"
          >
            {fCurrency(transaction.amount)}
          </Typography>
          <Typography
            variant="small"
            style={{ fontWeight: "bold", color: ColorSchema().GREY[600] }}
          >
            {getDate(transaction.createdOn)}
          </Typography>
        </div>
      </div>
    </Card>
  );
};
