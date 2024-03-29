import React, { useState } from "react"
import Button from "components/Button"
import Input from "components/Input"
import logo from "logo.png"
import { useHistory } from "react-router-dom"
import { useSessionApi } from "utils/session-api"

const Home: React.FC = () => {
  const history = useHistory()
  const [numPlayers, setNumPlayers] = useState(4)
  const [gameID, setGameID] = useState("")

  const [newGame, newError] = useSessionApi("create")
  const [loadGame, loadError] = useSessionApi("load")

  return (
    <React.Fragment>
      <nav className="bg-dark p-2 text-center">
        <img src={logo} alt="Dixit" className="h-8 md:h-12 mx-auto" />
      </nav>

      <div className="mx-auto my-8 p-4 max-w-2xl text-dark">
        <h1 className="font-bold text-2xl text-center mb-6">Welcome to Dixit.io!</h1>

        <section className="flex flex-col items-center mb-16">
          <h2 className="text-xl leading-none">Start New Game</h2>

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

          {newError && <div className="text-red-600 mb-2">Error starting game. Try again.</div>}

          <Button
            className="bg-primary"
            onClick={async () => {
              try {
                let { gameID } = await newGame(numPlayers)
                history.push(`/${gameID}`)
              } catch (err) {
                console.error(err)
              }
            }}
          >
            Start Game
          </Button>
        </section>

        <section className="flex flex-col items-center">
          <h2 className="text-xl leading-none">Load Existing Game</h2>

          <hr className="w-48 max-w-full mt-2 mb-4 mx-auto" />

          <Input
            id="game-id"
            label="Game ID"
            placeholder="ABC123"
            value={gameID}
            hasError={loadError}
            onChange={(e) => setGameID(e.target.value)}
          />

          {loadError && <div className="text-red-600 mb-2">Error loading game. Try a different Game ID.</div>}

          <Button
            className="bg-primary"
            onClick={async () => {
              if (gameID.length) {
                try {
                  await loadGame(gameID)
                  history.push(`/${gameID}`)
                } catch (err) {
                  console.error(err)
                }
              }
            }}
          >
            Load Game
          </Button>
        </section>
      </div>
    </React.Fragment>
  )
}

export default Home
