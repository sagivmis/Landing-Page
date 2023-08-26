import React from "react"
import { Card, CardHeader, Avatar } from "@mui/material"
import "./features.css"
import clsx from "clsx"
import {
  FIRST_NAVIGATION_SECTION,
  HE_FIRST_NAVIGATION_SECTION
} from "../../config"

export interface IFeature {
  icon: string
  title: string
  description: string
}

interface IFeatures {
  features: IFeature[]
  language: string
}

const Features = (props: IFeatures) => {
  const { features, language } = props
  return (
    <div
      className={clsx("features-container", language === "he" ? "hebrew" : "")}
      id={
        language === "en"
          ? FIRST_NAVIGATION_SECTION.toLowerCase()
          : HE_FIRST_NAVIGATION_SECTION
      }
    >
      <div className={clsx("features", language === "he" ? "hebrew" : "")}>
        {features.map((feature) => {
          return (
            <div
              className={clsx("feature", language === "he" ? "hebrew" : "")}
              key={feature.title}
            >
              <Card className='feature-container'>
                <CardHeader
                  avatar={
                    <Avatar
                      aria-label='recipe'
                      src={feature.icon}
                      variant='rounded'
                    />
                  }
                  title={feature.title}
                  subheader={feature.description}
                />
              </Card>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Features
