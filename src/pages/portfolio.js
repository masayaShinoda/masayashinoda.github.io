import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MyForm from "../components/myform"

//styles import
import "../components/styles.css"

//images assets import
import wisJournalDesktop from "../images/wis-journal-desktop.jpg"
import wisJournalMobile from "../images/wis-journal-mobile.jpg"
import masayaBlogDesktop from "../images/masayablog-desktop.png"
import masayaBlogMobile from "../images/masayablog-mobile.png"

const PortfolioPage = () => {
  return (
    <Layout>
      <SEO title="Portfolio" />
      <h1 id="portfolio">Portfolio</h1>
      <div className="item-container">
        <Link to="https://wis-journal.com" style={{ margin: `0` }}>
          <h2>wis-journal.com</h2>
        </Link>
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
      <div className="item-container">
        <Link to="https://masayablog.netlify.app" style={{ margin: `0` }}>
          <h2>Personal blog</h2>
        </Link>
        <p>Blog site built with GatsbyJS with articles written in markdown.</p>
        <h3>Features:</h3>
        <ul>
          <li>Typography focused</li>
          <li>
            Good SEO (around 4th-5th result on the first page of Google search
            with certain keywords)
          </li>
          <li>Night mode</li>
          <li>Fully responsive</li>
        </ul>
        <Link to="https://masayablog.netlify.app" style={{ margin: `0` }}>
          <img
            className="showcaseDesktop"
            src={masayaBlogDesktop}
            alt="Personal blog portfolio item showcase"
          ></img>
        </Link>
        <Link to="https://masayablog.netlify.app" style={{ margin: `0` }}>
          <img
            className="showcaseMobile"
            src={masayaBlogMobile}
            alt="Personal blog portfolio item showcase"
          ></img>
        </Link>
      </div>
    </Layout>
  )
}

export default PortfolioPage
