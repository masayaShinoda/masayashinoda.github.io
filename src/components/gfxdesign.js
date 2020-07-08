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
        <h3>Works include:</h3>
        <img src={baristaHiring}></img>
      </div>
    </>
  )
}

export default WebDev
