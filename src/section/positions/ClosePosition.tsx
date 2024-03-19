import { useState } from "react";
import { APIs } from "../../api/APIs";
import { api } from "../../api/axios";
import LoadingButton from "../../components/button/LoadingButton";
import Alert from "../../components/modal/Alert";
import Typography from "../../components/typography/Typography";
import useBoolean from "../../hooks/useBoolean";
import { ColorSchema } from "../../theme";
import { Position } from "../../types/position/position";
import { fCurrency, fPercent } from "../../utils/formatNumbers";
import { getColorOfValues } from "../../utils/helpers";
import AddEditPosition from "./AddEditPosition";

type Props = {
  position: Position;
  onClose?:()=>void 
};
const ClosePosition = ({ position,onClose }: Props) => {
  const formSubmitLoading = useBoolean();
  const onOpenAlert = useBoolean();
  const [error, setError] = useState("");

  const closePositionHandler = async (value: string) => {
    if (value === "false") {
      return;
    }
    try {
      formSubmitLoading.onTrue();
      setError('');
      const { data } = await api.put(APIs.closePosition(position._id));
      console.log(data);
      formSubmitLoading.onFalse();
      onClose&&onClose()
    } catch (error: any) {
      console.log(error);
      setError(error.message);
      formSubmitLoading.onFalse();
    }
  };
  let TStrike='NO'
  let SLStrike='NO'
  if(position.target && position.ltd){
    if(position.target>=position.ltd){
      TStrike='YES'
    }
  }
  if(position.sl && position.ltd){
    if(position.sl<=position.ltd){
      SLStrike='YES'
    }
  }

  return (
    <>
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
              gap: 25,
            }}
          >
            <div>
              <Fields fieldName="Strike SL" value={SLStrike} />
              <Fields fieldName="Strike Target" value={TStrike} />
            </div>
            <div>
              <Fields fieldName="LTP" value={fCurrency(position.ltd||0)}   />
              <Fields fieldName="Buying price" value={fCurrency(position.buyingPrice)}  />
            </div>
            <div>
              <Fields
                fieldName="Profit"
                f={fCurrency}
                value={position.totalProfit}
              />
              <Fields
                fieldName="Invested Amount"
                f={fCurrency}
                value={position.totalInvested}
              />

              <Fields
                fieldName="Return on Investment"
                value={position.returnOnInvestment}
                f={fPercent}
              />
            </div>
            <span style={{ fontSize: 13,color:'orangered' }}>{error}</span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
              marginTop: 20,
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
              onClick={() => onOpenAlert.onTrue()}
            >
              Close
            </LoadingButton>
          </div>
        </div>
      </div>

      <Alert
        open={onOpenAlert.value}
        onClose={onOpenAlert.onFalse}
        confirmHandler={closePositionHandler}
        label="confirm your SALE"
      />
    </>
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
    <table
      style={{
        fontFamily: "Arial, sans-serif",
        borderCollapse: "collapse",
        width: "100%",
      }}
    >
      <tbody>
        <tr>
          <td
            style={{
              border: "1px solid #dddddd",
              textAlign: "left",
              padding: "8px",
              whiteSpace: "nowrap",
              fontSize: 13,
              fontWeight: "bold",
            }}
          >
            {fieldName}
          </td>
          <td
            style={{
              border: "1px solid #dddddd",
              textAlign: "left",
              padding: "8px",
              whiteSpace: "nowrap",
              color: getColorOfValues(value),
              fontWeight: "bolder",
            }}
          >
            {f ? f(value) : value}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);
