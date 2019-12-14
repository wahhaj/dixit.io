import React from "react"
import { Player } from "types"
import { GameContext } from "boardgame.io/core"

type StatusProps = {
  playerID: number
  activePlayers: GameContext["activePlayers"]
  playerNames: string[]
}

const Hand: React.FC<StatusProps> = ({ playerID, activePlayers, playerNames }) => {
  let status = ""
  const stringForStatus: Record<string, string> = {
    play: "Play a card",
    vote: "Vote for a card",
  }

  if (activePlayers.hasOwnProperty(playerID)) {
    status = stringForStatus[activePlayers[playerID]]
  } else {
    const waitingNames = Object.keys(activePlayers).map((pid) => playerNames[+pid])
    status = `Waiting for ${waitingNames.join(", ")} to ${stringForStatus[
      Object.values(activePlayers)[0]
    ].toLowerCase()}`
  }

  return <div className="p-2 text-center bg-primary text-dark font-bold text-xl shadow">{status}</div>
}

export default Hand
