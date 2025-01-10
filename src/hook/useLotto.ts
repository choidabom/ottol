import { useState } from "react";

export const useLotto = () => {
  const [lottoResult, setLottoResult] = useState<number[]>();

  const getRandomLotto = () => {
    const set = new Set<number>();
    while (set.size < 6) {
      const num = Math.floor(Math.random() * 45) + 1;
      set.add(num);
    }
    return Array.from([...set]).sort((a, b) => a - b);
  };

  const getLottoResult = () => {
    setLottoResult(getRandomLotto());
  };

  return { lottoResult, getLottoResult, getRandomLotto };
};
