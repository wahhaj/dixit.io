import React, { PureComponent } from "react"

interface IButtonProps {
  label: string

  disabled?: boolean
  type?: "button" | "submit"
  onClick?: () => void
}

class Button extends PureComponent<IButtonProps, {}> {
  static defaultProps: Partial<IButtonProps> = {
    disabled: false,
    type: "button",
  }

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
