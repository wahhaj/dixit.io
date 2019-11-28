import React from "react"
import Card from "components/Card"
import { IPlayer } from "game/typings"
import Button from "components/Button"

type HandProps = {
  cards: IPlayer["hand"]
  canPlay: boolean
  playCard?: (card: number) => void

  cardWidth?: number
  cardHeight?: number
  currentCard?: number
  onCardClick?: React.Dispatch<React.SetStateAction<number>>
}

const Hand: React.FC<HandProps> = ({ cards, cardWidth, cardHeight, onCardClick, currentCard, canPlay, playCard }) => {
  return (
    <React.Fragment>
      {cards
        .filter((card, i) => currentCard === undefined || currentCard === i)
        .map((card, i) => (
          <Card
            id={card}
            key={i}
            className="m-1"
            width={cardWidth}
            height={cardHeight}
            onClick={() => onCardClick && onCardClick(i)}
          />
        ))}

      {currentCard !== undefined && canPlay && playCard !== undefined ? (
        <Button className="bg-primary text-dark text-xl pointer-events-auto" onClick={() => playCard(currentCard)}>
          Play
        </Button>
      ) : null}
    </React.Fragment>
  )
}

export default Hand
