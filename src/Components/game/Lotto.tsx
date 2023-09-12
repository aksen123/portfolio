import React,{useState} from "react";
import "./lotto.scss";
import Buttons from "./Buttons";


const Lotto = () => {
  const numberArr: number[] = [...new Array(45).keys()].map((num) => num + 1);
  const luckyNumber:number[] = []
  const [deleteNum, setDeleteNum] = useState<number[]>([...numberArr])
  const [pickNum, setPickNum] = useState<number[]>([])
  const numberClick = (e: React.MouseEvent<HTMLInputElement>) => {
    if(e.currentTarget.checked) {
      setDeleteNum(deleteNum.filter(it => +e.currentTarget.value !== it))
      pickNum.push(+e.currentTarget.value)
    }else {
      setPickNum(pickNum.filter(it => +e.currentTarget.value !== it))
      deleteNum.push(+e.currentTarget.value)
    }
  }
  // console.log(deleteNum,pickNum)
  const selectNumber = (arr: number[]) => {
    if(pickNum.length < 7) {
      alert('7개 이상 선택해주세요')
    } else {
      const raffle = setInterval(()=>{
  
      },500)
    }
  }
  return (
    <div className="Lotto">
      <div className="inputs">
        {numberArr.map((num) => (
          <Buttons key={num} number={num} onClick={numberClick}/>
        ))}
      </div>
      <div className="buttons">
        <button>선택제외</button>
        <button>선택뽑기</button>
      </div>
      {luckyNumber.map(it => <span>{it}</span>)}
    </div>
  );
};

export default Lotto;
