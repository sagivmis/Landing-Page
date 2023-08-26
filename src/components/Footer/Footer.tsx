import React, { forwardRef } from "react"
import "./footer.css"
import facebookIcon from "../../assets/social/facebook-50.svg"
import instagramIcon from "../../assets/social/instagram-50.svg"
import twitterIcon from "../../assets/social/twitter-50.svg"
import tiktokIcon from "../../assets/social/tiktok-50.svg"
import whatsappIcon from "../../assets/social/whatsapp.svg"
import clsx from "clsx"
import {
  COMPANY_NAME,
  FIRST_REMARK,
  FOUNDATION_YEAR,
  FOURTH_NAVIGATION_SECTION,
  HE_COMPANY_NAME,
  HE_FIRST_REMARK,
  HE_FOURTH_NAVIGATION_SECTION,
  HE_FOURTH_REMARK,
  HE_SECOND_REMARK,
  HE_THIRD_REMARK,
  SECOND_REMARK,
  SERVICES,
  THIRD_REMARK
} from "../../config"
import ContactForm from "../ContactForm"

interface IFooter {
  language: string
}
type SocialMediaMeta = {
  icon: string
  name: string
  url: string
}
const facebookMetadata: SocialMediaMeta = {
  icon: facebookIcon,
  name: "facebook",
  url: ""
}
const instagramMetadata: SocialMediaMeta = {
  icon: instagramIcon,
  name: "instagram",
  url: ""
}
const twitterMetadata: SocialMediaMeta = {
  icon: twitterIcon,
  name: "twitter",
  url: ""
}
const tiktokMetadata: SocialMediaMeta = {
  icon: tiktokIcon,
  name: "tiktok",
  url: ""
}
const whatsappMetadata: SocialMediaMeta = {
  icon: whatsappIcon,
  name: "whatsapp",
  url: ""
}
const socials = [
  facebookMetadata,
  instagramMetadata,
  twitterMetadata,
  tiktokMetadata,
  whatsappMetadata
]
const Footer = (props: IFooter) => {
  const { language } = props

  // const enAbout =
  //id will be contact to match with navigation link
  return (
    <div
      className='footer-container'
      id={
        language === "en"
          ? FOURTH_NAVIGATION_SECTION.toLowerCase()
          : HE_FOURTH_NAVIGATION_SECTION
      }
    >
      <div className='social-media-container'>
        {socials.map((social) => {
          return (
            <div className='social-media' key={social.name}>
              <a
                href={social.url}
                target='_blank'
                rel='noreferrer'
                className='social'
              >
                <img
                  src={social.icon}
                  alt={social.name}
                  className={clsx("social-media-icon")}
                />
              </a>
            </div>
          )
        })}
      </div>
      <span className={clsx("footer-about", language === "he" ? "hebrew" : "")}>
        {language === "en" && (
          <>
            At <span className='bold'>{COMPANY_NAME}</span>, we're dedicated to
            delivering top-tier solutions for{" "}
            <span className='bold'>{SERVICES}</span>. <br />
            Established in <span className='bold'>{FOUNDATION_YEAR}</span>, our
            team of experts have consistently strived for
            <span className='bold filled-neutral'>{FIRST_REMARK}</span> bringing
            together the latest technological advancements with a passion for
            <span className='bold filled-neutral'>{SECOND_REMARK}</span> <br />
            From our humble beginnings to serving thousands worldwide, our
            commitment remains the same:
            <br />
            <span className='bold filled-neutral'>{THIRD_REMARK}</span>
            <br />
            <br />
          </>
        )}
        {language === "he" && (
          <>
            ב<span className='bold filled-neutral'>{HE_COMPANY_NAME}</span>, אנו
            מאמינים שעיצוב טוב הוא אחראי להצלחה. <br /> אנחנו פה כדי לוודא שהעסק
            שלך יראה{" "}
            <span className='bold filled-neutral'>{HE_FIRST_REMARK}</span>{" "}
            שיכול. אצלנו תמצאו את{" "}
            <span className='bold'>{HE_SECOND_REMARK}</span>,{" "}
            <span className='bold'>{HE_THIRD_REMARK}</span>{" "}
            <span className='bold'>{HE_FOURTH_REMARK}</span> שחיפשתם.
          </>
        )}
      </span>
      <span
        className={clsx(
          "footer-about-lastline heading",
          language === "he" ? "hebrew" : ""
        )}
      >
        {language === "en" && (
          <>
            <span className='bold filled-neutral'>Join us</span> on our journey
            to shape a brighter, more efficient future.
          </>
        )}
        {language === "he" && (
          <>
            <span className='bold filled-neutral'>הצטרפו אלינו</span> בדרך אל
            עתיד <span className='bold'>משגשג</span> יותר.
          </>
        )}
      </span>
      <ContactForm language={language} />
    </div>
  )
}

export default Footer
