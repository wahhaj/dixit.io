import React, { cloneElement } from "react"
import ReactResizeDetector from "react-resize-detector"

type CardResizerProps = {
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
    width: 120,
    height: 180,
  }

  if (w && h) {
    let width = w / n - margin
    let height = width * hwRatio

    if (width >= minW) {
      if (height < minH || height > h) {
        height = h - margin
        width = height / hwRatio
      }

      size.width = Math.floor(width)
      size.height = Math.floor(height)
    }
  }

  return size
}

const CardResizer: React.FC<CardResizerProps> = ({ className, numCards, children }) => {
  return (
    <div className={className}>
      <ReactResizeDetector handleWidth handleHeight refreshMode={"debounce"} refreshRate={100}>
        {({ width, height }: Record<string, number>) => cloneElement(children, { ...getSize(width, height, numCards) })}
      </ReactResizeDetector>
    </div>
  )
}

export default CardResizer
