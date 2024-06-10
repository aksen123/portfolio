import React, { useState, useRef } from "react";
import "./lotto.scss";
import Buttons from "./Buttons";
import Ball from "./Ball";

const Lotto = () => {
  const numberArr: number[] = [...new Array(45).keys()].map((num) => num + 1);
  const [luckyNumber, setLuckyNumber] = useState<number[]>([]);
  const [deleteNum, setDeleteNum] = useState<number[]>([...numberArr]);
  const [pickNum, setPickNum] = useState<number[]>([]);
  const inputsRef = useRef<HTMLDivElement>(null);
  const countRef = useRef(1);
  const [stopButton, setStopButton] = useState<boolean>(false);

  const numberClick = (e: React.MouseEvent<HTMLInputElement>) => {
    if (e.currentTarget.checked) {
      setDeleteNum(deleteNum.filter((it) => +e.currentTarget.value !== it));
      setPickNum([...pickNum, +e.currentTarget.value]);
    } else {
      setDeleteNum([...deleteNum, +e.currentTarget.value]);
      setPickNum(pickNum.filter((it) => +e.currentTarget.value !== it));
    }
  };

  const selectNumber = (arr: number[]) => {
    if (stopButton === true) return;
    setLuckyNumber([]);
    if (arr === pickNum && arr.length < 7) {
      alert("7개 이상 선택해주세요");
    } else {
      raffle(arr);
    }
  };

  const raffle = (arr: number[]) => {
    setStopButton(true);
    const interval = setInterval(() => {
      const index = Math.floor(Math.random() * arr.length);
      const arrNum = arr[index];
      countRef.current += 1;
      setLuckyNumber((luckyNumber) =>
        [...luckyNumber, arrNum].sort((a, b) => a - b)
      );
      arr === pickNum
        ? setPickNum((numberArr) => numberArr.filter((it) => arrNum !== it))
        : setDeleteNum((numberArr) => numberArr.filter((it) => arrNum !== it));

      if (countRef.current > 6) {
        setStopButton(false);
        clearInterval(interval);
        setPickNum([]);
        setDeleteNum([...numberArr]);
        countRef.current = 1;
        inputsRef.current
          ?.querySelectorAll("input")
          .forEach((it) => (it.checked = false));
      }
    }, 500);
  };
  return (
    <div className="Lotto">
      <div className="result">
        {luckyNumber.map((it) => (
          <Ball key={it} num={it} />
        ))}
      </div>
      <div className="inputs" ref={inputsRef}>
        {numberArr.map((num) => (
          <Buttons key={num} number={num} onClick={numberClick} />
        ))}
      </div>
      <div className="buttons">
        <button onClick={() => selectNumber(deleteNum)}>선택제외</button>
        <button onClick={() => selectNumber(pickNum)}>선택뽑기</button>
      </div>
    </div>
  );
};

export default Lotto;
