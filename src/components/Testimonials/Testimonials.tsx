import React, { useMemo } from "react"
import AwesomeSlider from "react-awesome-slider"
import "react-awesome-slider/dist/styles.css"
import "./testimonials.css"
import { Avatar, Card, CardContent, CardHeader, Rating } from "@mui/material"
import {
  HE_THIRD_NAVIGATION_SECTION,
  THIRD_NAVIGATION_SECTION
} from "../../config"
import clsx from "clsx"

export type TestimonyType = {
  clientPhoto: string
  quote: string
  name: string
  rating: number
}

interface ITestimony {
  testimony: TestimonyType
  language: string
}

const Testimony: React.FC<ITestimony> = (props: ITestimony) => {
  const { testimony, language } = props
  const isHE = useMemo(() => (language === "en" ? false : true), [])
  return (
    <Card className='testimony-container'>
      <Rating
        name='read-only'
        className='testimony-rating'
        value={testimony.rating}
        readOnly
      />
      <CardHeader
        avatar={<Avatar aria-label='recipe' src={testimony.clientPhoto} />}
        title={testimony.name}
        // subheader={}
        className={clsx("testimony-header paragraph", isHE ? "hebrew" : "")}
      />
      <CardContent
        className={clsx("testimony-content paragraph", isHE ? "hebrew" : "")}
      >
        {testimony.quote}
      </CardContent>
    </Card>
  )
}
interface ITestimonials {
  testimonials: TestimonyType[]
  language: string
}
const Testimonials = (props: ITestimonials) => {
  const { testimonials, language } = props

  const slider = (
    <AwesomeSlider infinite fillParent>
      {testimonials.map((testimony) => (
        <div key={testimony.name} className='testimony-slider-item'>
          <Testimony testimony={testimony} language={language} />
        </div>
      ))}
    </AwesomeSlider>
  )

  return (
    <div
      className='testimonials-container'
      id={
        language === "en"
          ? THIRD_NAVIGATION_SECTION.toLowerCase()
          : HE_THIRD_NAVIGATION_SECTION
      }
    >
      {slider}
    </div>
  )
}

export default Testimonials
