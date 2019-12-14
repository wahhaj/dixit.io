import React, { cloneElement, useState, useEffect } from "react"
import { Portal } from "react-portal"
import ReactResizeDetector from "react-resize-detector"
import Modal from "components/CardContainer/Modal"

type CardContainerProps = {
  numCards: number
  children: React.ReactElement
}

const getSize: (containerWidth: number, containerHeight: number, numCards: number) => Record<string, number> = (
  w,
  h,
  n,
) => {
  const hwRatio = 1.5 // height to width ratio
  const margin = 16 // margin in pixel around each card
  const minW = 60
  const minH = minW * hwRatio

  const size = {
    cardWidth: 120,
    cardHeight: 180,
  }

  if (w && h) {
    let width = w / n - margin
    let height = width * hwRatio

    if (width >= minW) {
      if (height < minH || height > h) {
        height = h - margin
        width = height / hwRatio
      }

      size.cardWidth = Math.floor(width)
      size.cardHeight = Math.floor(height)
    }
  }

  return size
}

const CardContainer: React.FC<CardContainerProps> = ({ numCards, children }) => {
  const [focusCard, setFocusCard] = useState(0)
  const [isModalOpen, setModalOpen] = useState(false)

  // Registers event listener to close Modal on escape key press
  useEffect(() => {
    function handleKeyDown({ keyCode }: KeyboardEvent) {
      if (keyCode === 27 && isModalOpen) {
        setModalOpen(false)
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return function cleanup() {
      document.removeEventListener("keydown", handleKeyDown)
    }
  })

  return (
    // Container for cards that makes sure that all contained cards are resized to fit the container
    <React.Fragment>
      <div className="flex-1 flex justify-center flex-wrap overflow-hidden">
        <ReactResizeDetector handleWidth handleHeight refreshMode={"debounce"} refreshRate={100}>
          {({ width, height }: Record<string, number>) =>
            cloneElement(children, {
              ...getSize(width, height, numCards),
              onCardClick: (i: number) => {
                setFocusCard(i)
                setModalOpen(true)
              },
            })
          }
        </ReactResizeDetector>
      </div>

      {isModalOpen && (
        // Modal focusing on a single card
        <Portal>
          <Modal
            focusCard={focusCard}
            focusNextCard={() => setFocusCard(focusCard > 0 ? focusCard - 1 : numCards - 1)}
            focusPreviousCard={() => setFocusCard((focusCard + 1) % numCards)}
            closeModal={() => setModalOpen(false)}
          >
            {children}
          </Modal>
        </Portal>
      )}
    </React.Fragment>
  )
}

export default CardContainer
