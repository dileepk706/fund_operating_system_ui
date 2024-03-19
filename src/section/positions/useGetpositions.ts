import { useEffect, useState } from "react";
import { Position } from "../../types/position/position";
import { api } from "../../api/axios";
import { APIs } from "../../api/APIs";

type Props={
  refresh?:boolean
}
export default function useGetPositions({refresh}:Props) {
  const [positions, setPositions] = useState<Position[] | []>([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get(APIs.getAllPositions);
        setPositions(data.result)
      } catch (error) {
        console.log(error);
      }
    })();
  }, [refresh]);

  return { positions,setPositions };
}
