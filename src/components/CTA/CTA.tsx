import React from "react"
import "./cta.css"
import { Button } from "@mui/material"
import clsx from "clsx"

type CTAType = "button" | "else"
interface ICTA {
  content: string
  type: CTAType
  callback: () => void
  buttonClassName?: string
  containerClassName?: string
  primary?: boolean
}

const CTA = (props: ICTA) => {
  const {
    content,
    type,
    callback,
    buttonClassName,
    containerClassName,
    primary = true
  } = props
  return (
    <div className={clsx("cta-container", containerClassName)}>
      {type === "button" && (
        <Button
          onClick={callback}
          className={clsx(
            primary ? "primary-cta" : "secondary-cta",
            buttonClassName
          )}
          variant={"contained"}
        >
          {content}
        </Button>
      )}
    </div>
  )
}

export default CTA
