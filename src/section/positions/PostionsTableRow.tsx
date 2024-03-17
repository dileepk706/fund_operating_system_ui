import TableRow from "../../components/table/TableRow";
import TableCell from "../../components/table/TableCell";
import Typography from "../../components/typography/Typography";
import { Position } from "../../types/position/position";
import DateTableField from "../../components/table/DateTableField";
import { ColorSchema } from "../../theme";
import useBoolean from "../../hooks/useBoolean";
import Modal from "../../components/modal/CustomeModal";
import AddEditPosition from "./AddEditPosition";
import LoadingButton from "../../components/button/LoadingButton";
import { CloseIcon, EditIcon, RefreshIcon } from "../../components/Icons/Icons";
import Tooltip from "../../components/tooltip/Tooltip";
import ClosePosition from "./ClosePosition";
import { fCurrency, fPercent } from "../../utils/formatNumbers";
import { getColorOfValues } from "../../utils/helpers";
import CustomLink from "../../components/link/Link";
import LinkToAnotherSiteCell from "../../components/table/LinkToAnotherSiteCell";

type Props = {
  row: Position;
};
const PotionsTableRow = ({ row }: Props) => {
  const getCurrentLtpLoading = useBoolean();
  const ltpReceivedTrue = useBoolean();

  const getCurrentLtpHandler = () => {
    getCurrentLtpLoading.onTrue();
    setTimeout(() => {
      ltpReceivedTrue.onTrue();
    }, 1000);
  };

  const editPositionModal = useBoolean();
  const positionCloseModal = useBoolean();

  return (
    <>
      <TableRow>
        {/* "Stock", */}
        <TableCell>
          <LinkToAnotherSiteCell link={row.chartLink || ""} text={row.stock} />
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
            {fCurrency(row.buyingPrice)}
          </Typography>
        </TableCell>

        {/* "Date", */}
        <TableCell>
          <DateTableField date={row.createdOn} />
        </TableCell>

        {/* "Target", */}
        <TableCell>
          <Typography variant="captionUltra" noWrap>
            {fCurrency(row.target || 0)}
          </Typography>
        </TableCell>

        {/* "SL", */}
        <TableCell>
          <Typography variant="captionUltra" noWrap>
            {fCurrency(row.sl || 0)}
          </Typography>
        </TableCell>

        {/* "LTP", */}
        <TableCell>
          <div
            className="flex align-center "
            style={{ justifyContent: "space-between" }}
          >
            <Typography variant="captionUltra">{fCurrency(row.ltd||0)}</Typography>
            <Tooltip
              noTooltip={getCurrentLtpLoading.value}
              text="Refresh to get real time ltp"
            >
              {!ltpReceivedTrue.value && (
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
              )}
            </Tooltip>
          </div>
        </TableCell>

        {/* "unit-PL", */}
        <TableCell>
          <Typography
            style={{
              color: getColorOfValues(row.profit),
            }}
            variant="captionUltra"
            noWrap
          >
            {fCurrency(row.profit)}
          </Typography>
        </TableCell>

        {/* "total-PL", */}
        <TableCell>
          <Typography
            style={{
              color: getColorOfValues(row.totalProfit),
            }}
            variant="captionUltra"
            noWrap
          >
            {fCurrency(row.totalProfit)}
          </Typography>
        </TableCell>

        {/* "ROI", */}
        <TableCell>
          <Typography
            style={{
              color: getColorOfValues(row.returnOnInvestment),
            }}
            variant="captionUltra"
            noWrap
          >
            {fPercent(row.returnOnInvestment)}
          </Typography>
        </TableCell>

        {/* "Action", */}
        <TableCell>
          <div
            style={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <Tooltip text="Edit">
              <div onClick={editPositionModal.onTrue}>
                <EditIcon />
              </div>
            </Tooltip>
            <Tooltip text="Close">
              <div onClick={positionCloseModal.onTrue}>
                <CloseIcon />
              </div>
            </Tooltip>
          </div>
        </TableCell>
      </TableRow>
      <Modal open={editPositionModal.value} onClose={editPositionModal.onFalse}>
        <AddEditPosition
          title="Edit Position"
          disableStockEdit
          disableSectorEdit
          disableQuantityEdit
          currentPosition={row}
        />
      </Modal>
      <Modal
        open={positionCloseModal.value}
        onClose={positionCloseModal.onFalse}
      >
        <ClosePosition position={row} />
      </Modal>
    </>
  );
};

export default PotionsTableRow;
