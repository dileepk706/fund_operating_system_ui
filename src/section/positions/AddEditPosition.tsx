import { memo, useCallback, useEffect, useState } from "react";
import Input from "../../components/inputs/Input";
import LoadingButton from "../../components/button/LoadingButton";
import useBoolean from "../../hooks/useBoolean";
import { ColorSchema } from "../../theme";
import Typography from "../../components/typography/Typography";
import { checkWhiteSpace, isValidURL } from "../../utils/helpers";
import { Position } from "../../types/position/position";
import { api } from "../../api/axios";
import { APIs } from "../../api/APIs";
import AutoComplete from "../../components/auto-complete/AutoComplete";
import { NSE_REG_STOCKS, niftyIndexNames } from "../../utils/indices";
import Select from "../../components/inputs/Select";
import { AxiosResponse } from "axios";

type Props = {
  disableStockEdit?: boolean;
  disableSectorEdit?: boolean;
  disableQuantityEdit?: boolean;
  disableTargetEdit?: boolean;
  disableSLEdit?: boolean;
  disableChartEdit?: boolean;
  disableNotesEdit?: boolean;
  title: string;
  currentPosition?: Position;
  closing?: boolean;
  returnData?: (d: Position) => void;
  otherFunctions?: () => void;
};
const AddEditPosition = ({
  disableStockEdit,
  disableSectorEdit,
  disableQuantityEdit,
  disableTargetEdit,
  disableSLEdit,
  disableChartEdit,
  disableNotesEdit,
  title,
  currentPosition,
  closing,
  otherFunctions,
  returnData,
}: Props) => {
  type s = { value: any; error: string };
  const formSubmitLoading = useBoolean();
  const [stock, setStock] = useState<s>({ value: "", error: "" });
  const [sector, setSector] = useState<s>({ value: "", error: "" });
  const [chartLink, setChartLink] = useState<s>({ value: "", error: "" });
  const [target, setTarget] = useState<s>({ value: 0, error: "" });
  const [sl, setSL] = useState<any>({ value: 0, error: "" });
  const [notes, setNotes] = useState<s>({ value: "", error: "" });
  const [qty, setQty] = useState({ value: 0, error: "" });
  const [error, setError] = useState("");

  const setStockNameHandler = useCallback((v: string) => {
    setStock({ value: v, error: "" });
  }, []);

  const setSectorNameHandler = useCallback((v: string) => {
    setSector({ value: v, error: "" });
  }, []);

  useEffect(() => {
    if (currentPosition) {
      setStock({ value: currentPosition.stock, error: "" });
      setSector({ value: currentPosition.sector, error: "" });
      setChartLink({ value: currentPosition.chartLink, error: "" });
      setTarget({ value: currentPosition.target, error: "" });
      setSL({ value: currentPosition.sl, error: "" });
      setNotes({ value: currentPosition.notes, error: "" });
      setQty({ value: currentPosition.qty, error: "" });
    }
  }, [currentPosition]);

  const onsubmit = async (e: any) => {
    e.preventDefault();
    setError("");

    if (checkWhiteSpace(stock.value)) {
      setStock({ value: "", error: "stock is required field" });
      return;
    }
    if (checkWhiteSpace(sector.value)) {
      setSector({ value: "", error: "sector is required field" });
      return;
    }
    if (!qty.value) {
      setQty({ value: 0, error: "quantity is required field" });
      return;
    }
    if (qty.value < 0) {
      setQty({ value: 0, error: "value should be greater than 0" });
      return;
    }
    if (target.value < 0) {
      setTarget({ value: 0, error: "value should be greater than 0" });
      return;
    }
    if (sl.value < 0) {
      setSL({ value: 0, error: "value should be greater than 0" });
      return;
    }
    if (chartLink.value && !isValidURL(chartLink.value)) {
      setChartLink({
        value: "",
        error: "Invalid URL. Please enter a valid URL",
      });
      return;
    }
    let found = false;
    NSE_REG_STOCKS.forEach((e) => {
      if (stock.value === e) {
        found = true;
      }
    });
    if (!found) {
      setStock({
        value: stock.value,
        error: "please select correct stock name",
      });
      return;
    }
    const Stock = {
      stock: stock.value,
      sector: sector.value,
      chartLink: chartLink.value,
      target: target.value,
      sl: sl.value,
      notes: notes.value,
      qty: qty.value,
    };
    try {
      formSubmitLoading.onTrue();
      let res: AxiosResponse<any, any>;
      if (currentPosition) {
        res = await api.put(APIs.updatePosition(currentPosition._id), Stock);
      } else {
        res = await api.post(APIs.createPosition, Stock);
      }
      const { data } = res;
      returnData && returnData(data.result);
      otherFunctions && otherFunctions();
      setError("");
      formSubmitLoading.onFalse();
    } catch (error: any) {
      console.log(error.message);
      setError(error.message);
      formSubmitLoading.onFalse();
      // otherFunctions && otherFunctions();
    }
  };
  return (
    <div
      style={{
        padding: "20px 40px 10px 40px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
      }}
    >
      <Typography
        style={{ color: ColorSchema().INFO.main }}
        variant="subtitle2"
        gutterBottom
      >
        {title}
      </Typography>
      <div style={{ marginTop: 10 }}>
        <form onSubmit={onsubmit}>
          {error && (
            <Typography variant="captionUltra" style={{ color: "red" }}>
              {error}
            </Typography>
          )}

          <AutoComplete
            placeHolder="Stock"
            itemsStringArray={NSE_REG_STOCKS}
            setState={setStockNameHandler}
            value={stock.value}
            disable={disableStockEdit}
            error={stock.error}
          />

          <Select
            itemsArray={niftyIndexNames}
            setSate={setSectorNameHandler}
            value={sector.value}
            style={{ margin: "10px 0" }}
            disabled={disableSectorEdit}
            placeholder="Sector"
            error={sector.error}
          />
          <Input
            onChange={(e) => {
              setQty({ value: parseFloat(e.target.value), error: "" });
            }}
            placeholder="Quantity"
            type="number"
            value={qty.value}
            error={qty.error}
            disabled={disableQuantityEdit}
          />

          <Input
            onChange={(e) => {
              setTarget({ value: parseFloat(e.target.value), error: "" });
            }}
            placeholder="Target"
            type="number"
            value={target.value}
            error={target.error}
            disabled={disableTargetEdit}
          />

          <Input
            onChange={(e) => {
              setSL({ value: parseFloat(e.target.value), error: "" });
            }}
            placeholder="SL"
            type="number"
            value={sl.value}
            error={sl.error}
            disabled={disableSLEdit}
          />

          <Input
            onChange={(e) => {
              setChartLink({ value: e.target.value, error: "" });
            }}
            placeholder="Chart URL:http://example.com"
            type="url"
            value={chartLink.value}
            error={chartLink.error}
            disabled={disableChartEdit}
          />

          <Input
            onChange={(e) => {
              setNotes({ value: e.target.value, error: "" });
            }}
            placeholder="Notes"
            type="text"
            value={notes.value}
            error={notes.error}
            disabled={disableNotesEdit}
          />
          <div className="flex flex-col">
            <input
              onClick={() => alert("coming soon...")}
              disabled
              type="file"
            />
            <Typography style={{ fontSize: 10 }}>coming soon...</Typography>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
              padding: "20px 0 0 0",
            }}
          >
            {!closing && (
              <LoadingButton
                style={{
                  backgroundColor: formSubmitLoading.value
                    ? ColorSchema().GREY[500]
                    : ColorSchema().INFO.main,
                }}
                loadingButtonWidth={0.9}
                loading={formSubmitLoading.value}
                size="small"
                onClick={onsubmit}
              >
                Upload
              </LoadingButton>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default memo(AddEditPosition);
