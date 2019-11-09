import React from "react"
import styles from "./Card.module.css"
import { CARD_IMAGE_URL_PREFIX } from "config"
import back from "./back.png"

type CardProps = {
  id?: number
  className?: string
}

const Card: React.FC<CardProps> = ({ id, className }) => {
  const url = id !== undefined ? `${CARD_IMAGE_URL_PREFIX}${id.toString().padStart(4, "0")}.png` : back

  return <img src={url} alt={`Dixit card ${id}`} className={`${styles.Card} ${className} rounded-lg shadow`}></img>
}

export default Card
