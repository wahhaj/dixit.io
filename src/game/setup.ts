import { IPlayer, IG } from "./typings"
import { IGameCtx } from "boardgame.io/core"

const NUM_CARDS = 30

export default function setup({ numPlayers, random }: IGameCtx): IG {
  const deck: number[] = random.Shuffle(Array.from(Array(NUM_CARDS), (e, i) => i))

  const numCardsInHand = numPlayers === 3 ? 7 : 6
  const players: IPlayer[] = Array.from(Array(numPlayers), (e, i) => ({
    name: `P${i}`,
    score: 0,
    hand: deck.splice(0, numCardsInHand),
  }))

  return {
    players,

    deck,
    discard: [],
    playedCards: [],

    numVotes: 0,
  }
}
