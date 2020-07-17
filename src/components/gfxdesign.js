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
import tShirtHanging from "../images/black-t-shirt-showcase.jpg"
import stickerShowcase from "../images/sticker-showcase.jpg"
import gLvnFbCover from "../images/g-lvn-fb-cover.jpg"
import tShirtBack from "../images/flower-on-fabric.jpg"

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
        <img src={baristaHiring} alt="Yomies Cambodia hiring poster"></img>
        <img src={softOpening3} alt="Yomies Cambodia soft opening poster"></img>
        <img src={softOpening} alt="Yomies Cambodia soft opening poster"></img>
        <br></br>
        <h3 className={portfStyles.itemHeader}>Print work</h3>
        <img
          src={showcaseBusinessCard}
          alt="Yomies Cambodia business card"
        ></img>
      </div>
      <div className="item-container">
        <h2>G-LVN</h2>
        <p>A small T-shirt business started with friends.</p>
        <p>Works include:</p>
        <h3>T-shirt design</h3>
        <img src={tShirtHanging} alt="Soulmate T-shirt showcase"></img>
        <h3>Sticker design</h3>
        <img src={stickerShowcase} alt="Soulmate stickers"></img>
        <h3>Social media content</h3>
        <img src={gLvnFbCover} alt="G-LVN social media cover"></img>
        <h3>Portrait photography</h3>
      </div>
    </>
  )
}

export default WebDev
