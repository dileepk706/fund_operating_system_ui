import { Investor } from "../investor/investor";

export interface Fund {
  amount: number;
  investor: Investor;
  revenue:number;
  createdOn?: number;
  updatedOn?: number;
}

export interface TransactionHistory{
  amount:number,
  note:string,
  position?:string
  investor: Investor;
  createdOn?: number; 
  updatedOn?: number;
}