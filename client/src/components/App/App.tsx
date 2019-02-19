import { Link, Route, BrowserRouter as Router } from "react-router-dom"
import React, { Component } from "react"

import Button from "../Button"
import Start from "../Start"
import logo from "./logo.png"

class App extends Component {
  render() {
    return (
      <Router>
        <div className="h-full flex flex-col">
          <nav className="flex items-center justify-center p-2 bg-black text-gold">
            <img src={logo} alt="Dixit" className="h-12" />
          </nav>
          <div className="flex-1 p-2 bg-yellow-light text-black">
            <Route path="/" exact component={Start} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App
