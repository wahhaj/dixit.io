import React, { useState } from "react"
import { IG } from "game/typings"
import { IGameCtx } from "boardgame.io/core"
import Navbar from "./Navbar"
import Status from "components/Board/Status"
import Section from "./Section"
import CardResizer from "components/CardResizer"
import PlayedCards from "components/PlayedCards"
import Hand from "components/Hand"
import ScoreBoard from "components/ScoreBoard"
import styles from "./Board.module.css"

type BoardProps = {
  G: IG
  ctx: IGameCtx
  moves: Record<string, (...args: any[]) => void>
  gameID: string
  playerID: string
  gameMetadata: any
  isActive: boolean
  isConnected: boolean
  isMultiplayer: boolean
  credentials: string | null
}

const Board: React.FC<BoardProps> = ({ G, ctx, playerID }) => {
  const player = G.players[+playerID]
  const [view, setView] = useState("played")

  return (
    <div className={styles.board}>
      <div className={styles.header}>
        <Navbar currentView={view} setView={setView} />
        <Status playerID={+playerID} activePlayers={ctx.activePlayers} players={G.players} />
      </div>

      <Section title="Player List" type="scores" currentView={view} className={`shadow ${styles.scores}`}>
        <ScoreBoard players={G.players} />
      </Section>

      <Section title="Played Cards" type="played" currentView={view} className={`${styles.played}`}>
        <CardResizer numCards={G.playedCards.length} className="flex-1 flex justify-center flex-wrap overflow-hidden">
          <PlayedCards playedCards={G.playedCards} activePlayers={ctx.activePlayers} />
        </CardResizer>
      </Section>

      <Section title="Your Hand" type="hand" currentView={view} className={`${styles.hand}`}>
        <CardResizer numCards={player.hand.length} className="flex-1 flex justify-center flex-wrap overflow-hidden">
          <Hand hand={player.hand} />
        </CardResizer>
      </Section>
    </div>
  )
}

export default Board
