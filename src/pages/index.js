import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

//styles import
import "../components/styles.css"

//images assets import
import wisJournalDesktop from "../images/wis-journal-desktop.jpg"
import wisJournalMobile from "../images/wis-journal-mobile.jpg"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Portfolio</h1>
      <div className="item-container">
        <Link to="https://wis-journal.com">
          <h2>wis-journal.com</h2>
        </Link>
        <p>
          A student newspaper with functionality for email/Google account
          sign-in which allows people to post content by themselves.
        </p>
        <img className="showcaseDesktop" src={wisJournalDesktop}></img>
        <img className="showcaseMobile" src={wisJournalMobile}></img>
      </div>
      <div className="item-container">
        <Link to="https://breadpodcast.com">
          <h2>breadpodcast.com</h2>
        </Link>
        <p>
          A student newspaper with functionality for email/Google account
          sign-in which allows people to post content by themselves.
        </p>
        <img className="showcaseDesktop" src={wisJournalDesktop}></img>
        <img className="showcaseMobile" src={wisJournalMobile}></img>
      </div>
    </Layout>
  )
}

export default IndexPage
