import { Server } from "boardgame.io/server"
import { Dixit } from "./game"

const server = Server({ games: [Dixit] })
server.run(8000)
