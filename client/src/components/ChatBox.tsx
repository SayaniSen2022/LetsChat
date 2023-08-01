import { TextField } from '@mui/material'


const ChatBox = (props: any) => {
  const customStyles={
    backgroundColor: "rgba(0,0,255,0.1)",
    width: 300,
  }
  return (
    <>
    <TextField style={customStyles} value={props.response} onChange={props.onReceivingResponse} placeholder='ChatApp response...'/>
    <TextField style={customStyles} value={props.text} onChange={props.onAddingText} onKeyDown={props.keyEvent} placeholder='Enter your message...' />
    </>
  )
}

export default ChatBox