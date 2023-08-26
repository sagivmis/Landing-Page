import React, { forwardRef, useState } from "react"
import AwesomeSlider from "react-awesome-slider"
import "react-awesome-slider/dist/styles.css"
import "./testimonials.css"
import { Avatar, Card, CardHeader, Rating } from "@mui/material"
import {
  HE_THIRD_NAVIGATION_SECTION,
  THIRD_NAVIGATION_SECTION
} from "../../config"

export type TestimonyType = {
  clientPhoto: string
  quote: string
  name: string
  rating: number
}

interface ITestimony {
  testimony: TestimonyType
}

const Testimony: React.FC<ITestimony> = (props: ITestimony) => {
  const { testimony } = props
  return (
    <div className='testimony-container'>
      <Card className='testimony'>
        <Rating
          name='read-only'
          className='testimony-rating'
          value={testimony.rating}
          readOnly
        />
        <CardHeader
          avatar={<Avatar aria-label='recipe' src={testimony.clientPhoto} />}
          title={testimony.name}
          subheader={testimony.quote}
        />
      </Card>
    </div>
  )
}
interface ITestimonials {
  testimonials: TestimonyType[]
  language: string
}
const Testimonials = (props: ITestimonials) => {
  const { testimonials, language } = props

  const slider = (
    <AwesomeSlider infinite>
      {testimonials.map((testimony) => (
        <div key={testimony.name}>
          <Testimony testimony={testimony} />
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
