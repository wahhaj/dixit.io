import React, { cloneElement, ReactElement } from "react"
import ReactCSSTransitionGroup from "react-addons-css-transition-group"
import Button from "components/Button"
import "./animations.css"

type ModalProps = {
  currentCard: number
  numCards: number
  setCurrentCard: React.Dispatch<React.SetStateAction<number>>
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  children: ReactElement
}

const CardResizer: React.FC<ModalProps> = ({ currentCard, setCurrentCard, numCards, setIsOpen, children }) => {
  return (
    <React.Fragment>
      <ReactCSSTransitionGroup transitionName="fade" transitionAppear={true} transitionAppearTimeout={300}>
        <div className="fixed inset-0 bg-gray-900 opacity-75" onClick={() => setIsOpen(false)}></div>

        <div className="fixed inset-0 z-50 pointer-events-none">
          <Button className={`absolute top-0 right-0 mr-10 text-primary text-4xl`} onClick={() => setIsOpen(false)}>
            ×
          </Button>

          <Button
            className="absolute left-0 ml-4 bg-primary text-dark text-4xl leading-none w-12 h-12 rounded-full pointer-events-auto"
            style={{
              top: "50%",
              transform: "translateY(-50%)",
            }}
            onClick={() => setCurrentCard(currentCard > 0 ? currentCard - 1 : numCards - 1)}
          >
            ←
          </Button>

          <Button
            className="absolute right-0 mr-4 bg-primary text-dark text-4xl leading-none w-12 h-12 rounded-full pointer-events-auto"
            style={{
              top: "50%",
              transform: "translateY(-50%)",
            }}
            onClick={() => setCurrentCard((currentCard + 1) % numCards)}
          >
            →
          </Button>
        </div>
      </ReactCSSTransitionGroup>

      <ReactCSSTransitionGroup transitionName="scale" transitionAppear={true} transitionAppearTimeout={300}>
        <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
          {cloneElement(children, { currentCard })}
        </div>
      </ReactCSSTransitionGroup>
    </React.Fragment>
  )
}

export default CardResizer
