import moves from "./moves"
import { IG } from "./typings"
import { IGameCtx } from "boardgame.io/core"

const allocateScores = (G: IG, ctx: IGameCtx) => {
  const currentPlayer = G.players[+ctx.currentPlayer]
  const otherPlayers = G.players.filter((player, i) => i !== +ctx.currentPlayer)
  const [currentPlayerCard, ...otherPlayersCards] = G.playedCards

  if (currentPlayerCard.votes.length === ctx.numPlayers - 1) {
    otherPlayers.forEach((player) => {
      player.score += 2
    })
  } else if (currentPlayerCard.votes.length === 0) {
    otherPlayers.forEach((player) => {
      player.score += 2
    })
    otherPlayersCards.forEach(({ player, votes }) => (G.players[player].score += votes.length))
  } else {
    currentPlayer.score += 3

    currentPlayerCard.votes.forEach((playerWithCorrectGuess) => {
      G.players[playerWithCorrectGuess].score += 3

      otherPlayersCards.forEach((playedCard) => {
        if (playedCard.player === playerWithCorrectGuess) {
          G.players[playerWithCorrectGuess].score += playedCard.votes.length
        }
      })
    })
  }
}

const refillHands = (G: IG, { numPlayers }: IGameCtx) => {
  G.discard.push(...G.playedCards.map(({ card }) => card))

  G.players.forEach(({ hand }) => {
    const numCardsInHand = numPlayers === 3 ? 7 : 6
    const replacementCardsNeeded = numCardsInHand - hand.length

    if (G.deck.length < replacementCardsNeeded) {
      G.deck = [...G.discard]
      G.discard = []
    }

    hand.push(...G.deck.splice(0, replacementCardsNeeded))
  })
}

export default {
  activePlayers: { player: "play" },

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

  endIf: ({ numVotes }: IG, { numPlayers }: IGameCtx) => numVotes === numPlayers - 1,

  onEnd: (G: IG, ctx: IGameCtx) => {
    allocateScores(G, ctx)
    refillHands(G, ctx)
    G.numVotes = 0
    G.playedCards = []
  },
}
