import React from "react"
import { action } from "@storybook/addon-actions"
import Button from "./Button"

export default {
  title: "Button",
}

export const text = () => <Button onClick={action("clicked")}>Hello Button</Button>

export const emoji = () => (
  <Button onClick={action("clicked")}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
)

export const disabled = () => (
  <Button disabled={true} onClick={action("shouldn't click")}>
    Disabled
  </Button>
)
