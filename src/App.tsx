import React from "react"
import Game from "components/Game"
import Home from "components/Home"
import Session from "components/Session"
import { BrowserRouter, Switch, Route } from "react-router-dom"

const App: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/:gameID/:playerID" component={Game} />
      <Route path="/:gameID" component={Session} />
      <Route path="/" component={Home} />
    </Switch>
  </BrowserRouter>
)

export default App
