import React, { cloneElement, ReactElement } from "react"
import ReactCSSTransitionGroup from "react-addons-css-transition-group"
import Button from "components/Button"
import "./animations.css"

type ModalProps = {
  focusCard: number
  setPreviousFocusCard: () => void
  setNextFocusCard: () => void
  closeModal: () => void
  children: ReactElement
}

const CardResizer: React.FC<ModalProps> = (props) => {
  return (
    <React.Fragment>
      <ReactCSSTransitionGroup
        transitionName="fade"
        transitionAppear={true}
        transitionAppearTimeout={300}
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}
      >
        <div className="fixed inset-0 bg-gray-900 opacity-75" onClick={props.closeModal}></div>

        <div className="fixed inset-0 z-50 pointer-events-none">
          <Button className={`absolute top-0 right-0 mr-10 text-primary text-4xl`} onClick={props.closeModal}>
            ×
          </Button>

          <Button
            className="absolute left-0 ml-4 bg-primary text-dark text-4xl leading-none w-12 h-12 rounded-full pointer-events-auto"
            style={{
              top: "50%",
              transform: "translateY(-50%)",
            }}
            onClick={props.setPreviousFocusCard}
          >
            ←
          </Button>

          <Button
            className="absolute right-0 mr-4 bg-primary text-dark text-4xl leading-none w-12 h-12 rounded-full pointer-events-auto"
            style={{
              top: "50%",
              transform: "translateY(-50%)",
            }}
            onClick={props.setNextFocusCard}
          >
            →
          </Button>
        </div>
      </ReactCSSTransitionGroup>

      <ReactCSSTransitionGroup
        transitionName="scale"
        transitionAppear={true}
        transitionAppearTimeout={300}
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
          {cloneElement(props.children, { focusCard: props.focusCard })}
        </div>
      </ReactCSSTransitionGroup>
    </React.Fragment>
  )
}

export default CardResizer
