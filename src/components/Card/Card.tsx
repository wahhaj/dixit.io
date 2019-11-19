import React from "react"
import { CARD_IMAGE_URL_PREFIX } from "config"
import back from "./back.png"

type CardProps = {
  id?: number
  className?: string
  width?: number
  height?: number
  onClick?: () => void
}

const Card: React.FC<CardProps> = ({ id, className, width = 180, height = 270, onClick }) => {
  const url = id !== undefined ? `${CARD_IMAGE_URL_PREFIX}${id.toString().padStart(4, "0")}.png` : back

  return (
    <img
      src={url}
      alt={`Dixit card ${id}`}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        objectFit: "cover",
      }}
      className={`${className} rounded-lg shadow`}
      onClick={onClick}
    ></img>
  )
}

export default Card
