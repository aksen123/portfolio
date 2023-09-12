import React from 'react'

type Props ={
  number : number;
  onClick: (e: React.MouseEvent<HTMLInputElement>)=>void
}

const Buttons = ({number, onClick}:Props) => {
  return (
    <div>
      <input onClick={onClick} type="checkbox" value={number} name={`${number}`} id={`${number}`} />
      <label htmlFor={`${number}`}>{number}</label>
    </div>
  )
}

export default Buttons
