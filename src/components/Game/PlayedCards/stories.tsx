import React from "react"
import PlayedCards from "./PlayedCards"

export default {
  title: "PlayedCards",
  component: PlayedCards,
}

export const empty = () => <PlayedCards canVote={false} playedCards={[]} activePlayers={{}} />

export const hidden = () => (
  <PlayedCards
    canVote={false}
    playedCards={[
      {
        player: 0,
        card: 1,
        votes: [],
      },
    ]}
    activePlayers={{
      "1": "play",
      "2": "play",
    }}
  />
)

export const shown = () => (
  <PlayedCards
    canVote={false}
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
    activePlayers={{
      "1": "vote",
      "2": "vote",
      "3": "vote",
    }}
  />
)
