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
          A student newspaper with functionality for email/Google account
          sign-in which allows people to post content by themselves.
        </p>
        <h3>Features:</h3>
        <ul>
          <li>Easy sign-up and login available at /admin</li>
          <li>Simple and organized newspaper-style layout.</li>
          <li>Night mode</li>
          <li>Fully responsive</li>
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
