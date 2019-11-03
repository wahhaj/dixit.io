import React from "react"
import Card from "./Card"
import { DECK_SIZE } from "config"

export default {
  title: "Card",
}

export const one = () => <Card id={0} />

export const all = () => (
  <div className="flex flex-wrap">
    {Array.from(Array(DECK_SIZE), (e, i) => (
      <div className="text-center" key={i}>
        <Card id={i} className="m-1" />
        <span>{i}</span>
      </div>
    ))}
  </div>
)
