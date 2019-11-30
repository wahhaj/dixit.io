import React from "react"
import { Client } from "boardgame.io/react"
import { SocketIO } from "boardgame.io/multiplayer"
import { Dixit } from "game"
import Home from "components/Home"
import Board from "components/Board"
import Lobby from "components/Lobby"
import { BrowserRouter, Switch, Route } from "react-router-dom"

const Game = Client({ game: Dixit, numPlayers: 3, board: Board, multiplayer: SocketIO({ server: "localhost:8000" }) })

// const App: React.FC = () => {
//   return <Game playerID={window.location.pathname.replace("/", "")} gameID="0" debug={true} />
// }

const App: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/:gameID" component={Lobby} />
      <Route path="/" component={Home} />
    </Switch>
  </BrowserRouter>
)

export default App
