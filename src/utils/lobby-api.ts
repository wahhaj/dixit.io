import { useState } from "react"
import { LOBBY_URL } from "utils/config"

type ApiEndpoint = {
  create: (numPlayers: number) => Promise<any>
  load: (gameID: string) => Promise<any>
  join: (gameID: string, playerID: number, playerName: string) => Promise<any>
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

  const get: (endpoint: string) => Promise<any> = (endpoint) => {
    setIsLoading(true)
    return fetch(`${LOBBY_URL}/games/dixit/${endpoint}`).then(handleResponse)
  }

  const post: (endpoint: string, body: Record<string, string | number>) => Promise<any> = (endpoint, body) => {
    setIsLoading(true)

    return fetch(`${LOBBY_URL}/games/dixit/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then(handleResponse)
  }

  const apiEndpoints: ApiEndpoint = {
    create: (numPlayers) => post(`create`, { numPlayers }),
    load: (gameID) => get(gameID),
    join: (gameID, playerID, playerName) =>
      post(`${gameID}/join`, {
        playerID,
        playerName,
      }),
  }

  return [apiEndpoints[apiName], hasError, isLoading]
}
