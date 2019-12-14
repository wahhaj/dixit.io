import React from "react"
import ScoreBoard from "./ScoreBoard"
import { Player } from "types"

export default {
  title: "Scoring/ScoreBoard",
}

const players: Player[] = [
  {
    id: 0,
    name: "A",
    score: 5,
    hand: [],
  },
  {
    id: 1,
    name: "B",
    score: 10,
    hand: [],
  },
  {
    id: 2,
    name: "C",
    score: 15,
    hand: [],
  },
]

export const minPlayers = () => <ScoreBoard players={players} />

export const maxPlayers = () => {
  const max: Player[] = [
    ...players,
    {
      id: 3,
      name: "D",
      score: 20,
      hand: [],
    },
    {
      id: 4,
      name: "E",
      score: 25,
      hand: [],
    },
    {
      id: 5,
      name: "F",
      score: 30,
      hand: [],
    },
  ]
  return <ScoreBoard players={max} />
}
