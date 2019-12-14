import React from "react"

type ScoreProps = {
  color: number
  name: string
  score: number
}

const Scores: React.FC<ScoreProps> = ({ color, name, score }) => {
  const colorName = ["blue", "red", "yellow", "green", "orange", "pink"][color] || "gray"

  return (
    <div className="items-stretch mb-4">
      <div className={`text-${colorName}-500 flex justify-between`}>
        <span>{name}</span>
        <span>{score}</span>
      </div>

      <div className={`h-4 relative border border-${colorName}-500 rounded bg-${colorName}-100`}>
        <span
          className={`h-full w-0 absolute top-0 left-0 bg-${colorName}-400 rounded-l-sm`}
          style={{
            width: `${(score / 30) * 100}%`,
            transition: "width 0.2s",
          }}
        ></span>
      </div>
    </div>
  )
}

export default Scores
