import { IGameState } from "../types"
import { INVALID_MOVE, IGameCtx } from "boardgame.io/core"

const play = (G: IGameState, ctx: IGameCtx, cardIndexInHand: number) => {
  const player = G.players[+ctx.playerID]
  const cardInHand = player.hand[cardIndexInHand]
  const maxPlayedCards = ctx.numPlayers === 3 ? 5 : ctx.numPlayers

  if (cardInHand) {
    player.hand.splice(cardIndexInHand, 1)

    G.playedCards.push({
      player: +ctx.playerID,
      card: cardInHand,
      votes: [],
    })

    if (G.playedCards.length === maxPlayedCards) {
      // when all players have played their cards,
      // shuffle the playedCards
      G.playedCards = ctx.random.Shuffle(G.playedCards)
    }

    if (ctx.playerID === ctx.currentPlayer) {
      // currentPlayer always plays the first card of the turn,
      // after which every other player enters the `play` stage to play their cards
      // and once they've all played cards, they enter the `vote stage
      ctx.events.setActivePlayers({
        others: "play",
        moveLimit: ctx.numPlayers === 3 ? 2 : 1,
        next: {
          others: "vote",
          moveLimit: 1,
        },
      })
    }
  } else {
    return INVALID_MOVE
  }
}

const vote = (G: IGameState, ctx: IGameCtx, voteForCard: number) => {
  const playedCard = G.playedCards[voteForCard]

  if (playedCard && playedCard.player !== +ctx.playerID) {
    playedCard.votes.push(+ctx.playerID)
    G.numVotes++
  } else {
    return INVALID_MOVE
  }
}

export default { play, vote }
