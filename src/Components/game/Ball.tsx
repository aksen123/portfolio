import React from 'react'

type Props = {
  num : number
}
const Ball = ({num}: Props) => {
  return (
    <div>
      {num}
    </div>
  )
}

export default Ball
