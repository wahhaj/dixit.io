import React from "react"
import { IconProps } from "./index"

const Icon: React.FC<IconProps> = ({ className, size }) => {
  return (
    <svg
      x="0px"
      y="0px"
      viewBox="0 0 40 40"
      width={size || 20}
      height={size || 20}
      className={className + " fill-current"}
    >
      <path
        d="M4.3,29.4c0.1-0.1,0.2-0.3,0.2-0.4L5,22.6C5.1,21.1,6.3,20,7.7,20h2.9v3.2L8.8,25l1,1l3.4-3.4c0.5-0.5,1.3-0.5,1.7,0
	c0.5,0.5,0.5,1.3,0,1.8l-3.4,3.4c-0.3,0.3-0.3,0.7,0,1c1.2,1.3,1.2,3.3,0,4.5l-4.7,4.8l1,1l2.9-3c0.1,1,1,1.8,2,1.8h7.7l5.4,2
	c0.2,0.1,0.5,0.1,0.7,0.1c0.9,0,1.6-0.5,1.9-1.4l0.3-0.7h1.7c1.1,0,2-0.9,2-2.1v-8.4L39,8.9c0.4-1.1-0.2-2.3-1.2-2.7l-5.4-2V4.2
	c0-1.1-0.9-2.1-2-2.1h-3.7l-5.4-2c-1.1-0.4-2.2,0.2-2.6,1.2l-0.3,0.7h-5.7c-1.1,0-2,0.9-2,2.1v14.5H7.7c-2.1,0-3.9,1.7-4.1,3.8
	l-0.4,6.2L0,31.9l1,1L4.3,29.4z M27,38.2c-0.1,0.4-0.5,0.5-0.9,0.4l-1.9-0.7h2.8L27,38.2z M37.3,7.5c0.2,0.1,0.3,0.2,0.4,0.4
	c0.1,0.2,0.1,0.4,0,0.5l-5.4,15V5.7L37.3,7.5z M19.9,1.8c0.1-0.4,0.5-0.5,0.9-0.4l1.9,0.7h-2.8L19.9,1.8z M12.7,3.5h17.6
	c0.4,0,0.7,0.3,0.7,0.7v31.7c0,0.4-0.3,0.7-0.7,0.7H12.7c-0.4,0-0.7-0.3-0.7-0.7v-1.1l0.5-0.5c1.6-1.6,1.8-4.1,0.4-6l2.9-3
	c1-1,1-2.7,0-3.7c-1-1-2.7-1-3.7,0L12,21.8V4.2C12,3.8,12.3,3.5,12.7,3.5z"
      />
      <path d="M13.3,4.9h1.4v1.4h-1.4V4.9z" />
      <path d="M28.2,33.8h1.4v1.4h-1.4V33.8z" />
      <path
        d="M20.9,27.3c0.1,0.2,0.3,0.3,0.6,0.3s0.4-0.1,0.6-0.3l4.5-6.9c0.1-0.2,0.1-0.5,0-0.8L22,12.7c-0.1-0.2-0.3-0.3-0.6-0.3
	s-0.4,0.1-0.6,0.3l-4.5,6.9c-0.1,0.2-0.1,0.5,0,0.8L20.9,27.3z M21.5,14.4l3.7,5.6l-3.7,5.6L17.8,20L21.5,14.4z"
      />
      <path d="M34,26.6l4.7-13.1L40,14l-4.7,13.1L34,26.6z" />
      <path d="M7.9,5.5h1.4v11H7.9V5.5z" />
    </svg>
  )
}

export default Icon
