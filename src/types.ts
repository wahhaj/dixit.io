export interface GameState {
  players: Player[]

  deck: number[]
  discard: number[]

  playedCards: PlayedCard[]
  numVotes: number
}

export interface Player {
  score: number
  hand: number[]
}

export interface PlayedCard {
  player: number
  card: number
  votes: number[]
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
  credential: string
}

export interface StoredCredentials {
  [gameID: string]: PlayerWithCredentials
}
