type GetClosedPositions = {
  from: number | null;
  to: number | null;
  sort?: Sortby;
  orderBy?: Orderby;
  filter:any
};

export const APIs = {
  login: "/login",
  signup: "/signup",
  createPosition: "/position",
  updatePosition: (id: string) => `/position/${id}`,
  getAllPositions: "/position",
  getAllClosedPositions: ({from,to,orderBy,sort,filter}:GetClosedPositions) =>
    `/position-closed?from=${from}&to=${to}&sortBy=${sort}&orderBy=${orderBy}&filter=${JSON.stringify(filter)}`,
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

export type Sortby =
  | "updatedOn"
  | "createdOn"
  | "buyingPrice"
  | "profit"
  | "loss"
  | "returnOnInvestment"
  | "holdingPeriodInDays"
  | "invested"
  | "totalProfit";
export type Orderby = "asc" | "desc";
