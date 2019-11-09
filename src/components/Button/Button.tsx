import React from "react"

type ButtonProps = {
  disabled?: boolean
  type?: "button" | "submit"
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button
      type={props.type}
      disabled={props.disabled}
      onClick={props.onClick}
      className={
        "bg-yellow-400 text-black py-2 px-4 rounded " +
        (props.disabled ? "opacity-50 cursor-not-allowed" : "shadow hover:bg-yellow-500")
      }
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
