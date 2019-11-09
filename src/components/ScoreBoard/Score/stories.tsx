import React, { useState } from "react"
import Score from "./Score"
import Button from "components/Button"

export default {
  title: "Scoring/Score",
  component: Score,
}

export const completion = () => (
  <React.Fragment>
    <Score name={"Empty"} score={0} color={0} />
    <Score name={"Mid"} score={15} color={0} />
    <Score name={"Full"} score={30} color={0} />
  </React.Fragment>
)

export const colors = () => (
  <React.Fragment>
    <Score name={"0"} score={15} color={0} />
    <Score name={"1"} score={15} color={1} />
    <Score name={"2"} score={15} color={2} />
    <Score name={"3"} score={15} color={3} />
    <Score name={"4"} score={15} color={4} />
    <Score name={"5"} score={15} color={5} />
    <Score name={"Invalid: 6"} score={15} color={6} />
    <Score name={"Invalid: -1"} score={15} color={-1} />
  </React.Fragment>
)

export const narrow = () => (
  <div style={{ width: "180px" }}>
    <Score name={"01234567890"} score={15} color={0} />
  </div>
)

const TransitionWrapper: React.FC = () => {
  const [score, setScore] = useState(0)

  return (
    <React.Fragment>
      <Score name={"Dexter"} score={score} color={0} />
      <Button onClick={() => setScore(Math.floor(Math.random() * 30))}>Randomize Score</Button>
    </React.Fragment>
  )
}
export const transition = () => <TransitionWrapper />
