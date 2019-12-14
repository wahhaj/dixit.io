import React from "react"
import { PlayerInSession } from "types"

type PlayerListProps = {
  players: PlayerInSession[]
}

const PlayersList: React.FC<PlayerListProps> = ({ players }) => (
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

export default PlayersList
