import React from "react"
import Card from "components/Game/Card"
import { PlayerState } from "types"
import Button from "components/Button"

type HandProps = {
  cards: PlayerState["hand"]
  canPlay: boolean
  onPlay: (card: number) => void

  cardWidth?: number
  cardHeight?: number
  focusCard?: number
  onCardClick?: React.Dispatch<React.SetStateAction<number>>
}

const Hand: React.FC<HandProps> = (props) => {
  const inModal = typeof props.focusCard === "number"

  const PlayButton = (
    <Button className="text-xl text-dark bg-primary m-4" onClick={() => props.onPlay && props.onPlay(props.focusCard!)}>
      Play
    </Button>
  )

  return (
    <React.Fragment>
      {props.cards
        .filter((card, i) => !inModal || props.focusCard === i)
        .map((card, i) => (
          <Card
            id={card}
            key={i}
            width={props.cardWidth}
            height={props.cardHeight}
            onClick={() => props.onCardClick && props.onCardClick(i)}
          />
        ))}

      {inModal && props.canPlay && PlayButton && <div className="m-4"></div>}
    </React.Fragment>
  )
}

export default Hand
