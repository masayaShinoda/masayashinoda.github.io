import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import GfxDesign from "../components/GfxDesign"

import "../components/styles.css"

//fa import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { withAssetPrefix } from "gatsby"

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Graphic Design Portfolio" />
      <h1 id="portfolio">Graphic Design</h1>
      <GfxDesign></GfxDesign>
    </Layout>
  )
}

export default ContactPage
