import React, { memo, useCallback, useState } from "react";

type FromAndToPropsType = {
  From: number | null;
  To: number | null;
};

function useFromAndTo({ From, To }: FromAndToPropsType) {
  const [from, setFrom] = useState<number | null>(From);
  const [to, setTo] = useState<number | null>(To);

  type FromTo = {
    from: number;
    to: number;
  };

  const changeFromAndTo = useCallback(({ from, to }: FromTo) => {
    setFrom(from);
    setTo(to);
  }, []);

  return { from, to, changeFromAndTo };
}

export default useFromAndTo;
