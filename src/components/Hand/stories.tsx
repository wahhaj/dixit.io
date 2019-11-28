import React from "react"
import Hand from "./Hand"

export default {
  title: "Hand",
}

const hand = [1, 2, 3, 4, 5, 6]
export const fullHand = () => <Hand cards={hand} canPlay={false} />
