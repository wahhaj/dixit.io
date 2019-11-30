import React from "react"
import Button from "components/Button"
import { IconPlayed, IconHand, IconScores } from "components/Icon"
import logo from "logo.png"

const Home: React.FC = (props) => {
  return (
    <div>
      <nav className="bg-dark p-2 mb-4 text-center">
        <img src={logo} alt="Dixit" className="h-8 md:h-12 md:mx-auto" />
      </nav>
      <div className="text-center">
        <h1 className="text-2xl">Welcome to Dixit.io!</h1>
      </div>
    </div>
  )
}

export default Home
