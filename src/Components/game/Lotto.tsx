import React, { useState, useRef, useEffect } from "react";
import "./lotto.scss";
import Buttons from "./Buttons";
import Ball from "./Ball";
const Lotto = () => {
  const numberArr: number[] = [...new Array(45).keys()].map((num) => num + 1);
  const [luckyNumber, setLuckyNumber] = useState<number[]>([]);
  const [deleteNum, setDeleteNum] = useState<number[]>([...numberArr]);
  const [pickNum, setPickNum] = useState<number[]>([]);
  const resultRef = useRef<HTMLDivElement>(null);

  const numberClick = (e: React.MouseEvent<HTMLInputElement>) => {
    if (e.currentTarget.checked) {
      setDeleteNum(deleteNum.filter((it) => +e.currentTarget.value !== it));
      pickNum.push(+e.currentTarget.value);
    } else {
      setPickNum(pickNum.filter((it) => +e.currentTarget.value !== it));
      deleteNum.push(+e.currentTarget.value);
    }
  };

  useEffect(()=>{
    console.log("useEffect : ",luckyNumber)
  },[deleteNum])

  const selectNumber = (arr: number[]) => {
    setLuckyNumber([]);
    if (resultRef.current) {
      console.log(resultRef.current)
      if (arr === pickNum && arr.length < 7) {
        alert("7개 이상 선택해주세요");
      } else {

        let count = 1;

        const raffle = setInterval(() => {
          const index = Math.floor(Math.random() * arr.length);
          const arrNum = arr[index];
          luckyNumber.push(arrNum)
          arr === pickNum ? setPickNum(arr.filter((num) => arrNum !== num)) : setDeleteNum(arr.filter(num => arrNum !== num ));
          count++;
          if (count > 6) {
            clearInterval(raffle);
            setDeleteNum([...deleteNum]);
            setPickNum([]);
            count = 1;
    
            console.log(arr, "lucky :",luckyNumber)
            console.log(resultRef.current?.children)
          }
        }, 500);
      }
    }
  };
  return (
    <div className="Lotto">
      <div className="inputs">
        {numberArr.map((num) => (
          <Buttons key={num} number={num} onClick={numberClick} />
        ))}
      </div>
      <div className="buttons">
        <button onClick={() => selectNumber(deleteNum)}>선택제외</button>
        <button onClick={() => selectNumber(pickNum)}>선택뽑기</button>
      </div>
      <div className="result" ref={resultRef}>
        {luckyNumber.map((it) => (
          <Ball key={it} num={it}/>
        ))}
      </div>
    </div>
  );
};

export default Lotto;
