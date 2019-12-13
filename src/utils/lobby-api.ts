import { useState } from "react"
import { LOBBY_URL } from "utils/config"
import { ILobby } from "game/typings"

type ApiEndpoint = {
  create: (numPlayers: number) => Promise<{ gameID: string }>
  load: (gameID: string) => Promise<ILobby>
  join: (gameID: string, playerID: number, playerName: string) => Promise<{ playerCredentials: string }>
}

export const useLobbyApi: <K extends keyof ApiEndpoint>(apiName: K) => [ApiEndpoint[K], boolean, boolean] = (
  apiName,
) => {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const handleResponse: (response: Response) => Promise<any> = async (response) => {
    setIsLoading(false)
    if (response.ok && response.json) {
      setHasError(false)
      return await response.json()
    } else {
      setHasError(true)
      throw Error(await response.text())
    }
  }

  const get: (endpoint: string) => Promise<any> = async (endpoint) => {
    setIsLoading(true)
    const response = await fetch(`${LOBBY_URL}/games/dixit/${endpoint}`)
    return handleResponse(response)
  }

  const post: (endpoint: string, body: Record<string, string | number>) => Promise<any> = async (endpoint, body) => {
    setIsLoading(true)

    const response = await fetch(`${LOBBY_URL}/games/dixit/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
    return handleResponse(response)
  }

  const apiEndpoints: ApiEndpoint = {
    create: (numPlayers) => post(`create`, { numPlayers }),
    load: (gameID) => get(gameID),
    join: (gameID, playerID, playerName) => post(`${gameID}/join`, { playerID, playerName }),
  }

  return [apiEndpoints[apiName], hasError, isLoading]
}
