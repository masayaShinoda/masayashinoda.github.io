import React from "react"
import { Link } from "gatsby"

import PortfLayout from "../components/portf-layout"
import SEO from "../components/seo"
import MyForm from "../components/myform"

//portfolio items import
import WebDev from "../components/webdev"
import portfolioImage from "../images/portfoliopage-image.png"
//styles import
// import "../components/styles.css"
import portfStyles from "../components/portfolioStyles.module.css"

const PortfolioPage = () => {
  return (
    <PortfLayout>
      <SEO title="Portfolio" />
      <div className={portfStyles.portfUpperCallBg} id="portfolio"></div>
      <div className={portfStyles.portfUpperCall}>
        <Link to="/gfxdesign#portfolio">
          <button>Graphic Design</button>
        </Link>
      </div>
      <div className={portfStyles.portfLowerCallBg}></div>
      <div className={portfStyles.portfLowerCall}>
        <Link to="/webdev#portfolio">
          <button>Frontend Web Development</button>
        </Link>
      </div>
    </PortfLayout>
  )
}

export default PortfolioPage
