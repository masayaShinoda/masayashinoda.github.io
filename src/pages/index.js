import React from "react"
import { Link } from "gatsby"
import Helmet from "react-helmet"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CallToAction from "../components/calltoaction"

//styles import
import "../components/styles.css"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <CallToAction></CallToAction>
    </Layout>
  )
}

export default IndexPage
