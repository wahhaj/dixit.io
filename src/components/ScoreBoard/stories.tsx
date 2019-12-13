import React from "react"
import ScoreBoard from "./ScoreBoard"
import { IPlayerInGame } from "types"

export default {
  title: "Scoring/ScoreBoard",
}

const players: IPlayerInGame[] = [
  {
    score: 5,
    hand: [],
  },
  {
    score: 10,
    hand: [],
  },
  {
    score: 15,
    hand: [],
  },
]

export const minPlayers = () => <ScoreBoard players={players} />

export const maxPlayers = () => {
  const max: IPlayerInGame[] = [
    ...players,
    {
      score: 20,
      hand: [],
    },
    {
      score: 25,
      hand: [],
    },
    {
      score: 30,
      hand: [],
    },
  ]
  return <ScoreBoard players={max} />
}
