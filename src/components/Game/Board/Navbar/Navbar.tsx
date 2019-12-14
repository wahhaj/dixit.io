import React from "react"
import Button from "components/Button"
import { IconPlayed, IconHand, IconScores } from "components/Icon"
import logo from "logo.png"

type NavbarProps = {
  currentView: string
  setView: React.Dispatch<React.SetStateAction<string>>
}

const activeStyle = (currentView: string, type: string) => (currentView === type ? "border border-primary" : "")

const Navbar: React.FC<NavbarProps> = ({ currentView, setView }) => {
  return (
    <nav className="bg-dark p-2 flex items-center">
      <img src={logo} alt="Dixit" className="h-8 md:h-12 md:mx-auto" />

      <ul className="ml-auto md:hidden flex">
        <li>
          <Button className={`text-primary ${activeStyle(currentView, "played")}`} onClick={() => setView("played")}>
            <IconPlayed className="text-primary mr-1" />
            <span>Board</span>
          </Button>
        </li>

        <li>
          <Button className={`text-primary ${activeStyle(currentView, "hand")}`} onClick={() => setView("hand")}>
            <IconHand className="text-primary mr-1" />
            <span>Hand</span>
          </Button>
        </li>

        <li>
          <Button className={`text-primary ${activeStyle(currentView, "scores")}`} onClick={() => setView("scores")}>
            <IconScores className="text-primary mr-1" />
            <span>Scores</span>
          </Button>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
