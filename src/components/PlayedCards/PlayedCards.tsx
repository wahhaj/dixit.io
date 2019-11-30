import React from "react"
import Card from "components/Card"
import { IPlayedCard } from "game/typings"
import { IGameCtx } from "boardgame.io/core"

type PlayedCardProps = {
  playedCards: IPlayedCard[]
  activePlayers: IGameCtx["activePlayers"]
  canVote: boolean
  onVote?: (card: number) => void

  cardWidth?: number
  cardHeight?: number
  focusCard?: number
  onCardClick?: React.Dispatch<React.SetStateAction<number>>
}

const PlayedCards: React.FC<PlayedCardProps> = (props) => {
  const inModal = typeof props.focusCard === "number"
  const shouldRevealCards = Object.values(props.activePlayers).every((state) => state === "vote")

  return (
    <React.Fragment>
      {props.playedCards.length ? (
        props.playedCards
          .filter((card, i) => !inModal || props.focusCard === i)
          .map((pc, i) =>
            shouldRevealCards ? (
              <React.Fragment key={i}>
                <Card
                  id={pc.card}
                  width={props.cardWidth}
                  height={props.cardHeight}
                  onClick={() => props.onCardClick && props.onCardClick(i)}
                />
              </React.Fragment>
            ) : (
              <Card key={i} width={props.cardWidth} height={props.cardHeight} />
            ),
          )
      ) : (
        <p>Looks like nothing here.</p>
      )}
    </React.Fragment>
  )
}

export default PlayedCards
