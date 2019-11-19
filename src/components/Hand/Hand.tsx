import React from "react"
import Card from "components/Card"
import { IPlayer } from "game/typings"

type HandProps = {
  cards: IPlayer["hand"]
  canPlay: boolean

  cardWidth?: number
  cardHeight?: number
  currentCard?: number
  onCardClick?: React.Dispatch<React.SetStateAction<number>>
}

const Hand: React.FC<HandProps> = ({ cards, cardWidth, cardHeight, onCardClick, currentCard }) => {
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
    </React.Fragment>
  )
}

export default Hand
