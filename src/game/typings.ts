export interface IPlayer {
  name: string
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
