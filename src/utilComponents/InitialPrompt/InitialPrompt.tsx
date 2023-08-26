import React, { useState } from "react"
import "./initial-prompt.css"
import { Box, Button, Modal, Typography } from "@mui/material"
import CTA from "../../components/CTA"

const InitialPrompt = () => {
  const [open, setOpen] = useState(true)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box className='initial-prompt-content'>
        <Typography
          className='initial-prompt-title'
          variant='h6'
          component='h2'
        >
          Come and check how much we can profit for you and decrease costs
        </Typography>
        <Typography className='initial-prompt-description'>
          Some description to show how
        </Typography>
        <div className='initial-prompt-cta'>
          <CTA
            content='Check now'
            callback={() => {}}
            type={"button"}
            buttonClassName='initial-prompt-cta-button'
          />
        </div>
      </Box>
    </Modal>
  )
}

export default InitialPrompt
