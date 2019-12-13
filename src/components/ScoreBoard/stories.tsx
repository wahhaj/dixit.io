import React from "react"
import ScoreBoard from "./ScoreBoard"
import { IPlayer } from "types"

export default {
  title: "Scoring/ScoreBoard",
}

const players: IPlayer[] = [
  {
    name: "Alice",
    score: 5,
    hand: [],
  },
  {
    name: "Bob",
    score: 10,
    hand: [],
  },
  {
    name: "Charlie",
    score: 15,
    hand: [],
  },
]

export const minPlayers = () => <ScoreBoard players={players} />

export const maxPlayers = () => {
  const max: IPlayer[] = [
    ...players,
    {
      name: "Dexter",
      score: 20,
      hand: [],
    },
    {
      name: "Erlang",
      score: 25,
      hand: [],
    },
    {
      name: "Fred",
      score: 30,
      hand: [],
    },
  ]
  return <ScoreBoard players={max} />
}
