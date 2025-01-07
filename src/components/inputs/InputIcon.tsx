import { memo } from "react";
import Typography from "../typography/Typography";

type Props = {
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  placeholder?: string;
  error?: string;
  type?: React.HTMLInputTypeAttribute | undefined;
  disabled?: boolean;
  value?: string | number;
};

const InputIcon = ({
  placeholder,
  error,
  onChange,
  type,
  disabled,
  value,
}: Props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignContent: "start",
        justifyContent: "center",
        marginBottom: "10px",
      }}
    >
      {value ? (
        <label htmlFor="" style={{ fontSize: 12 }}>
          {placeholder}
        </label>
      ) : null}

      <div
        style={{
          border: "1px solid #ccc",
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
          padding: "0 5px",
        }}
      >
        ₹
        <input
          style={{
            padding: "10px 10px 10px 10px",
            border: "0px solid",
            outline: "none",
          }}
          value={value ? value : ""}
          placeholder={placeholder}
          onChange={onChange}
          type={type}
          disabled={disabled}
        />
      </div>

      {error && (
        <Typography style={{ color: "red" }} variant="captionUltra">
          {error}
        </Typography>
      )}
    </div>
  );
};

export default memo(InputIcon);
