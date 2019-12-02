import React, { useState } from "react"
import Button from "components/Button"
import Input from "components/Input"
import logo from "logo.png"
import { LOBBY_URL } from "utils/config"
import { useHistory } from "react-router-dom"

const createRoom = async (numPlayers: number) => {
  const response = await fetch(`${LOBBY_URL}/games/dixit/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      numPlayers: numPlayers,
    }),
  })

  const body = await response.json()

  if (body.gameID) {
    return body.gameID
  }
}

const Home: React.FC = () => {
  const history = useHistory()
  const [numPlayers, setNumPlayers] = useState(4)
  const [gameID, setGameID] = useState("")

  return (
    <div>
      <nav className="bg-dark p-2 text-center">
        <img src={logo} alt="Dixit" className="h-8 md:h-12 mx-auto" />
      </nav>

      <div className="text-dark p-8">
        <h1 className="font-bold text-2xl text-center mb-6">Welcome to Dixit.io!</h1>

        <div className="mx-auto max-w-2xl mb-16 flex flex-col items-center">
          <h2 className="text-xl leading-none">Create a new room</h2>

          <hr className="w-48 max-w-full mt-2 mb-4 mx-auto" />

          <div className="relative mb-2">
            <select
              value={numPlayers}
              onChange={(e) => setNumPlayers(+e.target.value)}
              className="appearance-none bg-gray-200 border border-gray-200 py-1 pl-2 pr-8 rounded focus:outline-none"
            >
              <option value="3">3 players</option>
              <option value="4">4 players</option>
              <option value="5">5 players</option>
              <option value="6">6 players</option>
            </select>

            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>

          <Button
            className="bg-primary"
            onClick={() => {
              createRoom(numPlayers).then((gameID) => {
                history.push(`/${gameID}`)
              })
            }}
          >
            Create room
          </Button>
        </div>

        <div className="mx-auto max-w-2xl flex flex-col items-center">
          <h2 className="text-xl leading-none">Join existing room</h2>

          <hr className="w-48 max-w-full mt-2 mb-4 mx-auto" />

          <Input id="room-id" label="Room ID" placeholder="Abc1234" onChange={(e) => setGameID(e.target.value)} />

          <Button className="bg-primary" onClick={() => history.push(`/${gameID}`)}>
            Join room
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Home
