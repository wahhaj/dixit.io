import React from "react"
import Card from "components/Card"
import { IPlayedCard } from "game/typings"
import { IGameCtx } from "boardgame.io/core"

type PlayedCardProps = {
  playedCards: IPlayedCard[]
  activePlayers: IGameCtx["activePlayers"]
  canVote?: boolean
  width?: number
  height?: number
}

const Hand: React.FC<PlayedCardProps> = ({ playedCards, activePlayers, width, height, canVote }) => {
  const shouldShowCards = Object.values(activePlayers).every((state) => state === "vote")

  return (
    <React.Fragment>
      {playedCards.length ? (
        playedCards.map((pc, i) => {
          if (shouldShowCards) {
            return <Card id={pc.card} key={i} width={width} height={height} />
          } else {
            return <Card key={i} width={props.cardWidth} height={props.cardHeight} />
          }
        })
      ) : (
        <p>Looks like nothing here.</p>
      )}
    </React.Fragment>
  )
}

export default Hand
