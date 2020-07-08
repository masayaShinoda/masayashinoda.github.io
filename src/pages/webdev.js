import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import WebDev from "../components/webdev"

import "../components/styles.css"

//fa import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { withAssetPrefix } from "gatsby"

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Frontend Web Dev Portfolio" />
      <h1 id="portfolio">Frontend Web Design & Development</h1>
      <WebDev></WebDev>
    </Layout>
  )
}

export default ContactPage
