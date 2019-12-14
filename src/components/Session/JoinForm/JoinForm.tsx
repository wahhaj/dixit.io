import React, { useState } from "react"
import Button from "components/Button"
import Input from "components/Input"
import { PlayerInSession } from "types"
import { storeCredentialsForGame } from "utils/credentials"
import { useSessionApi } from "utils/session-api"

type JoinFormProps = {
  gameID: string
  players: PlayerInSession[]
  onSubmit: () => void
}

const JoinForm: React.FC<JoinFormProps> = ({ gameID, players, onSubmit }) => {
  const [name, setName] = useState("")
  const [joinSession, hasError] = useSessionApi("join")

  const submit = async () => {
    if (name.length) {
      try {
        const firstAvailableId = (players.find((player) => player.name === undefined) || players[0]).id
        const { playerCredentials } = await joinSession(gameID, firstAvailableId, name)

        storeCredentialsForGame(gameID, {
          id: firstAvailableId,
          name,
          credentials: playerCredentials,
        })

        onSubmit()
      } catch (err) {
        console.error(err)
      }
    }
  }

  return (
    <React.Fragment>
      <h2 className="text-xl leading-none">Join Game</h2>
      <hr className="w-48 max-w-full mt-2 mb-4 mx-auto" />
      <Input
        id="name"
        label="Your Name"
        placeholder="John Smith"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {hasError && <div className="text-red-600 mb-2">Error joining game.</div>}

      <Button className="bg-primary" onClick={submit}>
        Join Game
      </Button>
    </React.Fragment>
  )
}

export default JoinForm
