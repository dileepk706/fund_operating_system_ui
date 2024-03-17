import Button from "../../components/button/Button";
import Modal from "../../components/modal/CustomeModal";
import TableToolbar from "../../components/table/TableToolbar";
import useBoolean from "../../hooks/useBoolean";
import AddEditPosition from "./AddEditPosition";

const PositionsTabletoolbar = () => {
  const createPositionOpen = useBoolean();

  return (
    <>
      <TableToolbar>
        <Button size="small" onClick={createPositionOpen.onTrue}  >
          Add Position
        </Button>
      </TableToolbar>
      <Modal
        open={createPositionOpen.value}
        onClose={createPositionOpen.onFalse}
      >
        <AddEditPosition title="Create Position" />
      </Modal>
    </>
  );
};

export default PositionsTabletoolbar;
