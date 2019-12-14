import { GameContext } from "boardgame.io/core"
import { GameState } from "types"
import { DECK_SIZE } from "../utils/config"

const setup: (ctx: GameContext) => GameState = ({ numPlayers, random }) => {
  const deck: GameState["deck"] = random.Shuffle(Array.from(Array(DECK_SIZE), (e, i) => i))

  const numCardsInHand = numPlayers === 3 ? 7 : 6
  const players: GameState["players"] = Array.from(Array(numPlayers), (e, i) => ({
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

export default setup
