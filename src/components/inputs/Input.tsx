import Typography from "../typography/Typography";

type Props = {
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  placeholder?: string;
  error?: string;
  type?:string
};

const Input = ({ placeholder, error,onChange,type }: Props) => {
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
      <input
        style={{
          padding: "10px 10px 10px 10px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          fontSize: "16px",
          width: "100%",
          boxSizing: "border-box",
        }}
        placeholder={placeholder}
        onChange={onChange}
        type={type}
      />
      {error && (
        <Typography style={{ color: "red" }} variant="captionUltra">
          {error}
        </Typography>
      )}
    </div>
  );
};

export default Input;
