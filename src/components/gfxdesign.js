import React from "react"
import { Link } from "gatsby"
import Layout from "./layout"
import SEO from "./seo"

//styles import
import "./styles.css"
import portfStyles from "./portfolioStyles.module.css"

//images assets import
import baristaHiring from "../images/hiring-barista_widescreen.jpg"
import softOpening3 from "../images/soft-opening-countdown_3.jpg"
import softOpening from "../images/soft-opening.jpg"
import showcaseBusinessCard from "../images/showcase-business-card.jpg"

const WebDev = () => {
  return (
    <>
      <div className="item-container">
        <h2>Yomie's Rice X Yogurt Cambodia</h2>
        <p>
          Digital and print design work for local yogurt and drinks shop in
          Phnom Penh, Cambodia.
        </p>
        <p>Works include:</p>
        <h3>Social media content</h3>
        <img src={baristaHiring}></img>
        <img src={softOpening3}></img>
        <img src={softOpening}></img>
        <br></br>
        <h3 className={portfStyles.itemHeader}>Print work</h3>
        <img src={showcaseBusinessCard}></img>
      </div>
    </>
  )
}

export default WebDev
