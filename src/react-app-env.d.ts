/// <reference types="react-scripts" />

declare module "boardgame.io/core" {
  export class Random {
    Shuffle: (deck: any[]) => any[]
  }
  export class Events {
    setActivePlayers: (config: any) => void
  }

  interface GameContext {
    numPlayers: number
    turn: number
    playerID: string
    currentPlayer: string
    playOrder: string[]
    playOrderPos: number
    activePlayers: Record<string, string>
    gameover: any

    random: Random
    events: Events
  }

  export const INVALID_MOVE: string
}
declare module "boardgame.io/react"
declare module "boardgame.io/multiplayer"
declare module "boardgame.io/server"
