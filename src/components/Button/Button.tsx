import React, { PureComponent } from "react"

export type ButtonType = "button" | "submit"

export interface ButtonProps {
  label: string
  type?: ButtonType
  disabled?: boolean
  onClick?: () => void
}

class Button extends PureComponent<ButtonProps, {}> {
  render() {
    let baseClassName = "bg-yellow-dark text-black font-bold py-2 px-4 rounded"
    let className = `${baseClassName} ${
      this.props.disabled
        ? "opacity-50 cursor-not-allowed"
        : "shadow hover:bg-yellow"
    }`

    return (
      <button
        type={this.props.type}
        disabled={this.props.disabled}
        onClick={this.props.onClick}
        className={className}
      >
        {this.props.label}
      </button>
    )
  }
}

export default Button
