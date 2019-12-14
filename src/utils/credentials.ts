import { PlayerWithCredentials, StoredCredentials } from "types"

export const getCredentialsForGame: (gameID: string) => PlayerWithCredentials | undefined = (gameID) => {
  const credentials = <StoredCredentials>JSON.parse(localStorage.getItem("credentials") || "{}")
  return credentials[gameID]
}

export const storeCredentialsForGame: (gameID: string, playerCredentials: PlayerWithCredentials) => void = (
  gameID,
  playerCredentials,
) => {
  const credentials = <StoredCredentials>JSON.parse(localStorage.getItem("credentials") || "{}")
  credentials[gameID] = playerCredentials
  localStorage.setItem("credentials", JSON.stringify(credentials))
}
