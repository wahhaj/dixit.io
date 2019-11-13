import React, { useState } from "react"
import { IG } from "game/typings"
import { IGameCtx } from "boardgame.io/core"
import Navbar from "./Navbar"
import Status from "components/Status"
import Section from "./Section"
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

      <Section title="Player List" type="scores" currentView={view} className={`p-4 shadow ${styles.scores}`}>
        <ScoreBoard players={G.players} />
      </Section>

      <Section title="Played Cards" type="played" currentView={view} className={`p-4 ${styles.played}`}>
        <PlayedCards playedCards={G.playedCards} activePlayers={ctx.activePlayers} />
      </Section>

      <Section title="Your Hand" type="hand" currentView={view} className={`p-4 ${styles.hand}`}>
        <Hand hand={player.hand} />
      </Section>
    </div>
  )
}

export default Board
