import { useState } from "react";
import InputIcon from "../../components/inputs/InputIcon";
import Typography from "../../components/typography/Typography";
import { fCurrency } from "../../utils/formatNumbers";
import { api } from "../../api/axios";
import { APIs } from "../../api/APIs";
import useBoolean from "../../hooks/useBoolean";
import useGetAvailableFund from "./useGetTransactions";
import LoadingButton from "../../components/button/LoadingButton";

type Props={
    addFundLoading:any
}
const AddFundSection = ({addFundLoading}:Props) => {
  const refreshGetAwaitables = useBoolean();
  const [amountForAdd, setAmount] = useState({ error: "", value: 0 });

  const { availableFund, loading: availableFundLoading } = useGetAvailableFund(
    refreshGetAwaitables.value
  );

  const setAmountHelper = (e: any) => {
    setAmount({ value: e.target.value, error: "" });
  };

  const addFund = async () => {
    if (!amountForAdd.value) {
      setAmount({ value: 0, error: "amount should be greater than 0" });
      return;
    }
    try {
      addFundLoading.onTrue();
       await api.put(APIs.addFund, {
        amount: amountForAdd.value,
      });
      refreshGetAwaitables.onToggle();
      addFundLoading.onFalse();
      setAmount({ value: 0, error: "" });
    } catch (error: any) {
      setAmount({ value: 0, error: error.message });
      addFundLoading.onFalse();
      console.log(error);
    }
  };

  return (
    <div
      style={{
        width: "30%",
      }}
    >
      <div
        style={{
          padding: 10,
        }}
      >
        <div style={{}}>
          <Typography variant="captionUltra">Enter Amount</Typography>
          <InputIcon
            error={amountForAdd.error}
            onChange={setAmountHelper}
            value={amountForAdd.value}
            type="number"
          />
          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <LoadingButton
              loading={addFundLoading.value}
              onClick={addFund}
              size="small"
            >
              Add
            </LoadingButton>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography>Available fund</Typography>
          {!availableFundLoading ? (
            <Typography variant="subtitle2">
              {fCurrency(availableFund?.amount || 0)}
            </Typography>
          ) : (
            <Typography>Loading...</Typography>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddFundSection;
