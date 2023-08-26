import React from "react"
import "./contact-form.css"
import {
  FormControl,
  FormLabel,
  Stack,
  TextField,
  Button,
  Checkbox
} from "@mui/material"
import { HE_TERMS_CONDITIONS_LINK, TERMS_CONDITIONS_LINK } from "../../config"

interface IContactForm {
  language: string
}
const ContactForm = (props: IContactForm) => {
  const { language } = props
  return (
    <FormControl className='contact-form-container'>
      <span className='contact-invite-label form-label'>
        השאירו פרטים ונחזור אליכם בהקדם
      </span>
      <Stack
        direction={"row"}
        width={"100%"}
        justifyContent={"space-around"}
        alignItems={"center"}
        gap={"1em"}
      >
        {language === "en" && (
          <FormLabel className='full-name-label form-label'>
            Full Name
          </FormLabel>
        )}
        <TextField
          fullWidth
          dir='rtl'
          variant='outlined'
          className='full-name-input-container input-container'
          inputProps={{ className: "full-name-input" }}
        />
        {language === "he" && (
          <FormLabel className='full-name-label form-label'>שם מלא</FormLabel>
        )}
      </Stack>
      <Stack
        direction={"row"}
        width={"100%"}
        justifyContent={"space-around"}
        alignItems={"center"}
        gap={"1em"}
      >
        {language === "en" && (
          <FormLabel className='email-label form-label'>Email</FormLabel>
        )}
        <TextField
          fullWidth
          dir='rtl'
          variant='outlined'
          className='email-input-container input-container'
          inputProps={{ className: "email-input" }}
        />
        {language === "he" && (
          <FormLabel className='email-label form-label'>אימייל</FormLabel>
        )}
      </Stack>
      <Stack
        direction={"row"}
        width={"100%"}
        justifyContent={"space-around"}
        alignItems={"center"}
        gap={"1em"}
      >
        {language === "en" && (
          <FormLabel className='phone-label form-label'>Phone</FormLabel>
        )}
        <TextField
          fullWidth
          dir='rtl'
          variant='outlined'
          className='phone-input-container input-container'
          inputProps={{ className: "phone-input" }}
        />
        {language === "he" && (
          <FormLabel className='phone-label form-label'>טלפון</FormLabel>
        )}
      </Stack>
      <Stack
        direction={"row"}
        width={"100%"}
        justifyContent={"space-around"}
        alignItems={"center"}
        gap={"1em"}
      >
        {language === "he" && (
          <FormLabel className='terms-conditions-label form-label checkbox-label'>
            אני מסכים\ה ל
            <a href={TERMS_CONDITIONS_LINK} target='_blank' rel='noreferrer'>
              תנאי השירות והשימוש
            </a>
          </FormLabel>
        )}
        <Checkbox className='terms-conditions-checkbox-container checkbox-container' />
        {language === "en" && (
          <FormLabel className='phone-label form-label checkbox-label'>
            I agree to the{" "}
            <a href={HE_TERMS_CONDITIONS_LINK} target='_blank' rel='noreferrer'>
              Terms and Conditions
            </a>
          </FormLabel>
        )}
      </Stack>
      <Stack
        direction={"row"}
        width={"100%"}
        justifyContent={"space-around"}
        alignItems={"center"}
        gap={"1em"}
      >
        {language === "he" && (
          <FormLabel className='advertise-agreement-label form-label checkbox-label'>
            אני מסכים\ה לקבל תכנים שיווקיים במייל
          </FormLabel>
        )}
        <Checkbox
          className='advertise-agreement-checkbox-container checkbox-container'
          defaultChecked={true}
        />
        {language === "en" && (
          <FormLabel className='phone-label form-label checkbox-label'>
            I agree to recieve advertisement content via email
          </FormLabel>
        )}
      </Stack>
      <Button className='contact-cta' variant='contained'>
        {language === "he" && "שלח"}
        {language === "en" && "Send"}
      </Button>
    </FormControl>
  )
}

export default ContactForm
