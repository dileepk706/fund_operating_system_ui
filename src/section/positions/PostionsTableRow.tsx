import TableRow from "../../components/table/TableRow";
import TableCell from "../../components/table/TableCell";
import Typography from "../../components/typography/Typography";
import { Position } from "../../types/position/position";
import DateTableField from "../../components/table/DateTableField";
import Button from "../../components/button/Button";
import { ColorSchema } from "../../theme";
import LoadingButton, { EditIcon, RefreshIcon } from "../../components/button/LoadingButton";
import useBoolean from "../../hooks/useBoolean";
import Modal from "../../components/modal/CustomeModal";

type Props = {
  row: Position;
};
const PotionsTableRow = ({ row }: Props) => {

  const getCurrentLtpLoading=useBoolean()
  const getCurrentLtpHandler=()=>{
    getCurrentLtpLoading.onTrue()
  }

  const openPositionActionModal=useBoolean()

  return (
    <>
      <TableRow>
        {/* "Stock", */}
        <TableCell>
          <Typography variant="captionUltra" noWrap>
            {row.stock}
          </Typography>
        </TableCell>

        {/* "Sector", */}
        <TableCell>
          <Typography variant="captionUltra" noWrap>
            {row.sector}
          </Typography>
        </TableCell>

        {/* "Buying Price", */}
        <TableCell>
          <Typography variant="captionUltra" noWrap>
            {row.buyingPrice}
          </Typography>
        </TableCell>

        {/* "Date", */}
        <TableCell>
          <DateTableField date={row.createdOn} />
        </TableCell>

        {/* "Target", */}
        <TableCell>
          <Typography variant="captionUltra" noWrap>
            {row.target}
          </Typography>
        </TableCell>

        {/* "SL", */}
        <TableCell>
          <Typography variant="captionUltra" noWrap>
            {row.sl}
          </Typography>
        </TableCell>

        {/* "LTP", */}
        <TableCell>
          <div
            className="flex align-center "
            style={{ justifyContent: "space-between" }}
          >
            <Typography variant="captionUltra">{row.ltd}</Typography>
            <LoadingButton
              size="xsmall"
              style={{
                backgroundColor: getCurrentLtpLoading.value
                  ? ColorSchema().GREY[500]
                  : ColorSchema().INFO.main,
              }}
              loading={getCurrentLtpLoading.value}
              loadingButtonWidth={1}
              onClick={getCurrentLtpHandler}
            >
              <RefreshIcon />
            </LoadingButton>
          </div>
        </TableCell>

        {/* "unit-PL", */}
        <TableCell>
          <Typography variant="captionUltra" noWrap>
            {row.profit}
          </Typography>
        </TableCell>

        {/* "total-PL", */}
        <TableCell>
          <Typography variant="captionUltra" noWrap>
            {row.totalProfit}
          </Typography>
        </TableCell>

        {/* "ROI", */}
        <TableCell>
          <Typography variant="captionUltra" noWrap>
            {row.returnOnInvestment}
          </Typography>
        </TableCell>

        {/* "Action", */}
        <TableCell>
          <div 
          style={{
            cursor:'pointer'
          }}
          onClick={openPositionActionModal.onTrue}>
            <EditIcon />
          </div>
        </TableCell>
      </TableRow>
      <Modal
      open={openPositionActionModal.value}
      onClose={openPositionActionModal.onFalse}
      >
        <div
          style={{
            width: 100,
            height: 100,
            backgroundColor: "red",
          }}
        ></div>
      </Modal>
    </>
  );
};

export default PotionsTableRow;
