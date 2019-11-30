import React from "react"
import Card from "./Card"
import { DECK_SIZE } from "config"
import { action } from "@storybook/addon-actions"

export default {
  title: "Card",
}

const getRandomId = () => Math.floor(Math.random() * DECK_SIZE)

export const defaultLook = () => <Card id={getRandomId()} />

export const noID = () => <Card />

export const invalidID = () => <Card id={-1} />

export const explicitSizes = () => {
  const id = getRandomId()

  return (
    <div>
      <Card id={id} width={20} height={30} />
      <Card id={id} width={40} height={60} />
      <Card id={id} width={80} height={120} />
      <Card id={id} width={120} height={180} />
      <Card id={id} width={180} height={270} />
      <Card id={id} width={360} height={540} />
    </div>
  )
}

export const onClick = () => <Card id={getRandomId()} onClick={action("clicked")} />

export const all = () => (
  <div className="flex flex-wrap">
    {Array.from(Array(DECK_SIZE), (e, i) => (
      <Card id={i} key={i} />
    ))}
  </div>
)
