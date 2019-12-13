import React from "react"
import { IPlayer, IPlayerInLobby } from "types"
import Score from "./Score"

type ScoreBoardProps = {
  players: IPlayer[]
}

const Scores: React.FC<ScoreBoardProps> = ({ players }) => (
  <React.Fragment>
    {players.map(({ name, score }, i) => (
      <Score name={name} score={score} color={i} key={i} />
    ))}
  </React.Fragment>
)

export default Scores
