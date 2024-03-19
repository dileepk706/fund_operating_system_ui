import { RefreshIcon } from "../../components/Icons/Icons";
import Button from "../../components/button/Button";
import LoadingButton from "../../components/button/LoadingButton";
import Modal from "../../components/modal/CustomeModal";
import TableToolbar from "../../components/table/TableToolbar";
import useBoolean from "../../hooks/useBoolean";
import { ColorSchema } from "../../theme";
import AddEditPosition from "./AddEditPosition";

type Props = {
  setPosition: any;
  setRefresh:any
};
const PositionsTabletoolbar = ({ setPosition,setRefresh }: Props) => {
  const createPositionOpen = useBoolean();
  const getCurrentLtpLoading = useBoolean();
  const d = (d: any) => {
    setPosition(d);
  };

  return (
    <>
      <TableToolbar>
        <Button size="small" onClick={createPositionOpen.onTrue}>
          Add Position
        </Button>
        <LoadingButton
          size="small"
          style={{
            backgroundColor: getCurrentLtpLoading.value
              ? ColorSchema().GREY[500]
              : ColorSchema().INFO.main,
          }}
          loading={getCurrentLtpLoading.value}
          loadingButtonWidth={1}
          onClick={()=>setRefresh()}
        >
          <RefreshIcon />
        </LoadingButton>
      </TableToolbar>
      <Modal
        open={createPositionOpen.value}
        onClose={createPositionOpen.onFalse}
      >
        <AddEditPosition
          otherFunctions={createPositionOpen.onFalse}
          returnData={d}
          title="Create Position"
        />
      </Modal>
    </>
  );
};

export default PositionsTabletoolbar;
