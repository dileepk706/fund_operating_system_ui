import { memo } from "react";
import Typography from "../typography/Typography";

type Props = {
  value?: string;
  setSate?: (e: any) => void;
  style?: React.CSSProperties;
  itemsArray: string[];
  disabled?: boolean;
  placeholder: string;
  error?:string
};
const Select = ({
  itemsArray,
  placeholder,
  value,
  setSate,
  disabled,
  style,
  error
}: Props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignContent: "start",
        justifyContent: "center",
      }}
    >
      {value ? (
        <label htmlFor="" style={{ fontSize: 10 }}>
          {placeholder}
        </label>
      ) : null}
      <select
        value={value}
        onChange={(e) =>{
          setSate && setSate(e.target.value)
        }}
        style={{
          backgroundColor: "#ffffff",
          border: "1px solid #cccccc",
          padding: "8px 30px 8px 10px",
          outline: "none",
          ...style,
        }}
        disabled={disabled}
      >
        <option value="" disabled >{placeholder.toLocaleUpperCase()}</option>
        {itemsArray.map((option, index) => (
          <option key={index} value={option} >
            {option}
          </option>
        ))}
      </select>
      {error && (
        <Typography style={{ color: "red" }} variant="captionUltra">
          {error}
        </Typography>
      )}
    </div>
  );
};

export default memo(Select);
