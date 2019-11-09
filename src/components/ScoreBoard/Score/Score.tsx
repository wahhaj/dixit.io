import React from "react"

type ScoreProps = {
  color: number
  name: string
  score: number
}

const Scores: React.FC<ScoreProps> = ({ color, name, score }) => {
  const barStyle = {
    width: `${(score / 30) * 100}%`,
    transition: "width 0.2s",
  }
  const colorName = ["blue", "red", "yellow", "green", "orange", "pink"][color] || "gray"

  return (
    <div className="flex items-stretch">
      <div className="w-1/5">{name}</div>
      <div className={`border border-${colorName}-500 bg-${colorName}-100 flex-1 my-1 relative`}>
        <span className={`absolute bg-${colorName}-400 w-0 h-full pin-l pin-t`} style={barStyle}></span>
      </div>
      <div>{score}</div>
    </div>
  )
}

export default Scores
