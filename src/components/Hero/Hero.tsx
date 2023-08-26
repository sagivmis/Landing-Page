import React from "react"
import "./hero.css"
import CTA from "../CTA"
import clsx from "clsx"
import {
  BUTTON,
  HERO_MAIN_TITLE,
  HERO_PRIMARY_CTA_TEXT,
  HERO_SECONDARY_CTA_TEXT,
  HERO_SECONDARY_TITLE,
  HE_HERO_MAIN_TITLE,
  HE_HERO_PRIMARY_CTA_TEXT,
  HE_HERO_SECONDARY_CTA_TEXT,
  HE_HERO_SECONDARY_TITLE
} from "../../config"

interface IHero {
  language: string
}
const Hero = (props: IHero) => {
  const { language } = props

  return (
    <div className='hero-container'>
      <div className='hero-headers'>
        <h2
          className={clsx(
            "heading primary-hero-header",
            language === "he" ? "hebrew" : ""
          )}
        >
          {language === "he" && HE_HERO_MAIN_TITLE}
          {language === "en" && HERO_MAIN_TITLE}
        </h2>
        <h4
          className={clsx(
            "heading secondary-hero-header",
            language === "he" ? "hebrew" : ""
          )}
        >
          {language === "he" && HE_HERO_SECONDARY_TITLE}
          {language === "en" && HERO_SECONDARY_TITLE}
        </h4>
      </div>
      <div className='hero-cta-container'>
        <div className='primary-hero-cta-contaier'>
          <CTA
            content={
              language === "en"
                ? HERO_PRIMARY_CTA_TEXT
                : HE_HERO_PRIMARY_CTA_TEXT
            }
            callback={() => {}}
            type={BUTTON}
          />
        </div>
        <div className='secondary-hero-cta-contaier'>
          <CTA
            content={
              language === "en"
                ? HERO_SECONDARY_CTA_TEXT
                : HE_HERO_SECONDARY_CTA_TEXT
            }
            callback={() => {}}
            type={BUTTON}
            primary={false}
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
