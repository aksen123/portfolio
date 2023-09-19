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
  const countRef = useRef(1);
  // let pickNum: number[] = [];
  // let deleteNum = [...numberArr]
  const numberClick = (e: React.MouseEvent<HTMLInputElement>) => {
    if (e.currentTarget.checked) {
      setDeleteNum(deleteNum.filter((it) => +e.currentTarget.value !== it));
      setPickNum([...pickNum, +e.currentTarget.value]);
      // deleteNum.filter(num =>+e.currentTarget.value !== num)
      // pickNum.push(+e.currentTarget.value)
      console.log(pickNum);
    } else {
      setDeleteNum([...deleteNum, +e.currentTarget.value]);
      setPickNum(pickNum.filter((it) => +e.currentTarget.value !== it));
      // pickNum.filter(num =>+e.currentTarget.value !== num)
      // deleteNum.push(+e.currentTarget.value)
    }
  };

  // const [count, setCount] = useState(0)

  // useEffect(() => {
  //   // console.log("useEffect : ", pickNum);
  //   // console.log("luckyNumber : ", luckyNumber);
  //   console.log("deleteNum : ", deleteNum);
  // }, [pickNum, deleteNum,luckyNumber]);

  let test1 = useRef<number[]>([]);
  const selectNumber = (arr: number[]) => {
    setLuckyNumber([]);
    if (resultRef.current) {
      console.log(resultRef.current);
    }
    if (arr === pickNum && arr.length < 7) {
      alert("7개 이상 선택해주세요");
    } else {
      const raffle = setInterval(() => {
        console.log(countRef.current);

        const index = Math.floor(Math.random() * arr.length);
        const arrNum = arr[index];
        setLuckyNumber((luckyNumber) => [...luckyNumber, arr[index]]);
        countRef.current += 1;
        arr.filter((num) => arrNum !== num);
        clearInterval(raffle);
        // if (countRef.current > 6) {
        //   clearInterval(raffle);

        // }
      }, 500);
      // if(countRef.current < 6){
      //   raffle
      // } else {
      //   setDeleteNum([...numberArr]);
      //   setPickNum([]);
      //   countRef.current = 1;
      // }
    }
  };
  async function test12(arr: number[]) {
    const index = Math.floor(Math.random() * arr.length);
    const arrNum = arr[index];
    countRef.current += 1;
    const test112 = await setInterval(() => {
      setLuckyNumber((luckyNumber) => [...luckyNumber, arrNum]);
      arr === pickNum
        ? setPickNum(arr.filter((it) => arrNum !== it))
        : setDeleteNum(arr.filter((it) => arrNum !== it));
      clearInterval(test112);
    }, 500);
    const newArr = arr.filter((it) => arrNum !== it);
    setTimeout(()=>{
      if (countRef.current > 6) return;
      test12(newArr);

    },500)
  }
  const test = (arr: number[]) => {
    luckyNumber.length < 6 ? test12(arr) : console.log("end");
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
        <button onClick={() => test12(deleteNum)}>test</button>
      </div>
      <div className="result" ref={resultRef}>
        {luckyNumber.map((it) => (
          <Ball num={it} />
        ))}
      </div>
    </div>
  );
};

export default Lotto;
