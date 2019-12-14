export type Move = "vote" | "play"

export interface GameState {
  players: PlayerState[]

  deck: number[]
  discard: number[]

  playedCards: PlayedCard[]
  numVotes: number
}

export interface PlayedCard {
  player: number
  card: number
  votes: number[]
}

export interface PlayerState {
  score: number
  hand: number[]
}

export interface Player extends PlayerState, PlayerInSession {
  status?: Move
}

export interface GameSession {
  id: string
  players: PlayerInSession[]
}

export interface PlayerInSession {
  id: number
  name: string
}

export interface PlayerWithCredentials extends PlayerInSession {
  credentials: string
}

export interface StoredCredentials {
  [gameID: string]: PlayerWithCredentials
}
