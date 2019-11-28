import React, { cloneElement, useState, useEffect } from "react"
import { Portal } from "react-portal"
import ReactResizeDetector from "react-resize-detector"
import Modal from "components/CardContainer/Modal"

type CardContainerProps = {
  numCards: number
  className?: string
  children: React.ReactElement
}

const getSize: (containerWidth: number, containerHeight: number, numCards: number) => Record<string, number> = (
  w,
  h,
  n,
) => {
  const hwRatio = 1.5
  const minW = 60
  const minH = 90
  const margin = 16

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

const CardContainer: React.FC<CardContainerProps> = ({ className, numCards, children }) => {
  const [currentCard, setCurrentCard] = useState(2)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    function handleKeyDown({ keyCode }: KeyboardEvent) {
      if (keyCode === 27 && isOpen) {
        setIsOpen(false)
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return function cleanup() {
      document.removeEventListener("keydown", handleKeyDown)
    }
  })

  return (
    <React.Fragment>
      <div className={className}>
        <ReactResizeDetector handleWidth handleHeight refreshMode={"debounce"} refreshRate={100}>
          {({ width, height }: Record<string, number>) =>
            cloneElement(children, {
              ...getSize(width, height, numCards),
              onCardClick: (i: number) => {
                setCurrentCard(i)
                setIsOpen(true)
              },
            })
          }
        </ReactResizeDetector>
      </div>

      {isOpen ? (
        <Portal>
          <Modal numCards={numCards} currentCard={currentCard} setCurrentCard={setCurrentCard} setIsOpen={setIsOpen}>
            {children}
          </Modal>
        </Portal>
      ) : null}
    </React.Fragment>
  )
}

export default CardContainer
