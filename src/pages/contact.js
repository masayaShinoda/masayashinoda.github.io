import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MyForm from "../components/myform"

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Portfolio" />

      <h1 id="contact">Contact me:</h1>
      <MyForm></MyForm>
    </Layout>
  )
}

export default ContactPage
