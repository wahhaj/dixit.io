import React from "react"
import Button from "components/Button"
import Input from "components/Input"
import logo from "logo.png"
import { match } from "react-router-dom"
import { LOBBY_URL } from "utils/config"

type RouteParams = {
  gameID: string
}

type LobbyProps = {
  match: match<RouteParams>
}

const Lobby: React.FC<LobbyProps> = ({ match }) => {
  return (
    <div>
      <nav className="bg-dark p-2 text-center">
        <img src={logo} alt="Dixit" className="h-8 md:h-12 mx-auto" />
      </nav>

      <div className="text-dark p-8">
        <h1 className="font-bold text-2xl text-center mb-6">Welcome to Dixit.io!</h1>

        <div className="mx-auto max-w-2xl mb-16 flex flex-col items-center">
          <h2 className="text-xl leading-none">Current room: {match.params.gameID}</h2>
        </div>
      </div>
    </div>
  )
}

export default Lobby