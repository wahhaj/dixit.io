import React, { useState, useEffect } from "react"
import Button from "components/Button"
import Input from "components/Input"
import logo from "logo.png"
import { match } from "react-router-dom"
// import Join from "./Join"
import { LOBBY_URL } from "utils/config"
import { useLobbyApi } from "utils/lobby-api"
import { useLocalStorage } from "utils/localstorage"
import Seat from "./Seat"
import { useHistory } from "react-router-dom"

import { getCredentials, setCredentials } from "utils/credentials"
import { ILobby, IPlayerInLobby, IPlayerWithCredentials, IStoredCredentials } from "game/typings"

type RouteParams = {
  gameID: string
}

type LobbyProps = {
  match: match<RouteParams>
}

const PlayersList: React.FC<{ players: IPlayerInLobby[] }> = ({ players }) => (
  <React.Fragment>
    <h2 className="text-xl leading-none">Players</h2>
    <hr className="w-48 max-w-full mt-2 mb-4 mx-auto" />
    <ul className="text-center">
      {players.map(({ name }, i) =>
        name ? (
          <li className="text-xl mb-4" key={i}>
            {name}
          </li>
        ) : (
          <li className="text-gray-600 mb-4" key={i}>
            Waiting for player...
          </li>
        ),
      )}
    </ul>
  </React.Fragment>
)

const JoinForm: React.FC<{ joinLobby: (name: string) => void }> = ({ joinLobby }) => {
  const [name, setName] = useState("")

  return (
    <React.Fragment>
      <h2 className="text-xl leading-none">Join lobby</h2>
      <hr className="w-48 max-w-full mt-2 mb-4 mx-auto" />
      <Input
        id="name"
        label="Your Name"
        placeholder="John Smith"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <Button className="bg-primary" onClick={() => joinLobby(name)}>
        Join Lobby
      </Button>
    </React.Fragment>
  )
}

const Lobby: React.FC<LobbyProps> = ({ match }) => {
  const gameID = match.params.gameID
  const history = useHistory()

  const [loadLobby, loadError, loadingLobby] = useLobbyApi("load")
  const [joinLobby, joinError, joiningLobby] = useLobbyApi("join")
  const [playersInLobby, setPlayersInLobby] = useState<IPlayerInLobby[]>([])

  const [name, setName] = useState("")
  const [hasJoined, setHasJoined] = useState(false)
  const [timer, setTimer] = useState<number>()

  const getPlayersInLobby = async () => {
    try {
      const { players } = await loadLobby(gameID)
      setPlayersInLobby(players)
    } catch (err) {
      console.error(err)
    }
  }

  const join = async (name: string) => {
    try {
      const id = (playersInLobby.find(({ name }) => name === undefined) || playersInLobby[0]).id
      const { playerCredentials } = await joinLobby(gameID, id, name)

      setHasJoined(true)

      setCredentials(gameID, {
        id,
        name,
        credential: playerCredentials,
      })
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    getPlayersInLobby()

    if (getCredentials(gameID)) {
      setHasJoined(true)
      if (timer === undefined) {
        // setTimer(setInterval(loadPlayers, 2000) as any)
      }
    }

    return function cleanup() {
      clearInterval(timer)
    }
  }, [hasJoined])

  return (
    <React.Fragment>
      <nav className="bg-dark p-2 text-center">
        <img src={logo} alt="Dixit" className="h-8 md:h-12 mx-auto cursor-pointer" onClick={() => history.push("/")} />
      </nav>

      <div className="mx-auto my-8 p-4 max-w-2xl text-dark flex flex-col items-center">
        <h2 className="text-xl leading-none">Lobby ID</h2>

        <hr className="w-48 max-w-full mt-2 mb-4 mx-auto" />

        <p className="text-xl mb-16">{gameID}</p>

        {hasJoined ? (
          <PlayersList players={playersInLobby} />
        ) : loadingLobby ? (
          <div>Loading...</div>
        ) : loadError ? (
          <div className="text-red-600">Error loading lobby. Try a different Lobby ID.</div>
        ) : (
          <JoinForm joinLobby={join} />
        )}
      </div>
    </React.Fragment>
  )
}

export default Lobby
