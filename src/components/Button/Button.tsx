import React from "react"

type ButtonProps = {
  disabled?: boolean
  type?: "button" | "submit"
  className?: string
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button
      type={props.type}
      disabled={props.disabled}
      onClick={props.onClick}
      className={`flex items-center py-1 px-2 rounded border border-transparent focus:outline-none ${props.className} ${
        props.disabled ? "opacity-50 cursor-not-allowed" : "hover:shadow"
      }`}
    >
      {props.children}
    </button>
  )
}

Button.defaultProps = {
  disabled: false,
  type: "button",
}

export default Button
