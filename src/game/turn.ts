import moves from "./moves"
import { GameState } from "types"
import { GameContext } from "boardgame.io/core"

const allocateScores = (G: GameState, ctx: GameContext) => {
  const currentPlayer = G.players[+ctx.currentPlayer]
  const otherPlayers = G.players.filter((player, i) => i !== +ctx.currentPlayer)
  const [currentPlayerCard, ...otherPlayersCards] = G.playedCards

  // If everyone voted for the currentPlayer's card
  if (currentPlayerCard.votes.length === ctx.numPlayers - 1) {
    // everyone except the currentPlayer gets 2 points
    otherPlayers.forEach((player) => {
      player.score += 2
    })

    // if no one voted for the currentPlayer's card
  } else if (currentPlayerCard.votes.length === 0) {
    // everyone except the currentPlayer gets 2 points
    otherPlayers.forEach((player) => {
      player.score += 2
    })
    // plus bonus points for each vote on their card
    otherPlayersCards.forEach(({ player, votes }) => (G.players[player].score += votes.length))

    // if only some people voted for currentPlayer's card
  } else {
    // currentPlayer gets 3 points
    currentPlayer.score += 3

    currentPlayerCard.votes.forEach((playerWithCorrectGuess) => {
      // players with the correct vote also get 3 points
      G.players[playerWithCorrectGuess].score += 3
      // plus bonus points for each vote on their card
      otherPlayersCards.forEach((playedCard) => {
        if (playedCard.player === playerWithCorrectGuess) {
          G.players[playerWithCorrectGuess].score += playedCard.votes.length
        }
      })
    })
  }
}

const refillHands = (G: GameState, ctx: GameContext) => {
  // put all playedCards from this turn in the discard pile
  G.discard.push(...G.playedCards.map(({ card }) => card))

  G.players.forEach(({ hand }) => {
    const numCardsInHand = ctx.numPlayers === 3 ? 7 : 6
    const replacementCardsNeeded = numCardsInHand - hand.length

    // if deck doesn't have enough cards left to refill the hand, shuffle discard pile back into deck
    if (G.deck.length < replacementCardsNeeded) {
      G.deck = ctx.random.Shuffle([...G.discard])
      G.discard = []
    }

    // refill hand up to hand limit
    hand.push(...G.deck.splice(0, replacementCardsNeeded))
  })
}

const resetTurnState = (G: GameState) => {
  G.numVotes = 0
  G.playedCards = []
}

export default {
  activePlayers: { currentPlayer: "play" },

  stages: {
    play: {
      moves: {
        play: moves.play,
      },
    },
    vote: {
      moves: {
        vote: moves.vote,
      },
    },
  },

  endIf: ({ numVotes }: GameState, { numPlayers }: GameContext) => numVotes === numPlayers - 1,

  onEnd: (G: GameState, ctx: GameContext) => {
    allocateScores(G, ctx)
    refillHands(G, ctx)
    resetTurnState(G)
  },
}
