import React from "react"
import { Client } from "boardgame.io/react"
import { Dixit } from "game"
import Card from "components/Card"
import Hand from "components/Hand"
import PlayedCards from "components/PlayedCards"

const Board = (props: any) => {
  const player = props.G.players[props.playerID]
  return (
    <div>
      <p>
        {player.name} - {player.score}
      </p>
      <p>{JSON.stringify(props.ctx.activePlayers)}</p>
      <p>{JSON.stringify(props.G.playedCards)}</p>
      <PlayedCards playedCards={props.G.playedCards} activePlayers={props.ctx.activePlayers} />
      <Hand hand={player.hand} />
    </div>
  )
}
const Game = Client({ game: Dixit, numPlayers: 3, board: Board, multiplayer: { server: "localhost:8000" } })

const App: React.FC = () => {
  return (
    <div>
      <header>
        <h1 className="text-center text-4xl">Dixit</h1>
        <Game playerID={window.location.pathname.replace("/", "")} gameID="0" debug={true} />
      </header>
    </div>
  )
}

export default App
