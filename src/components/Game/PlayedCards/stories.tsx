import React from "react"
import PlayedCards from "./PlayedCards"
import { Player } from "types"
import { action } from "@storybook/addon-actions"

export default {
  title: "PlayedCards",
  component: PlayedCards,
}

const players: Player[] = [
  {
    id: 0,
    name: "A",
    score: 5,
    hand: [],
    status: "play",
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

export const empty = () => (
  <PlayedCards
    playedCards={[]}
    players={players}
    playerID={0}
    canVote={false}
    onVote={(card) => action("Voted for: " + card)}
  />
)

export const hidden = () => (
  <PlayedCards
    playedCards={[
      {
        player: 0,
        card: 1,
        votes: [],
      },
    ]}
    players={players}
    playerID={0}
    canVote={false}
    onVote={(card) => action("Voted for: " + card)}
  />
)

export const shown = () => (
  <PlayedCards
    playedCards={[
      {
        player: 0,
        card: 0,
        votes: [],
      },
      {
        player: 1,
        card: 1,
        votes: [],
      },
      {
        player: 2,
        card: 2,
        votes: [],
      },
      {
        player: 3,
        card: 3,
        votes: [],
      },
    ]}
    players={players.map((player) => ({ ...player, status: "vote" }))}
    playerID={0}
    canVote={false}
    onVote={(card) => action("Voted for: " + card)}
  />
)
