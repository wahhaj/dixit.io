import React, { FunctionComponent } from "react"
import { IconPlayed, IconHand, IconScores, IconProps } from "components/Icon"

type Sections = "played" | "hand" | "scores"

type SectionProps = {
  title: string
  type: Sections
  currentView: string
  className: string
}

const icons: Record<Sections, FunctionComponent<IconProps>> = {
  played: IconPlayed,
  hand: IconHand,
  scores: IconScores,
}

const Scores: React.FC<SectionProps> = (props) => {
  const IconComponent = icons[props.type]
  const displayClass = props.currentView !== props.type ? " hidden md:block" : ""

  return (
    <div className={props.className + displayClass}>
      <div className="flex justify-center items-center text-dark">
        <IconComponent size={36} />
        <span className="font-bold text-xl ml-4">{props.title}</span>
      </div>

      <hr className="border-dark w-48 max-w-full my-4 mx-auto" />

      {props.children}
    </div>
  )
}

export default Scores
