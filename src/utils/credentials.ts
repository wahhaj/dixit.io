import { useEffect, useState } from "react"
import { IPlayerWithCredentials, IStoredCredentials } from "types"

export type PlayerCredential = {
  id: number
  name?: string
  credential?: string
}

type StoredCredentials = {
  [gameID: string]: PlayerCredential
}

export const getCredentials: (gameID: string) => IPlayerWithCredentials | undefined = (gameID) => {
  const ls = localStorage.getItem("credentials")

  if (ls) {
    return (<IStoredCredentials>JSON.parse(ls))[gameID]
  }
}

export const setCredentials: (gameID: string, credential: IPlayerWithCredentials) => void = (gameID, credential) => {
  const existingCredentials = <StoredCredentials>JSON.parse(<string>localStorage.getItem("credentials"))
  const newCredentials = { ...existingCredentials }
  newCredentials[gameID] = credential
  localStorage.setItem("credentials", JSON.stringify(newCredentials))
}
