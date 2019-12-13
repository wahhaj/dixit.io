import React from "react"
import Card from "components/Card"
import Button from "components/Button"
import { IPlayedCard } from "types"
import { IGameCtx } from "boardgame.io/core"

type PlayedCardProps = {
  playedCards: IPlayedCard[]
  activePlayers: IGameCtx["activePlayers"]
  playerID?: number
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

  const VoteButton = (playedCard: IPlayedCard) =>
    playedCard.player !== props.playerID ? (
      <Button
        className="text-xl text-dark bg-primary m-4"
        onClick={() => props.onVote && props.onVote(props.focusCard!)}
      >
        Vote
      </Button>
    ) : (
      <div className="m-4 text-primary text-xl">You can't vote for your own card.</div>
    )

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

                {inModal && props.canVote && VoteButton(pc) && <div className="m-4"></div>}
              </React.Fragment>
            ) : (
              <Card key={i} width={props.cardWidth} height={props.cardHeight} />
            ),
          )
      ) : (
        <p>Waiting for {Object.keys(props.activePlayers)[0]} to play their card.</p>
      )}
    </React.Fragment>
  )
}

export default PlayedCards
