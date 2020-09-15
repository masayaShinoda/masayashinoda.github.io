import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Backbutton from "./backbutton"
import GoUpButton from "./goupbutton"

//styles import
import "./styles.css"

import portfItems from "./portfolioItems.module.css"

//images assets import
import wisJournalDesktop from "../images/wis-journal-desktop.jpg"
import wisJournalMobile from "../images/wis-journal-mobile.jpg"
import masayaBlogDesktop from "../images/masayablog-desktop.png"
import masayaBlogMobile from "../images/masayablog-mobile.png"
import masayaPhotoDesktop from "../images/masayaphoto-desktop.jpg"
import masayaPhotoMobile from "../images/masayaphoto-mobile.jpg"
import gatsbyjsEcommerce from "../images/gatsbyjs-ecommerce.png"

const WebDev = () => {
  return (
    <>
      <SEO title="Frontend Web Dev Portfolio" />
      <Backbutton />
      <GoUpButton />
      <h1 className={portfItems.workTitle} id="portfolio">
        Frontend Web Development
      </h1>
      <div className="item-container">
        <Link to="https://wis-journal.com" style={{ margin: `0` }}>
          <h2 className={portfItems.itemTitle}>wis-journal.com</h2>
        </Link>
        <p>
          A student newspaper with functionality for email/Google account
          sign-in which allows people to post content by themselves.
        </p>
        <h3 className={portfItems.itemHeader}>Features:</h3>
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
      <div className="item-container">
        <Link to="https://blog.masayashida.xyz" style={{ margin: `0` }}>
          <h2 className={portfItems.itemTitle}>Personal blog</h2>
        </Link>
        <p>Blog site built with GatsbyJS with articles written in markdown.</p>
        <h3 className={portfItems.itemHeader}>Features:</h3>
        <ul>
          <li>Typography focused</li>
          <li>
            Good SEO (around 4th-5th result on the first page of Google search
            with certain keywords)
          </li>
          <li>Night mode</li>
          <li>Fully responsive</li>
        </ul>
        <Link to="https://blog.masayashida.xyz" style={{ margin: `0` }}>
          <img
            className="showcaseDesktop"
            src={masayaBlogDesktop}
            alt="Personal blog portfolio item showcase"
          ></img>
        </Link>
        <Link to="https://blog.masayashida.xyz" style={{ margin: `0` }}>
          <img
            className="showcaseMobile"
            src={masayaBlogMobile}
            alt="Personal blog portfolio item showcase"
          ></img>
        </Link>
      </div>
      <div className="item-container">
        <Link to="https://photos.masayashida.xyz" style={{ margin: `0` }}>
          <h2 className={portfItems.itemTitle}>Photography portfolio</h2>
        </Link>
        <p>Personal photography showcase website.</p>
        <h3 className={portfItems.itemHeader}>Features:</h3>
        <ul>
          <li>Fast loading</li>
          <li>Gallery style zoom</li>
          <li>Fully responsive</li>
        </ul>
        <Link to="https://photos.masayashida.xyz" style={{ margin: `0` }}>
          <img
            className="showcaseDesktop"
            src={masayaPhotoDesktop}
            alt="Personal blog portfolio item showcase"
          ></img>
        </Link>
        <Link to="https://photos.masayashida.xyz" style={{ margin: `0` }}>
          <img
            className="showcaseMobile"
            src={masayaPhotoMobile}
            alt="Personal blog portfolio item showcase"
          ></img>
        </Link>
      </div>
      <div className="item-container">
        <Link to="https://photos.masayashida.xyz" style={{ margin: `0` }}>
          <h2 className={portfItems.itemTitle}>GatsbyJS E-commerce project</h2>
        </Link>
        <p>
          E-commerce store built with GatsbyJS, sourcing content from DatoCMS
          with payment handled by Snipcart.
        </p>
        <h3 className={portfItems.itemHeader}>Features:</h3>
        <ul>
          <li>Quick loading times</li>
          <li>Fully responsive minimalistic design</li>
          <li>Product inventory is managed using the DatoCMS dashboard</li>
        </ul>
        <Link to="https://photos.masayashida.xyz" style={{ margin: `0` }}>
          <img
            className="showcaseDesktop"
            src={gatsbyjsEcommerce}
            alt="Ecommerce site showcase"
          ></img>
        </Link>
        <Link to="https://masayastore.netlify.app" style={{ margin: `0` }}>
          <img
            className="showcaseMobile"
            src={gatsbyjsEcommerce}
            alt="Ecommerce site showcase"
          ></img>
        </Link>
      </div>
    </>
  )
}

export default WebDev
