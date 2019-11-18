import React from "react"
import { Client } from "boardgame.io/react"
import { Dixit } from "game"
import Board from "components/Board"

const Game = Client({ game: Dixit, numPlayers: 3, board: Board, multiplayer: { server: "localhost:8000" } })

const App: React.FC = () => {
  return <Game playerID={window.location.pathname.replace("/", "")} gameID="0" debug={false} />
}

export default App
