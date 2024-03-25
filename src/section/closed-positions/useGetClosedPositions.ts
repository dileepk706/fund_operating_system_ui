import { useEffect, useState } from "react";
import { Position } from "../../types/position/position";
import { api } from "../../api/axios";
import { APIs, Orderby, Sortby } from "../../api/APIs";

type Props = {
  refresh?: boolean;
  from:number|null,
  to:number|null,
  sort?:Sortby,
  orderBy?:Orderby,
  filter:any
};
export default function useGetClosedPositions({ refresh,from,sort,to,orderBy,filter }: Props) {
  const [closedPositions, setClosedPositions] = useState<Position[] | []>([]);

  console.log(filter);
  
  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get(APIs.getAllClosedPositions({from,to,orderBy,sort,filter}));
        setClosedPositions(data.result);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [refresh,from,to,sort,orderBy,filter]);

  return { closedPositions };
}
