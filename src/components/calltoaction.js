import React from "react"
import { Link } from "gatsby"

//styles import
import "../components/styles.css"

const calltoaction = () => {
  return (
    <div>
      <div className="upperCallBackgroundImage"></div>
      <div className="upperCall">
        <Link to="/portfolio#portfolio">
          <button style={{ boxShadow: `2px 4px 5px rgba(0,0,0,.25)` }}>
            See my work
          </button>
        </Link>
      </div>
    </div>
  )
}

export default calltoaction
