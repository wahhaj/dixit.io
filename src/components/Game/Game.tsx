import React from "react"
import { Client } from "boardgame.io/react"
import { SocketIO } from "boardgame.io/multiplayer"
import { Dixit } from "game"
import Board from "components/Board"
import { match } from "react-router-dom"

type RouteParams = {
  roomID: string
  playerID: string
}

type GameProps = {
  match: match<RouteParams>
}

const Game: React.FC<GameProps> = ({ match }) => {
  const ClientComponent = Client({
    game: Dixit,
    board: Board,
    multiplayer: SocketIO({ server: "localhost:8000" }),
  })

  return <ClientComponent gameID={match.params.roomID} playerID={match.params.playerID} debug={true} />
}

export default Game
