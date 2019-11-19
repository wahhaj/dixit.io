import React, { cloneElement, ReactElement } from "react"
import ReactCSSTransitionGroup from "react-addons-css-transition-group"
import "./Modal.css"
import Button from "components/Button"

type ModalProps = {
  currentCard: number
  setCurrentCard: React.Dispatch<React.SetStateAction<number>>
  children: ReactElement
  numCards: number
}

const CardResizer: React.FC<ModalProps> = ({ currentCard, setCurrentCard, numCards, children }) => {
  return (
    <React.Fragment>
      <ReactCSSTransitionGroup
        transitionName="fade"
        transitionEnterTimeout={50}
        transitionAppear={true}
        transitionAppearTimeout={50}
        transitionLeaveTimeout={300}
      >
        <div className="fixed top-0 left-0 bottom-0 right-0 bg-gray-900 opacity-75"></div>
        <div className="absolute top-0 left-0 w-screen h-screen z-50 flex items-center">
          <Button className="bg-white rounded-full" onClick={() => setCurrentCard(currentCard - 1)}>
            P
          </Button>
          {cloneElement(children, { currentCard })}
          <Button className="bg-white rounded-full" onClick={() => setCurrentCard((currentCard + 1) % numCards)}>
            N
          </Button>
        </div>
      </ReactCSSTransitionGroup>
    </React.Fragment>
  )
}

export default CardResizer
