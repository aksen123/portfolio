import React from 'react'

type Props = {
  num : number
}
const Ball = ({num}: Props) => {
  const color =
    num <= 10
      ? "color1"
      : num <= 20
      ? "color2"
      : num <= 30
      ? "color3"
      : num <= 40
      ? "color4"
      : "color5";
  return (
    <div className={`Ball ${color}`}>
      {num}
    </div>
  )
}

export default Ball
