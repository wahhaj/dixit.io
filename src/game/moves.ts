import { IG } from "./typings"
import { INVALID_MOVE, IGameCtx } from "boardgame.io/core"

const play = (G: IG, ctx: IGameCtx, playCard: number) => {
  const player = G.players[+ctx.playerID]
  const cardIndexInHand = player.hand.indexOf(playCard)

  if (cardIndexInHand !== -1) {
    player.hand.splice(cardIndexInHand, 1)

    G.playedCards.push({
      player: +ctx.playerID,
      card: playCard,
      votes: [],
    })

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

const vote = (G: IG, ctx: IGameCtx, voteForCard: number) => {
  const playedCard = G.playedCards.find(({ card }) => card === voteForCard)

  if (playedCard && playedCard.player !== +ctx.playerID) {
    playedCard.votes.push(+ctx.playerID)
    G.numVotes++
  } else {
    return INVALID_MOVE
  }
}

export default { play, vote }
