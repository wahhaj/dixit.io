import React, { useState } from "react"
import { GameState, PlayerInSession } from "types"
import { GameContext } from "boardgame.io/core"
import Navbar from "./Navbar"
import Status from "components/Game/Board/Status"
import Section from "./Section"
import CardContainer from "components/Game/CardContainer"
import PlayedCards from "components/Game/PlayedCards"
import Hand from "components/Game/Hand"
import ScoreBoard from "components/Game/ScoreBoard"
import styles from "./Board.module.css"

type BoardProps = {
  G: GameState
  ctx: GameContext
  moves: Record<string, (...args: any[]) => void>
  gameID: string
  playerID: string
  gameMetadata: PlayerInSession[]
  isActive: boolean
  isConnected: boolean
  isMultiplayer: boolean
  credentials: string | null
  match: any
}

const Board: React.FC<BoardProps> = ({ G, ctx, gameMetadata, moves, playerID }) => {
  const player = G.players[+playerID]
  const [view, setView] = useState("played")

  const canPlay = ctx.activePlayers[+playerID] === "play"
  const canVote = ctx.activePlayers[+playerID] === "vote"

  const playerNames = gameMetadata.map((p) => p.name)

  return (
    <div className={styles.board}>
      <div className={styles.header}>
        <Navbar currentView={view} setView={setView} />
        <Status playerID={+playerID} activePlayers={ctx.activePlayers} playerNames={playerNames} />
      </div>

      <Section title="Player List" type="scores" currentView={view} className={`shadow ${styles.scores}`}>
        <ScoreBoard scores={G.players.map(({ score }) => score)} playerNames={playerNames} />
      </Section>

      <Section title="Played Cards" type="played" currentView={view} className={`${styles.played}`}>
        <CardContainer numCards={G.playedCards.length}>
          <PlayedCards
            playedCards={G.playedCards}
            activePlayers={ctx.activePlayers}
            playerID={+playerID}
            canVote={canVote}
            onVote={moves.vote}
          />
        </CardContainer>
      </Section>

      <Section title="Your Hand" type="hand" currentView={view} className={`${styles.hand}`}>
        <CardContainer numCards={player.hand.length}>
          <Hand cards={player.hand} canPlay={canPlay} onPlay={moves.play} />
        </CardContainer>
      </Section>
    </div>
  )
}

export default Board
