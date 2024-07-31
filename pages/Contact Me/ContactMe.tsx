import React from 'react'
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

const ContactMe = () => {
  return (
    <div>
      dharshan
      <Input type="email" placeholder="Email" />
      <Input type="phone number" placeholder='Phone Number' />
      <Textarea placeholder="Type your message here." />
    </div>
  )
}

export default ContactMe
