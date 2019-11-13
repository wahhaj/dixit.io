import React from "react"
import Card from "components/Card"
import { IPlayedCard } from "game/typings"
import { IGameCtx } from "boardgame.io/core"

type PlayedCardProps = {
  playedCards: IPlayedCard[]
  activePlayers: IGameCtx["activePlayers"]
}

const Hand: React.FC<PlayedCardProps> = ({ playedCards, activePlayers }) => {
  const shouldShowCards = Object.values(activePlayers).every((state) => state === "vote")

  return (
    <div className="flex flex-wrap justify-center">
      {playedCards.map((pc, i) => {
        if (shouldShowCards) {
          return <Card id={pc.card} key={i} className="mx-2" />
        } else {
          return <Card key={i} className="mx-2" />
        }
      })}
    </div>
  )
}

export default Hand
