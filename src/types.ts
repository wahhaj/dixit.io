export interface IPlayer {
  score: number
  hand: number[]
}

export interface IPlayedCard {
  player: number
  card: number
  votes: number[]
}

export interface IG {
  players: IPlayer[]

  deck: number[]
  discard: number[]
  playedCards: IPlayedCard[]

  numVotes: number
}

export interface ILobby {
  roomID: string
  players: IPlayerInLobby[]
}

export interface IPlayerInLobby {
  id: number
  name: string
}

export interface IPlayerWithCredentials {
  id: number
  name: string
  credential: string
}

export interface IStoredCredentials {
  [gameID: string]: IPlayerWithCredentials
}
