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

//fontawesome import
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { fa } from "@fortawesome/free-solid-svg-icons"

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
        <span className={portfItems.techUsed}>
          <p style={{ margin: `0 0 0.5rem 0` }}>Technologies used:</p>
          <span style={{ display: `flex`, alignItems: `center` }}>
            <div
              title="NetlifyCMS"
              style={{
                marginBottom: `0.8rem`,
                marginRight: `.5rem`,
                boxShadow: `5px 4px 14px rgba(50,50,50,.125)`,
              }}
              className={portfItems.netlifyCMS}
            >
              <a href="https://www.netlifycms.org/">
                <img
                  src="https://d33wubrfki0l68.cloudfront.net/1f4ce04369d08e4f8c3a7ca30a11c4873fda2ae1/3cf4e/static/netlify-cms-logo-5a5d3304b7d2d77ea281363a71dcc970.svg"
                  style={{ margin: 0, height: `1.25rem` }}
                  alt="NetlifyCMS logo"
                />
              </a>
            </div>
            <div
              title="ReactJS"
              style={{ marginBottom: `0.8rem` }}
              className={portfItems.reactJS}
            >
              <img
                src="https://www.vhv.rs/dpng/d/590-5903330_reactjs-logo-react-js-transparent-icon-hd-png.png"
                style={{ margin: 0, height: `1.75rem` }}
                alt="ReactJS logo"
              />
            </div>
            <div
              title="SCSS"
              style={{ marginBottom: `0.8rem`, paddingLeft: 0 }}
              className={portfItems.reactJS}
            >
              <img
                src="https://code.support/wp-content/uploads/2016/04/sass.png"
                style={{ margin: 0, height: `1.75rem` }}
                alt="SASS logo"
              />
            </div>
          </span>
        </span>
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
        <span className={portfItems.techUsed}>
          <p style={{ margin: `0 0 0.5rem 0` }}>Technologies used:</p>
          <span style={{ display: `flex`, alignItems: `center` }}>
            <div
              title="GatsbyJS"
              style={{
                marginBottom: `0.8rem`,
                paddingLeft: 0,
                // boxShadow: `5px 4px 14px rgba(50,50,50,.125)`,
              }}
              className={portfItems.gatsbyJS}
            >
              <a href="https://www.gatsbyjs.org/">
                <img
                  src="https://www.drupal.org/files/Gatsby_Logo.png"
                  style={{ margin: 0, height: `1.25rem` }}
                  alt="GatsbyJS logo"
                />
              </a>
            </div>
            <div
              title="ReactJS"
              style={{ marginBottom: `0.8rem` }}
              className={portfItems.reactJS}
            >
              <img
                src="https://www.vhv.rs/dpng/d/590-5903330_reactjs-logo-react-js-transparent-icon-hd-png.png"
                style={{ margin: 0, height: `1.75rem` }}
                alt="ReactJS logo"
              />
            </div>
            <div
              title="SCSS"
              style={{ marginBottom: `0.8rem`, paddingLeft: 0 }}
              className={portfItems.reactJS}
            >
              <img
                src="https://code.support/wp-content/uploads/2016/04/sass.png"
                style={{ margin: 0, height: `1.75rem` }}
                alt="SASS logo"
              />
            </div>
          </span>
        </span>
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
        <span className={portfItems.techUsed}>
          <p style={{ margin: `0 0 0.5rem 0` }}>Technologies used:</p>
          <span style={{ display: `flex`, alignItems: `center` }}>
            <div
              title="GatsbyJS"
              style={{
                marginBottom: `0.8rem`,
                paddingLeft: 0,
                // boxShadow: `5px 4px 14px rgba(50,50,50,.125)`,
              }}
              className={portfItems.gatsbyJS}
            >
              <a href="https://www.gatsbyjs.org/">
                <img
                  src="https://www.drupal.org/files/Gatsby_Logo.png"
                  style={{ margin: 0, height: `1.25rem` }}
                  alt="NetlifyCMS logo"
                />
              </a>
            </div>
            <div
              title="ReactJS"
              style={{ marginBottom: `0.8rem` }}
              className={portfItems.reactJS}
            >
              <img
                src="https://www.vhv.rs/dpng/d/590-5903330_reactjs-logo-react-js-transparent-icon-hd-png.png"
                style={{ margin: 0, height: `1.75rem` }}
                alt="ReactJS logo"
              />
            </div>
            <div
              title="SCSS"
              style={{ marginBottom: `0.8rem`, paddingLeft: 0 }}
              className={portfItems.reactJS}
            >
              <img
                src="https://code.support/wp-content/uploads/2016/04/sass.png"
                style={{ margin: 0, height: `1.75rem` }}
                alt="SASS logo"
              />
            </div>
          </span>
        </span>
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
        <Link to="https://masayastore.netlify.app" style={{ margin: `0` }}>
          <h2 className={portfItems.itemTitle}>GatsbyJS E-commerce project</h2>
        </Link>
        <p>
          E-commerce store built with GatsbyJS, sourcing content from DatoCMS
          with payment handled by Snipcart.
        </p>
        <span className={portfItems.techUsed}>
          <p style={{ margin: `0 0 0.5rem 0` }}>Technologies used:</p>
          <span style={{ display: `flex`, alignItems: `center` }}>
            <div
              title="GatsbyJS"
              style={{
                marginBottom: `0.8rem`,
                paddingLeft: 0,
                // boxShadow: `5px 4px 14px rgba(50,50,50,.125)`,
              }}
              className={portfItems.gatsbyJS}
            >
              <a href="https://www.gatsbyjs.org/">
                <img
                  src="https://www.drupal.org/files/Gatsby_Logo.png"
                  style={{ margin: 0, height: `1.25rem` }}
                  alt="GatsbyJS logo"
                />
              </a>
            </div>
            <div
              title="DatoCMS"
              style={{
                marginBottom: `0.8rem`,
              }}
              className={portfItems.datoCMS}
            >
              <a href="https://www.datocms.com/">
                <img
                  src="https://cdn.worldvectorlogo.com/logos/datocms-1.svg"
                  style={{ margin: 0, height: `1.25rem` }}
                  alt="DatoCMS logo"
                />
              </a>
            </div>
            <div
              title="ReactJS"
              style={{ marginBottom: `0.8rem` }}
              className={portfItems.reactJS}
            >
              <img
                src="https://www.vhv.rs/dpng/d/590-5903330_reactjs-logo-react-js-transparent-icon-hd-png.png"
                style={{ margin: 0, height: `1.75rem` }}
                alt="ReactJS logo"
              />
            </div>
            <div
              title="SCSS"
              style={{ marginBottom: `0.8rem`, paddingLeft: 0 }}
              className={portfItems.reactJS}
            >
              <img
                src="https://code.support/wp-content/uploads/2016/04/sass.png"
                style={{ margin: 0, height: `1.75rem` }}
                alt="SASS logo"
              />
            </div>
          </span>
        </span>
        <h3 className={portfItems.itemHeader}>Features:</h3>
        <ul>
          <li>Quick loading times</li>
          <li>Fully responsive minimalistic design</li>
          <li>Product inventory is managed using the DatoCMS dashboard</li>
        </ul>
        <Link to="https://masayastore.netlify.app" style={{ margin: `0` }}>
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
