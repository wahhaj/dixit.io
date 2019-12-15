import { Server } from "boardgame.io/server"
import { Dixit } from "./game"

const server = Server({ games: [Dixit] })
const port = process.env.PORT || 8000

server.run(port)
