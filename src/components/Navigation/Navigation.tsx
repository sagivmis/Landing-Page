import React, { RefObject, useState } from "react"
import logo from "../../logo.svg"
import { Link, animateScroll as scroll } from "react-scroll"
import "./navigation.css"
import CTA from "../CTA"
import {
  BUTTON,
  HE_NAVIGATION_CTA_BUTTON_TEXT,
  HE_NAVIGATION_SECTIONS,
  NAVIGATION_CTA_BUTTON_TEXT,
  NAVIGATION_SECTIONS
} from "../../config"

interface INavigation {
  language: string
}

const Navigation = (props: INavigation) => {
  const { language } = props
  // the script will be dependent on the ids of the items we want to scroll to\
  // --- the name under the 'to' prop needs to be equal to the id of the div ---
  // DO NOT ERASE -- for future changes
  return (
    <div className='navigation-container'>
      <div className='logo-container'>
        <img src={logo} alt='logo' className='logo-image' />
      </div>
      <div className='navigation-links'>
        {language === "en" &&
          NAVIGATION_SECTIONS.map((section) => {
            return (
              <Link
                activeClass='active'
                to={section.toLowerCase()}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className='link heading'
                key={section}
              >
                {section}
              </Link>
            )
          })}
        {language === "he" &&
          HE_NAVIGATION_SECTIONS.map((section) => {
            return (
              <Link
                activeClass='active'
                to={section.toLowerCase()}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className='link heading'
                key={section}
              >
                {section}
              </Link>
            )
          })}
      </div>
      <div className='navigation-cta'>
        <CTA
          content={
            language === "en"
              ? NAVIGATION_CTA_BUTTON_TEXT
              : HE_NAVIGATION_CTA_BUTTON_TEXT
          }
          callback={() => {}}
          type={BUTTON}
        />
      </div>
    </div>
  )
}

export default Navigation
