import React from "react";
import Modal from "./CustomeModal";
import Button from "../button/Button";
import { ColorSchema } from "../../theme";
import Typography from "../typography/Typography";

type Props = {
  style?: React.CSSProperties;
  label: string;
  confirmHandler: (value:string) => void;
  open: boolean;
  onClose: () => void;
};
const Alert = ({ confirmHandler, label, style, onClose, open }: Props) => {
    const onT=() => {
        confirmHandler('true');
        onClose();
      }
  return (
    <Modal open={open} onClose={onClose}>
      <div
        style={{
          padding: "20px 40px",
          backgroundColor: "wheat",
          textAlign: "center",
          border: "1px solid black",
          ...style,
        }}
      >
        <Typography
          noWrap
          style={{
            fontSize: 15,
          }}
        >
          {" "}
          {label}
        </Typography>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            margin: "25px 0 0  0",
            gap: 20,
          }}
        >
          <Button
            style={{
              backgroundColor: ColorSchema().GREY[600],
            }}
            onClick={() => {
              confirmHandler('false');
              onClose();
            }}
            size="xsmall"
          >
            cancel{" "}
          </Button>
          <Button
            size="xsmall"
            onClick={onT}
          >
            Ok{" "}
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default Alert;
