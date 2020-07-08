import React from "react"
import { Link } from "gatsby"
import Layout from "./layout"
import SEO from "./seo"

//styles import
import "./styles.css"

//images assets import
import baristaHiring from "../images/hiring-barista_widescreen.jpg"

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
        <p></p>
      </div>
    </>
  )
}

export default WebDev
