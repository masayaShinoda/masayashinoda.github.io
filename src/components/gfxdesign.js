import React from "react"
import { Link } from "gatsby"
import Layout from "./layout"
import SEO from "./seo"

//styles import
import "./styles.css"

//images assets import
import wisJournalDesktop from "../images/wis-journal-desktop.jpg"
import wisJournalMobile from "../images/wis-journal-mobile.jpg"
import masayaBlogDesktop from "../images/masayablog-desktop.png"
import masayaBlogMobile from "../images/masayablog-mobile.png"
import masayaPhotoDesktop from "../images/masayaphoto-desktop.jpg"
import masayaPhotoMobile from "../images/masayaphoto-mobile.jpg"

const WebDev = () => {
  return (
    <>
      <div className="item-container">
        <h2>Yomie's Rice X Yogurt Cambodia</h2>
        <p>
          Digital and print design work for local yogurt shop in Phnom Penh,
          Cambodia.
        </p>
        <h3>Wokrs include:</h3>
        <ul>
          {/* <li>Social media content</li>
          <li>I-stand banner</li>
          <li>Menu</li>
          <li>Business card</li> */}
        </ul>
        <Link to="https://wis-journal.com" style={{ margin: `0` }}>
          <img
            className="showcaseDesktop"
            src={wisJournalDesktop}
            alt="wis-journal.com portfolio item showcase"
          ></img>
        </Link>
        <Link to="https://wis-journal.com" style={{ margin: `0` }}>
          <img
            className="showcaseMobile"
            src={wisJournalMobile}
            alt="wis-journal.com portfolio item showcase"
          ></img>
        </Link>
      </div>
    </>
  )
}

export default WebDev
