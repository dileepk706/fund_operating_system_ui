export const APIs = {
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
  getWebScrappedRealTimeStockDetailsAndUpdatePosition: (
    stock: string,
    position?: string
  ) =>
    `/get-scraped-real-time-stock-details-and-update-position?stock=${stock}&position=${position}`,
};
