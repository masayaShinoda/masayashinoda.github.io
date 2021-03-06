import React from "react"
import { Link } from "gatsby"
import Layout from "./layout"
import SEO from "./seo"
import Backbutton from "./backbutton"
import GoUpButton from "./goupbutton"

//styles import
import "./styles.css"

import portfItems from "./portfolioItems.module.css"

//images assets import
import tmdRecLogoBlack from "../images/logo-with-bg-01.png"
import jadyYoungCover from "../images/YOUNG-cover-03_result.jpg"
import chuonNoMoreThumbnail from "../images/thumbnail-02_result.jpg"
import yeakKNY from "../images/yeaksa-khmer-new-year-01_result.jpg"
import yeakROGM from "../images/rog-masters-csgo-01_result.jpg"
import yeakPlaok from "../images/plaok-01_result.jpg"
import strawberryPromo from "../images/top-9-drinks-3-03.jpg"
import totePromo from "../images/totebag-notice-01.webp"
import softOpening from "../images/soft-opening.jpg"
import showcaseBusinessCard from "../images/showcase-business-card.jpg"
import tShirtHanging from "../images/black-t-shirt-showcase.jpg"
import stickerShowcase from "../images/sticker-showcase.jpg"
import gLvnFbCover from "../images/g-lvn-fb-cover.jpg"
import shirtBack from "../images/flower-on-fabric.jpg"
import mTShirtFront from "../images/m-soulmate.jpg"
import fTShirtFront from "../images/f-soulmate-black.jpg"

const GfxDesign = () => {
  return (
    <>
      <SEO title="Graphic Design Portfolio" />
      <Backbutton />
      <GoUpButton />
      <h1 className={portfItems.workTitle} id="portfolio">
        Graphic Design
      </h1>
      <div className="item-container">
        <h2 className={portfItems.itemTitle}>TMD Records</h2>
        <p>
            Graphic design and photography work for a team of young rappers, producers, writers, and composers based in Phnom Penh known as TMD Records.
        </p>
        <img
          loading="lazy"
          src={tmdRecLogoBlack}
          alt="TMD Records Logo Black"
        ></img>
        <img
          loading="lazy"
          src={jadyYoungCover}
          alt="Single cover for 'Young' by jady"
        ></img>
        <img
          loading="lazy"
          src={chuonNoMoreThumbnail}
          alt="Single cover for 'No More' by CHUON"
        ></img>
      </div>
      <div className="item-container">
        <h2 className={portfItems.itemTitle}>Yeaksa Esports</h2>
        <p>
            A competitive esports organization startup I founded with friends. Below are examples of my work regarding social media content.
        </p>
        <img
          loading="lazy"
          src={yeakKNY}
          alt="Yeaksa Esports Khmer New Year poster"
        ></img>
        <img
          loading="lazy"
          src={yeakROGM}
          alt="Yeaksa Esports ROG Masters poster"
        ></img>
        <img
          loading="lazy"
          src={yeakPlaok}
          alt="Yeaksa Esports introduction poster"
        ></img>
      </div>
      <div className="item-container">
        <h2 className={portfItems.itemTitle}>Yomie's Rice X Yogurt Cambodia</h2>
        <p>
          Digital and print design work for local yogurt and drinks shop in
          Phnom Penh, Cambodia.
        </p>
        <h3 className={portfItems.itemHeader}>Social media content</h3>
        <img
          loading="lazy"
          src={strawberryPromo}
          alt="Yomies Cambodia soft opening poster"
        ></img>
        <img
          loading="lazy"
          src={totePromo}
          alt="Yomies Cambodia totebag promo"
        ></img>
        <img
          loading="lazy"
          src={softOpening}
          alt="Yomies Cambodia soft opening poster"
        ></img>
        <br></br>
        <h3 className={portfItems.itemHeader}>Print work</h3>
        <img
          loading="lazy"
          src={showcaseBusinessCard}
          alt="Yomies Cambodia business card"
        ></img>
      </div>
      <div className="item-container">
        <h2 className={portfItems.itemTitle}>G-LVN</h2>
        <p>A small T-shirt business started with friends. Works include:</p>
        <h3 className={portfItems.itemHeader}>T-shirt design</h3>
        <img
          loading="lazy"
          src={tShirtHanging}
          alt="Soulmate T-shirt showcase"
        ></img>
        <h3 className={portfItems.itemHeader}>Sticker design</h3>
        <img loading="lazy" src={stickerShowcase} alt="Soulmate stickers"></img>
        <h3 className={portfItems.itemHeader}>Social media content</h3>
        <img
          loading="lazy"
          src={gLvnFbCover}
          alt="G-LVN social media cover"
        ></img>
        <h3 className={portfItems.itemHeader}>Portrait photography</h3>
        <img loading="lazy" src={fTShirtFront} alt="model portrait"></img>
        <img loading="lazy" src={mTShirtFront} alt="model portrait"></img>
      </div>
    </>
  )
}

export default GfxDesign
