import React from "react"
import Card from "./Card"
import { DECK_SIZE } from "config"

export default {
  title: "Card",
}

export const one = () => <Card id={0} />

export const back = () => <Card />

export const all = () => (
  <div className="flex flex-wrap">
    {Array.from(Array(DECK_SIZE), (e, i) => (
      <Card id={i} key={i} />
    ))}
  </div>
)
