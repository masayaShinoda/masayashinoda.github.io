import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUp } from "@fortawesome/free-solid-svg-icons"

class GoUpButton extends React.Component {
  constructor() {
    super()
    this.state = {
      direction: "#",
    }
  }
  render() {
    const buttonStyles = {
      display: `flex`,
      width: `max-content`,
      color: `#fcfcfc`,
      padding: `0.8em`,
      background: `#244979`,
      fontSize: `1.4em`,
      boxShadow: `2px 4px 5px rgba(0,0,0,.25)`,
      borderRadius: `100%`,
      position: `fixed`,
      bottom: `5vmax`,
      right: `5vmax`,
    }
    const buttonHover = () => {
      var upButton = document.getElementById("upButton")
      upButton.style.transition = "background 0.2s ease-in-out"
      upButton.style.background = "#3366AA"
    }
    const buttonUnhovered = () => {
      var upButton = document.getElementById("upButton")
      upButton.style.background = "#244979"
    }

    return (
      <Link
        id="upButton"
        to={this.state.direction}
        onMouseOver={buttonHover}
        onMouseLeave={buttonUnhovered}
        style={buttonStyles}
      >
        <FontAwesomeIcon
          icon={faArrowUp}

          // style={{ fontSize: `0.8em`, marginRight: `.5em` }}
        />
      </Link>
    )
  }
}

export default GoUpButton
