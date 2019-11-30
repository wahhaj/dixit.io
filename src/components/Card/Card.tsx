import React from "react"
import { CARD_IMAGE_URL_PREFIX } from "config"
import back from "./back.png"

type CardProps = {
  id?: number
  width?: number
  height?: number
  onClick?: () => void
}

const Card: React.FC<CardProps> = ({ id, className, width, height, onClick }) => {
  const url = id !== undefined ? `${CARD_IMAGE_URL_PREFIX}${id.toString().padStart(4, "0")}.png` : back
  const hasExplicitSize = width !== undefined && height !== undefined

  return (
    <img
      src={url}
      alt={`Dixit card ${id}`}
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
