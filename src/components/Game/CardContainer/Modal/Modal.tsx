import React, { cloneElement, ReactElement } from "react"
import { useSpring, animated, config } from "react-spring"
import Button from "components/Button"

type ModalProps = {
  focusCard: number
  focusNextCard: () => void
  focusPreviousCard: () => void
  closeModal: () => void
  children: ReactElement
}

const CardResizer: React.FC<ModalProps> = (props) => {
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 100 } })
  const scaleUp = useSpring({ transform: "scale(1)", from: { transform: "scale(0.5)" }, config: config.wobbly })
  const buttonClasses = "w-12 h-12 text-4xl text-dark bg-primary leading-none rounded-full"

  return (
    <animated.div className="fixed inset-0 flex flex-col" style={fadeIn}>
      <div className="absolute inset-0 bg-gray-900 opacity-75"></div>

      <div className="z-10 flex mx-4 my-2">
        <Button className={`${buttonClasses} ml-auto`} onClick={props.closeModal}>
          ×
        </Button>
      </div>

      <animated.div style={scaleUp} className="flex-1 flex flex-col items-center justify-center mx-8">
        {cloneElement(props.children, { focusCard: props.focusCard })}
      </animated.div>

      <Button
        className={`${buttonClasses} z-10 absolute left-0 ml-4`}
        style={{
          top: "50%",
          transform: "translateY(-50%)",
        }}
        onClick={props.focusNextCard}
      >
        ←
      </Button>

      <Button
        className={`${buttonClasses} z-10 absolute right-0 mr-4`}
        style={{
          top: "50%",
          transform: "translateY(-50%)",
        }}
        onClick={props.focusPreviousCard}
      >
        →
      </Button>
    </animated.div>
  )
}

export default CardResizer
