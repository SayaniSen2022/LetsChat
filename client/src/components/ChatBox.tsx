import React from 'react'
import { TextField } from '@mui/material'


const ChatBox = (props: any) => {
  return (
    <>
    <TextField sx={{width: 300}} value={props.response} onChange={props.onReceivingResponse} placeholder='ChatApp response...'/>
    <TextField sx={{width: 300}} value={props.text} onChange={props.onAddingText} onKeyDown={props.keyEvent} placeholder='Enter your message...' />
    </>
  )
}

export default ChatBox