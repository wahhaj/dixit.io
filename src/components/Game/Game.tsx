import React, { useEffect, useState } from "react"
import { Client } from "boardgame.io/react"
import { SocketIO } from "boardgame.io/multiplayer"
import { Dixit } from "game"
import { match, useHistory } from "react-router-dom"
import Board from "components/Game/Board"
import { getCredentialsForGame } from "utils/credentials"
import { useSessionApi } from "utils/session-api"
import logo from "logo.png"

type RouteParams = {
  gameID: string
  playerID: string
}

type GameProps = {
  match: match<RouteParams>
}

const Game: React.FC<GameProps> = ({ match }) => {
  const gameID = match.params.gameID
  const playerID = match.params.playerID
  const history = useHistory()
  const [load, loadError, isLoading] = useSessionApi("load")
  const [hasError, setHasError] = useState(false)

  const loadGame = async () => {
    try {
      const { players } = await load(gameID)
      const storedCredentials = getCredentialsForGame(gameID)

      // if any players don't have a name assigned (incomplete setup)
      // or stored id doesn't match current id, can't join game
      setHasError(
        players.some(({ name }) => name === undefined) || !storedCredentials || storedCredentials.id !== +playerID,
      )
    } catch (err) {
      setHasError(true)
    }
  }

  useEffect(() => {
    loadGame()
  }, [])

  const ClientComponent = Client({
    game: Dixit,
    board: Board,
    multiplayer: SocketIO({ server: "localhost:8000" }),
  })

  return isLoading || hasError ? (
    <React.Fragment>
      <nav className="bg-dark p-2 mb-8 text-center">
        <img src={logo} alt="Dixit" className="h-8 md:h-12 mx-auto cursor-pointer" onClick={() => history.push("/")} />
      </nav>

      <div className="text-center">
        {isLoading && <span>Loading...</span>}
        {hasError && <span className="text-red-600">Error loading game. Try a different Game ID.</span>}
      </div>
    </React.Fragment>
  ) : (
    <ClientComponent gameID={match.params.gameID} playerID={match.params.playerID} debug={true} />
  )
}

export default Game
