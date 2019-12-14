import React from "react"
import { Player } from "types"
import Score from "./Score"

type ScoreBoardProps = {
  players: Player[]
}

const Scores: React.FC<ScoreBoardProps> = ({ players }) => (
  <React.Fragment>
    {players.map(({ id, name, score }) => (
      <Score name={name} score={score} color={id} key={id} />
    ))}
  </React.Fragment>
)

export default Scores
