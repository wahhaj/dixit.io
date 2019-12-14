import React, { useState, useEffect } from "react"
import { match } from "react-router-dom"
import { useHistory } from "react-router-dom"
import { useSessionApi } from "utils/session-api"
import PlayersList from "./PlayerList"
import JoinForm from "./JoinForm"
import logo from "logo.png"
import { getCredentialsForGame } from "utils/credentials"
import { PlayerInSession } from "types"

type RouteParams = {
  gameID: string
}

type SessionProps = {
  match: match<RouteParams>
}

const Session: React.FC<SessionProps> = ({ match }) => {
  const gameID = match.params.gameID
  const history = useHistory()

  const [loadSession, loadError, loading] = useSessionApi("load")
  const [playersInSession, setPlayersInSession] = useState<PlayerInSession[]>([])
  const [hasJoined, setHasJoined] = useState(false)
  const [timer, setTimer] = useState<number>()

  const loadPlayersInSession = async () => {
    try {
      const { players } = await loadSession(gameID)
      setPlayersInSession(players)

      if (!hasJoined && !loadError && getCredentialsForGame(gameID)) {
        setHasJoined(true)
      }
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    loadPlayersInSession()

    // start polling for players in session every 2 seconds
    if (hasJoined && timer === undefined) {
      const timer = setInterval(loadPlayersInSession, 2000)
      setTimer(timer as any)
    }
  }, [hasJoined])

  useEffect(() => {
    return function cleanup() {
      clearInterval(timer)
    }
  }, [timer])

  return (
    <React.Fragment>
      <nav className="bg-dark p-2 text-center">
        <img src={logo} alt="Dixit" className="h-8 md:h-12 mx-auto cursor-pointer" onClick={() => history.push("/")} />
      </nav>

      <div className="mx-auto my-8 p-4 max-w-2xl text-dark flex flex-col items-center">
        <h2 className="text-xl leading-none">Game ID</h2>
        <hr className="w-48 max-w-full mt-2 mb-4 mx-auto" />
        <p className="text-xl mb-16">{gameID}</p>

        {hasJoined ? (
          <PlayersList players={playersInSession} />
        ) : loading ? (
          <div>Loading...</div>
        ) : loadError ? (
          <div className="text-red-600">Error loading game. Try a different Game ID.</div>
        ) : (
          <JoinForm gameID={gameID} players={playersInSession} onSubmit={() => setHasJoined(true)} />
        )}
      </div>
    </React.Fragment>
  )
}

export default Session
