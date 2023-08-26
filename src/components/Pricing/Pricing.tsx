import React, { Dispatch, SetStateAction, useEffect, useState } from "react"
import "./pricing.css"
import { Card, CardContent, CardHeader } from "@mui/material"
import clsx from "clsx"
import CTA from "../CTA"
import {
  BUTTON,
  HE_PRICING_CTA_TEXT,
  HE_SECOND_NAVIGATION_SECTION,
  PRICING_CTA_TEXT,
  SECOND_NAVIGATION_SECTION
} from "../../config"
export interface IPricingPlan {
  pricingPlan: PricingPlanType
  setSelectedPlan: Dispatch<SetStateAction<number>>
  selectedPlan: number
  index: number
  language: string
}

export type PricingPlanType = {
  title: string
  price: number
  features: string[]
}

const PricingPlan = (props: IPricingPlan) => {
  const {
    pricingPlan: { features, price, title },
    selectedPlan,
    setSelectedPlan,
    index,
    language
  } = props

  const [isSelected, setIsSelected] = useState(false)

  useEffect(() => {
    setIsSelected(selectedPlan === index)
  }, [index, selectedPlan])

  return (
    <Card
      className={clsx("pricing-plan", isSelected ? "selected" : "")}
      onClick={() => {
        setSelectedPlan(index)
      }}
    >
      <CardHeader
        title={title}
        subheader={`${price}${language === "en" ? "$" : "₪"}`}
      />
      <CardContent>
        <div className='feature-list'>
          {features.map((feature) => (
            <span key={feature}>{feature}</span>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

interface IPricing {
  plans: PricingPlanType[]
  language: string
}

const Pricing = (props: IPricing) => {
  const { plans, language } = props

  const [selectedPlan, setSelectedPlan] = useState(1)
  return (
    <div
      className='pricing-container'
      id={
        language === "en"
          ? SECOND_NAVIGATION_SECTION.toLowerCase()
          : HE_SECOND_NAVIGATION_SECTION
      }
    >
      <div className={clsx("plans", language === "he" ? "hebrew" : "")}>
        {plans.map((plan, planIndex) => (
          <PricingPlan
            key={planIndex.toString()}
            pricingPlan={plan}
            index={planIndex}
            selectedPlan={selectedPlan}
            setSelectedPlan={setSelectedPlan}
            language={language}
          />
        ))}
      </div>
      <CTA
        content={language === "en" ? PRICING_CTA_TEXT : HE_PRICING_CTA_TEXT}
        callback={() => {}}
        type={BUTTON}
        buttonClassName='pricing-plan-cta'
      />
    </div>
  )
}

export default Pricing
