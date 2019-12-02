import React from "react"
import { DECK_SIZE, CARD_IMAGE_URL_PREFIX } from "utils/config"
import back from "./back.png"

type CardProps = {
  id?: number
  width?: number
  height?: number
  onClick?: () => void
}

const Card: React.FC<CardProps> = ({ id, width, height, onClick }) => {
  const hasExplicitSize = width !== undefined && height !== undefined
  const isIdValid = id !== undefined && id >= 0 && id <= DECK_SIZE

  const padId = isIdValid ? id!.toString().padStart(4, "0") : "cardback"
  const src = isIdValid ? `${CARD_IMAGE_URL_PREFIX}${padId}.png` : back

  return (
    <img
      src={src}
      alt={`Dixit#${padId}`}
      style={{
        width: hasExplicitSize ? `${width}px` : "unset",
        height: hasExplicitSize ? `${height}px` : "100%",
      }}
      className="m-1 rounded-lg shadow object-cover max-w-full max-h-full"
      onClick={onClick}
    ></img>
  )
}

export default Card
