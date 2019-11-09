import React from "react"
import { IPlayer } from "game/typings"
import Score from "./Score"

type ScoreBoardProps = {
  players: IPlayer[]
}

const Scores: React.FC<ScoreBoardProps> = ({ players }) => (
  <div className="flex flex-col">
    {players.map(({ name, score }, i) => (
      <Score name={name} score={score} color={i} key={i} />
    ))}
  </div>
)

export default Scores
