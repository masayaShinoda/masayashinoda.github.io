import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome } from "@fortawesome/free-solid-svg-icons"

class Backbutton extends React.Component {
  constructor() {
    super()
    this.state = {
      backDirection: "/portfolio#portfolio",
    }
  }

  render() {
    const buttonStyles = {
      display: `flex`,
      width: `max-content`,
      color: `#fcfcfc`,
      padding: `0.35em 0.8em`,
      background: `#244979`,
      fontSize: `1.4em`,
    }
    const buttonHover = () => {
      var backButton = document.getElementById("backButton")
      backButton.style.transition = "background 0.2s ease-in-out"
      backButton.style.background = "#3366AA"
    }
    const buttonUnhovered = () => {
      var backButton = document.getElementById("backButton")
      backButton.style.background = "#244979"
    }
    return (
      <Link
        id="backButton"
        onMouseOver={buttonHover}
        onMouseLeave={buttonUnhovered}
        to={this.state.backDirection}
        style={buttonStyles}
      >
        <FontAwesomeIcon
          icon={faHome}
          style={{ fontSize: `0.8em`, marginRight: `.5em` }}
        />
        Back
      </Link>
    )
  }
}

export default Backbutton
