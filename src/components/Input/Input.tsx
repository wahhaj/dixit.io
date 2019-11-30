import React from "react"

type InputProps = {
  id: string
  label: string
  placeholder: string
  value?: string
  onChange?: () => void
}

const Input: React.FC<InputProps> = (props) => (
  <div className="flex items-center mb-2">
    <label className="mr-2" htmlFor={props.id}>
      {props.label}
    </label>
    <input
      className="block appearance-none bg-gray-200 border border-gray-200 py-1 pl-2 pr-8 rounded focus:outline-none focus:bg-white focus:border-gray-500"
      id={props.id}
      placeholder={props.placeholder}
      value={props.value}
      type="text"
    />
  </div>
)

export default Input
