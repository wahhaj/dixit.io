import React from "react"
import { Player, PlayerInSession } from "types"
import Score from "./Score"

type ScoreBoardProps = {
  playerNames: string[]
  scores: number[]
}

const Scores: React.FC<ScoreBoardProps> = ({ playerNames, scores }) => (
  <React.Fragment>
    {scores.map((score, i) => (
      <Score name={playerNames[i]} score={score} color={i} key={i} />
    ))}
  </React.Fragment>
)

export default Scores
