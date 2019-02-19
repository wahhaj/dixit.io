import React, { Component } from "react"

import Button from "../Button"

class Start extends Component {
  render() {
    return (
      <div className="flex flex-col items-center">
        <div>
          <Button label="Hello World" />
        </div>
        <div>Join</div>
      </div>
    )
  }
}

export default Start
