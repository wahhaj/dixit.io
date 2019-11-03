import React from "react"
import styles from "./Card.module.css"
import { CARD_IMAGE_URL_PREFIX } from "config"

type CardProps = {
  id: number
  className?: string
}

const Card: React.FC<CardProps> = ({ id, className }) => {
  const url = `${CARD_IMAGE_URL_PREFIX}${id.toString().padStart(4, "0")}.png`
  return <img src={url} alt={`Dixit card ${id}`} className={`${styles.Card} ${className} rounded-lg`}></img>
}

export default Card
