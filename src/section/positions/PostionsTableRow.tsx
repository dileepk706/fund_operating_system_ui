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
import { fCurrency, fNumber, fPercent } from "../../utils/formatNumbers";
import { getColorOfValues } from "../../utils/helpers";
import LinkToAnotherSiteCell from "../../components/table/LinkToAnotherSiteCell";
import { api } from "../../api/axios";
import { APIs } from "../../api/APIs";
import { useState } from "react";

type Props = {
  row: Position;
};
const PotionsTableRow = ({ row }: Props) => {
  const getCurrentLtpLoading = useBoolean();
  const [position, setPosition] = useState<Position>(row);

  const getCurrentLtpHandler = async () => {
    getCurrentLtpLoading.onTrue();
    try {
      const { data } = await api.get(
        APIs.getWebScrappedRealTimeStockDetailsAndUpdatePosition(
          position.stock,
          position._id
        )
      );
      setPosition(data.result);
      getCurrentLtpLoading.onFalse();
    } catch (error) {
      getCurrentLtpLoading.onFalse();
    }
  };

  const editPositionModal = useBoolean();
  const positionCloseModal = useBoolean();

  return (
    <>
      <TableRow>
        {/* "Stock", */}
        <TableCell>
          <LinkToAnotherSiteCell
            link={position.chartLink || ""}
            text={position.stock}
          />
        </TableCell>

        {/* "Date", */}
        <TableCell>
          <DateTableField date={position.createdOn} />
        </TableCell>

        {/* "Buying Price", */}
        <TableCell>
          <Typography variant="captionUltra" noWrap>
            {fCurrency(position.buyingPrice)}
          </Typography>
        </TableCell>

        {/* "Quantity", */}
        <TableCell>
          <Typography variant="captionUltra" noWrap>
            {fNumber(position.qty)}
          </Typography>
        </TableCell>

        {/* "LTP", */}
        <TableCell>
          <div
            className="flex align-center "
            style={{ justifyContent: "space-between" }}
          >
            <Typography variant="captionUltra">
              {fCurrency(position.ltd || 0)}
            </Typography>
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

        {/* "total-PL", */}
        <TableCell>
          <Typography
            style={{
              color: getColorOfValues(position.totalProfit),
            }}
            variant="captionUltra"
            noWrap
          >
            {fCurrency(position.totalProfit)}
          </Typography>
        </TableCell>

        {/* "unit-PL", */}
        <TableCell>
          <Typography
            style={{
              color: getColorOfValues(position.profit),
            }}
            variant="captionUltra"
            noWrap
          >
            {fCurrency(position.profit)}
          </Typography>
        </TableCell>

        {/* "ROI", */}
        <TableCell>
          <Typography
            style={{
              color: getColorOfValues(position.returnOnInvestment),
            }}
            variant="captionUltra"
            noWrap
          >
            {fPercent(position.returnOnInvestment)}
          </Typography>
        </TableCell>

        {/* "Target", */}
        <TableCell>
          <Typography variant="captionUltra" noWrap>
            {fCurrency(position.target || 0)}
          </Typography>
        </TableCell>

        {/* "SL", */}
        <TableCell>
          <Typography variant="captionUltra" noWrap>
            {fCurrency(position.sl || 0)}
          </Typography>
        </TableCell>

        {/* "Sector", */}
        <TableCell>
          <Typography variant="captionUltra" noWrap>
            {position.sector}
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
            <Tooltip text="Close">
              <div onClick={positionCloseModal.onTrue}>
                <CloseIcon />
              </div>
            </Tooltip>
            <Tooltip text="Edit">
              <div onClick={editPositionModal.onTrue}>
                <EditIcon />
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
          currentPosition={position}
          otherFunctions={editPositionModal.onFalse}
        />
      </Modal>
      <Modal
        open={positionCloseModal.value}
        onClose={positionCloseModal.onFalse}
      >
        <ClosePosition onClose={positionCloseModal.onFalse} position={position} />
      </Modal>
    </>
  );
};

export default PotionsTableRow;
