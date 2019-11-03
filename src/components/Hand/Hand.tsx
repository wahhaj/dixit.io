import React from "react"
import Card from "components/Card"
import { IPlayer } from "game/typings"

type HandProps = {
  hand: IPlayer["hand"]
}

const Hand: React.FC<HandProps> = ({ hand }) => (
  <div className="flex flex-wrap justify-around">
    {hand.map((card, i) => (
      <Card id={card} key={i} className="m-1" />
    ))}
  </div>
)

export default Hand
