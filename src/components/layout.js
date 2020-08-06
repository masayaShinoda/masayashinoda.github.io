/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import Header from "./header"

//styles import
import "./reset.css"
import "./styles.css"

//fa import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCamera } from "@fortawesome/free-solid-svg-icons"
import { faBlog } from "@fortawesome/free-solid-svg-icons"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <div className="parent">
      <Helmet>
        <meta
          name="description"
          content="Web/Graphics Designer based in Phnom Penh, Cambodia."
        />
        <meta
          name="keywords"
          content="web designer, web developer, graphics designer, cambodia, phnom penh, graphics designer cambodia, graphics designer phnom penh, web design phnom penh, web design cambodia, web developer cambodia, web developer phnom penh"
        />
      </Helmet>
      <div className="layout-left">
        {" "}
        <div className="margins">
          <Header></Header>
        </div>
        <div className="margins-bottom">
          <div>
            <footer>
              <div>
                <p>You might be interested in my other sites:</p>
                <nav>
                  <a href="https://photos.masayashida.xyz">
                    <FontAwesomeIcon icon={faCamera} />
                    <p>Photography</p>
                  </a>
                  <a href="https://blog.masayashida.xyz">
                    <FontAwesomeIcon icon={faBlog} />
                    <p>Blog</p>
                  </a>
                </nav>
              </div>
            </footer>
          </div>
        </div>
      </div>
      <div className="layout-right">
        <div className="margins">{children}</div>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
