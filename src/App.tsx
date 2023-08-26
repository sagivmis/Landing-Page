import React, { useState } from "react"
import {
  Features,
  Footer,
  Hero,
  Navigation,
  Pricing,
  Testimonials
} from "./components"
import "./App.css"
import { InitialPrompt } from "./utilComponents"
import {
  FEATURES,
  HE_FEATURES,
  HE_PRICING_PLANS,
  HE_TESTIMONIALS,
  PRICING_PLANS,
  TESTIMONIALS
} from "./config"

function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [language, setLanguage] = useState<"en" | "he">("he")

  return (
    <div className='App'>
      <InitialPrompt />
      <Navigation language={language} />
      {/* <Header /> */}
      <Hero language={language} />
      <Features
        language={language}
        features={language === "en" ? FEATURES : HE_FEATURES}
      />
      <Testimonials
        language={language}
        testimonials={language === "en" ? TESTIMONIALS : HE_TESTIMONIALS}
      />
      <Pricing
        language={language}
        plans={language === "en" ? PRICING_PLANS : HE_PRICING_PLANS}
      />
      <Footer language={language} />
    </div>
  )
}

export default App
