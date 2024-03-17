import LoadingButton from "../../components/button/LoadingButton";
import Typography from "../../components/typography/Typography";
import useBoolean from "../../hooks/useBoolean";
import { ColorSchema } from "../../theme";
import { Position } from "../../types/position/position";
import { fCurrency, fPercent } from "../../utils/formatNumbers";
import { getColorOfValues } from "../../utils/helpers";
import AddEditPosition from "./AddEditPosition";

type Props = {
  position: Position;
};
const ClosePosition = ({ position }: Props) => {

    const formSubmitLoading=useBoolean()
    const closePositionHandler=async()=>{
        formSubmitLoading.onToggle()
    }
  return (
    <div
      style={{
        display: "flex",
        gap: 10,
      }}
    >
      <AddEditPosition
        title="Close Position"
        disableStockEdit
        disableSectorEdit
        disableQuantityEdit
        disableChartEdit
        disableNotesEdit
        disableSLEdit
        disableTargetEdit
        currentPosition={position}
        closing
      />
      <div
        style={{
          padding: "20px 40px 0 10px",
          margin: "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "start",
            gap:25
          }}
        >
          <div>
            <Fields fieldName="Strike Target" value={"Yes"} />
            <Fields fieldName="Strike SL" value={"No"} />
          </div>
          <div>
            <Fields
              fieldName="Invested Amount"
              f={fCurrency}
              value={position.totalInvested}
            />
            <Fields
              fieldName="Profit"
              f={fCurrency}
              value={position.totalProfit}
            />
            <Fields
              fieldName="Return on Investment"
              value={position.returnOnInvestment}
              f={fPercent}
            />
          </div>
        </div>
        <div
        style={{
            display:'flex',
            justifyContent:'end',
            marginTop:20
        }}
        >
        <LoadingButton
                style={{
                  backgroundColor: formSubmitLoading.value
                    ? ColorSchema().GREY[500]
                    : ColorSchema().INFO.main,
                }}
                loadingButtonWidth={0.9}
                loading={formSubmitLoading.value}
                size="small"
                onClick={closePositionHandler}
              >
                Close
              </LoadingButton>
        </div>
      </div>
    </div>
  );
};

export default ClosePosition;

type P = {
  fieldName: string;
  value: any;
  f?: (number: any) => string;
};
const Fields = ({ fieldName, value, f }: P) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "start",
      gap: 5,
    }}
  >
    <Typography variant="caption">{fieldName + " : "}</Typography>
    <Typography
      style={{
        color: getColorOfValues(value),
      }}
      variant="captionUltra"
    >
      {f ? f(value) : value}
    </Typography>
  </div>
);
