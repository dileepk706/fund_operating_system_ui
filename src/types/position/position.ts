import { Investor } from "../investor/investor";

export interface Position {
  stock: string;
  buyingPrice: number;
  sector: string;
  chartLink?: string;
  target?: number;
  sl?: number;
  notes?: string;
  image?: string[];
  createdOn: number;
  updatedOn: number;
  closed?: boolean;
  investor: Investor;
  ltd?: number;
  qty: number;
  _id: string;
  tradeInLoss: boolean;
  totalInvested: number;
  currentWorth: number;
  totalProfit: number;
  profit: number;
  returnOnInvestment:number
}
