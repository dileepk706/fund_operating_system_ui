import { Helmet } from "react-helmet-async";
import TransactionsView from "../../section/transactions/view/TransactionsView";

const Transaction = () => {
  return (
    <>
      <Helmet>
        <title>Transactions</title>
      </Helmet>
      <TransactionsView/>
    </>
  );
};

export default Transaction;
