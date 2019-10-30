import { IG } from "./typings"
import setup from "./setup"
import turn from "./turn"

export const Dixit = {
  name: "dixit",
  setup,
  turn,
  endIf: (G: IG) => {
    const SCORE_TO_WIN = 30
    const winners = G.players.filter(({ score }) => score >= SCORE_TO_WIN)
    if (winners.length) {
      return winners
    }
  },
}
