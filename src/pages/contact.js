import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MyForm from "../components/myform"

import "../components/styles.css"

//fa import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { withAssetPrefix } from "gatsby"

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <h1 id="contact">Contact me:</h1>
      <section style={{ display: `flex` }}>
        <div
          className="social-link-container"
          style={{ background: `#2AA1DE`, marginTop: `2.5vmax` }}
        >
          <a
            href="https://t.me/shinoda17"
            className="tele-link"
            style={{ color: `#f5f5f5` }}
          >
            <FontAwesomeIcon icon={faPaperPlane} />
            <p style={{ color: `#f5f5f5`, border: `0` }}>Telegram</p>
          </a>
        </div>
        <div
          className="social-link-container"
          style={{ background: `#D5288D`, marginTop: `2.5vmax` }}
        >
          <a
            href="https://instagram.com/masaya_shinoda"
            className="ig-link"
            style={{ color: `#f5f5f5` }}
          >
            <FontAwesomeIcon icon={faInstagram} />
            <p style={{ color: `#f5f5f5`, border: `0` }}>Instagram</p>
          </a>
        </div>
      </section>
      <MyForm></MyForm>
    </Layout>
  )
}

export default ContactPage
