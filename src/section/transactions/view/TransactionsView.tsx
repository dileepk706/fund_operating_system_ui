import Card from "../../../components/cards/Card";
import PageHeadline from "../../../components/headline/PageHeadline";
import useBoolean from "../../../hooks/useBoolean";
import AddFundSection from "../AddFundSection";
import TimelineSection from "../TimelineSection";

function TransactionsView() {
  const addFundLoading = useBoolean();

  return (
    <>
      <PageHeadline heading="Fund Movements Timeline" />
      <Card
        style={{
          padding: 10,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "start",
            gap: 50,
          }}
        >
          <TimelineSection addFundLoading={addFundLoading} />
          <AddFundSection addFundLoading={addFundLoading} />
        </div>
      </Card>
    </>
  );
}

export default TransactionsView;
