import { useState } from "react";
import "./style.css";
import { ColorSchema } from "../../theme";
import Typography from "../typography/Typography";

type Props = {
  itemsStringArray: string[];
  setState: (e: string) => void;
  placeHolder?: string;
  value: string;
  disable?: boolean;
  error?:string
};
function AutoComplete({
  itemsStringArray,
  setState,
  placeHolder,
  value,
  disable,
  error
}: Props) {
  const [filteredItems, setFilteredItems] = useState<any[]>([]);

  function searchNames(searchTerm: string) {
    setState(searchTerm.toUpperCase());
    if (!searchTerm) {
      return;
    }

    searchTerm = searchTerm.toLowerCase();
    const foundStrings = itemsStringArray.filter(name =>
      name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(foundStrings);
  }
  const selectedItem = (item: string) => {
    setState(item);
    setFilteredItems([]);
  };

  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <div
        style={{
          position: "relative",
        }}
      >
        {value ? (
          <label htmlFor="" style={{ fontSize: 10 }}>
            {placeHolder}
          </label>
        ) : null}
        <input
          type="text"
          style={{
            padding: "10px 10px 10px 10px",
            border: "1px solid #ccc",
            // borderRadius: "5px",
            fontSize: "16px",
            width: "100%",
            boxSizing: "border-box",
            marginBottom: "1px",
          }}
          disabled={disable}
          placeholder={placeHolder}
          value={value}
          onChange={(e) => searchNames(e.target.value)}
        />

        <div
          style={{
            position: "absolute",
            maxHeight: "300px",
            overflow: "hidden",
            width: "100%",
            backgroundColor: ColorSchema().INFO.main,

            display: filteredItems.length ? "" : "none",
          }}
        >
          <div
            style={{
              padding: 10,
              display: "flex",
              flexDirection: "column",
              gap: 2,
              boxShadow: "1px 1px 5px rgba(0, 0, 0, 0.5)",
            }}
            onMouseLeave={() => setFilteredItems([])}
          >
            {filteredItems.map((e) => (
              <div
                style={{
                  zIndex: 99999,
                  color: "white",
                }}
                onClick={() => {
                  selectedItem(e);
                }}
                className="h"
              >
                <span style={{ fontSize: 12 }}>{e}</span>
                <hr color="lightgray" style={{ height: "1px" }} />
              </div>
            ))}
          </div>
        </div>
        {error && (
        <Typography style={{ color: "red" }} variant="captionUltra">
          {error}
        </Typography>
      )}
      </div>
    </div>
  );
}

export default AutoComplete;
