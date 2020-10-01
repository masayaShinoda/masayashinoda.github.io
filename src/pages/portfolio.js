import React from "react"
import { Link } from "gatsby"

import PortfLayout from "../components/portf-layout"
import SEO from "../components/seo"
import MyForm from "../components/myform"

//styles import
// import "../components/styles.css"
import portfStyles from "../components/portfolioStyles.module.css"

const PortfolioPage = () => {
  return (
    <PortfLayout>
      <SEO title="Portfolio" />
      <div className={portfStyles.portfUpperCallBg}></div>
      <div className={portfStyles.portfUpperCall} id="portfolio">
        <Link to="/gfxdesign#portfolio">
          <button style={{ boxShadow: `2px 4px 5px rgba(0,0,0,.25)` }}>
            Graphic Design
          </button>
        </Link>
      </div>
      <div className={portfStyles.portfLowerCallBg}></div>
      <div className={portfStyles.portfLowerCall}>
        <Link to="/webdev#portfolio">
          <button style={{ boxShadow: `2px 4px 5px rgba(0,0,0,.25)` }}>
            Frontend Web Development
          </button>
        </Link>
      </div>
    </PortfLayout>
  )
}

export default PortfolioPage
