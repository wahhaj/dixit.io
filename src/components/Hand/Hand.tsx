import React from "react"
import Card from "components/Card"
import { IPlayer } from "game/typings"

type HandProps = {
  hand: IPlayer["hand"]
  width?: number
  height?: number
}

const Hand: React.FC<HandProps> = ({ hand, width, height }) => {
  return (
    <React.Fragment>
      {hand.map((card, i) => (
        <Card id={card} key={i} className="m-1" width={width} height={height} />
      ))}
    </React.Fragment>
  )
}

export default Hand
