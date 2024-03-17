import { ColorSchema } from "../../theme";
import Button from "../button/Button";
import Typography from "../typography/Typography";

function TablePagination() {
  return (
    <div
      style={{
        width: "100%",
      }}
      id="table-pagination"
    >
      <hr />
      <div
        className="flex align-center"
        style={{
          justifyContent: "end",
          gap: "10px",
          padding: "20px",
        }}
      >
        <div className="flex justify-center align-center gap-1 ">
          <div className="flex justify-center align-center">
            <Typography variant="captionUltra">1-5 of 100</Typography>
          </div>
          <div className="flex justify-center align-center gap-1">
            <Button
              size="xsmall"
              style={{
                backgroundColor: ColorSchema().GREY[300],
                color: ColorSchema().INFO.main,
              }}
            >
              prev
            </Button>
            <Button
              size="xsmall"
              style={{
                backgroundColor: ColorSchema().GREY[300],
                color: ColorSchema().PRIMARY.main,
              }}
            >
              next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TablePagination;
