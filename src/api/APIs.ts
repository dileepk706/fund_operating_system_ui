export const APIs = () => {
  return {
    login: "/login",
    signup: "/signup",
    createPosition: "/position",
    updatePosition: (id: string) => `/position/${id}`,
    getAllPositions: "/position",
    getAllClosedPositions: "/position-closed",
    addFund: "/add-fund",
    getFund: "/fund",
    getAllTransactionHistory: "/transactions-history",
    closePosition: (id: string) => `/close-position/${id}`,
    profitAndLossReport: "/profit-and-loss-report",
  };
};
