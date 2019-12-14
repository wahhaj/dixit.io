import React from "react"
import { Player, Move } from "types"

type StatusProps = {
  player: Player
  players: Player[]
}

const Hand: React.FC<StatusProps> = ({ player, players }) => {
  let status = ""
  const stringForStatus: Record<Move, string> = {
    play: "Play a card",
    vote: "Vote for a card",
  }

  if (player.status) {
    status = stringForStatus[player.status]
  } else {
    const waitingPlayers = players.filter(({ status: state }) => state !== undefined)
    const waitingStatus = waitingPlayers[0].status as Move

    status =
      `Waiting for ${waitingPlayers.map(({ name }) => name).join(", ")} ` +
      `to ${stringForStatus[waitingStatus].toLowerCase()}`
  }

  return <div className="p-2 text-center bg-primary text-dark font-bold text-xl shadow">{status}</div>
}

export default Hand
