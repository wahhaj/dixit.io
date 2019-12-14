import React from "react"
import Card from "components/Game/Card"
import Button from "components/Button"
import { PlayedCard, Player } from "types"

type PlayedCardProps = {
  playedCards: PlayedCard[]
  players: Player[]
  playerID: number
  canVote: boolean
  onVote: (card: number) => void

  cardWidth?: number
  cardHeight?: number
  focusCard?: number
  onCardClick?: React.Dispatch<React.SetStateAction<number>>
  closeModal?: () => void
}

const PlayedCards: React.FC<PlayedCardProps> = (props) => {
  const inModal = typeof props.focusCard === "number"
  const shouldRevealCards = !props.players.some(({ status }) => status === "play")

  const VoteButton = (playedCard: PlayedCard) =>
    playedCard.player !== props.playerID ? (
      <Button
        className="text-xl text-dark bg-primary m-4"
        onClick={() => {
          props.onVote && props.onVote(props.focusCard!)
          props.closeModal && props.closeModal()
        }}
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

                {inModal && props.canVote ? VoteButton(pc) : <div className="m-4"></div>}
              </React.Fragment>
            ) : (
              <Card key={i} width={props.cardWidth} height={props.cardHeight} />
            ),
          )
      ) : (
        <p>
          Waiting for {(props.players.find(({ status }) => status === "play") as Player).name} to play the first card
        </p>
      )}
    </React.Fragment>
  )
}

export default PlayedCards
