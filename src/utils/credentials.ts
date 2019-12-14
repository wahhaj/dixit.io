import { PlayerWithCredentials, StoredCredentials } from "types"

export const getCredentialsForGame: (gameID: string) => PlayerWithCredentials | undefined = (gameID) => {
  const credentials = JSON.parse(localStorage.getItem("credentials") || "{}") as StoredCredentials
  return credentials[gameID]
}

export const storeCredentialsForGame: (gameID: string, playerCredentials: PlayerWithCredentials) => void = (
  gameID,
  playerCredentials,
) => {
  const credentials = JSON.parse(localStorage.getItem("credentials") || "{}") as StoredCredentials
  credentials[gameID] = playerCredentials
  localStorage.setItem("credentials", JSON.stringify(credentials))
}
