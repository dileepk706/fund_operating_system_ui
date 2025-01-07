import { useEffect, useState } from "react";
import { api } from "../../api/axios";
import { APIs,  } from "../../api/APIs";
import { Fund, TransactionHistory } from "../../types/fund/fund";

export default function useGetAvailableFund(refresh:boolean) {
  const [availableFund, setAvailableFund] = useState<Fund | null>(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const { data } = await api.get(APIs.getFund);
        setAvailableFund(data.result.fund);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    })();
  }, [refresh]);

  return { availableFund, loading };
}

export function useGetFundsTimeline(refresh:boolean) {
  const [timeline, setTimeline] = useState<TransactionHistory[] | []>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const { data } = await api.get(APIs.getAllTransactionHistory);
        setTimeline(data.result.transactions);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    })();
  }, [refresh]);

  return { timeline, loading };
}
