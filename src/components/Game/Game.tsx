import React from "react"
import { Client } from "boardgame.io/react"
import { SocketIO } from "boardgame.io/multiplayer"
import { Dixit } from "game"
import { match } from "react-router-dom"
import Board from "components/Board"

type RouteParams = {
  gameID: string
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

  return <ClientComponent gameID={match.params.gameID} playerID={match.params.playerID} debug={true} />
}

export default Game
