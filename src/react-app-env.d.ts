/// <reference types="react-scripts" />

declare module "boardgame.io/core" {
  export class Random {
    Shuffle: (deck: any[]) => any[]
  }
  export class Events {
    setActivePlayers: (config: any) => void
  }

  interface IGameCtx {
    numPlayers: number
    turn: number
    playerID: string
    currentPlayer: string
    playOrder: string[]
    playOrderPos: number
    activePlayers: Record<number, string | null> | null

    random: Random
    events: Events
  }

  export const INVALID_MOVE: string
}