import React from "react"
import { IPlayer } from "types"
import { IGameCtx } from "boardgame.io/core"

type StatusProps = {
  playerID: number
  activePlayers: IGameCtx["activePlayers"]
  players: IPlayer[]
}

const Hand: React.FC<StatusProps> = ({ playerID, activePlayers, players }) => {
  let status = ""
  const stringForStatus: Record<string, string> = {
    play: "Play a card",
    vote: "Vote for a card",
  }

  if (activePlayers.hasOwnProperty(playerID)) {
    status = stringForStatus[activePlayers[playerID]]
  } else {
    const playerNames = Object.keys(activePlayers).map((pid) => players[+pid].name)
    status = `Waiting for ${playerNames.join(", ")} to ${stringForStatus[
      Object.values(activePlayers)[0]
    ].toLowerCase()}`
  }

  return <div className="p-2 text-center bg-primary text-dark font-bold text-xl shadow">{status}</div>
}

export default Hand
