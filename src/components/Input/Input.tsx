import React from "react"

type InputProps = {
  id: string
  label: string
  placeholder: string
  value?: string
  hasError?: boolean
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<InputProps> = (props) => (
  <div className="flex items-center mb-2">
    <label className="mr-2" htmlFor={props.id}>
      {props.label}
    </label>
    <input
      className={`block appearance-none bg-gray-200 border py-1 pl-2 pr-8 rounded focus:outline-none focus:bg-white focus:border-gray-500 ${
        props.hasError ? "border-red-600" : "border-gray-200"
      }`}
      id={props.id}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      type="text"
    />
  </div>
)

export default Input
