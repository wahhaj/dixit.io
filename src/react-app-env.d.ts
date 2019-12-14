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
    activePlayers: Record<string, import("types").Move>

    playerID: string
    currentPlayer: string

    events: Events
    gameover: any
    random: Random
  }

  export const INVALID_MOVE: string
}
declare module "boardgame.io/react"
declare module "boardgame.io/multiplayer"
declare module "boardgame.io/server"
