import React, { useState, useRef, useEffect } from "react";
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

  const numberClick = (e: React.MouseEvent<HTMLInputElement>) => {
    console.log(inputsRef.current)
    if (e.currentTarget.checked) {
      setDeleteNum(deleteNum.filter((it) => +e.currentTarget.value !== it));
      setPickNum([...pickNum, +e.currentTarget.value]);
    } else {
      setDeleteNum([...deleteNum, +e.currentTarget.value]);
      setPickNum(pickNum.filter((it) => +e.currentTarget.value !== it));
    }
  };

  const selectNumber = (arr: number[]) => {
    setLuckyNumber([]);
    if (arr === pickNum && arr.length < 7) {
      alert("7개 이상 선택해주세요");
    } else {
      raffle(arr)
    }
  };

  function raffle(arr: number[]) {
    const index = Math.floor(Math.random() * arr.length);
    const arrNum = arr[index];
    countRef.current += 1;
      setLuckyNumber((luckyNumber) => [...luckyNumber, arrNum].sort((a,b)=> a - b));
      arr === pickNum
        ? setPickNum(arr.filter((it) => arrNum !== it))
        : setDeleteNum(arr.filter((it) => arrNum !== it));
    const newArr = arr.filter((it) => arrNum !== it);
    setTimeout(()=>{
      if (countRef.current > 6) {
        setPickNum([]);
        setDeleteNum([...numberArr])
        countRef.current = 1;
        inputsRef.current?.querySelectorAll('input').forEach(it =>it.checked = false)
        return;
      }
        raffle(newArr);
    },500)
  }

  return (
    <div className="Lotto">
      <div className="result" >
        {luckyNumber.map((it) => (
          <Ball key={it} num={it} />
        ))}
      </div>
      <div className="inputs" ref={inputsRef}>
        {numberArr.map((num) => (
          <Buttons  key={num} number={num} onClick={numberClick} />
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
