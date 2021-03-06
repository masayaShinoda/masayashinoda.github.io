import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import GfxDesign from "../components/gfxdesign"

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

      <GfxDesign></GfxDesign>
    </Layout>
  )
}

export default ContactPage
