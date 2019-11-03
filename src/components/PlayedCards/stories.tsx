import React from "react"
import PlayedCards from "./PlayedCards"
import { IPlayedCard } from "game/typings"
import { IGameCtx } from "boardgame.io/core"

export default {
  title: "PlayedCards",
}

export const empty = () => <PlayedCards playedCards={[]} activePlayers={{}} />

export const hidden = () => (
  <PlayedCards
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
    playedCards={[
      {
        player: 0,
        card: 1,
        votes: [],
      },
      {
        player: 1,
        card: 2,
        votes: [],
      },
    ]}
    activePlayers={{
      "1": "vote",
      "2": "vote",
    }}
  />
)
