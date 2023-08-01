import React, { useState } from "react";
import ChatBox from "./ChatBox";
import { Button, Stack } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';


const AutoResponse = () => {
    interface SenderHistory {
    content: string;
    sender: string;
    timestamp: string;
  }
  interface ReceiverHistory {
    content: string;
    receiver: string;
    timestamp: string;
  }

  type Message = string;

  const[message, setMessage] = useState<Message>('');
  const[response, setResponse] = useState<Message>('');
  const[chatRecord, setChatRecord] = useState<SenderHistory[]>([]);
  const[responseRecord, setResponseRecord] = useState<ReceiverHistory[]>([]);

  const demoResponseSet: string[] = ["Hello", "How can I assist you?", "Have a good day!"];

  const handleTextInput = (e: React.ChangeEvent<HTMLInputElement>)=>{
    setMessage(e.target.value);
    setResponse("");
    };

const handleResponseReceived = () => {
  if(message.trim() !== ''){
    let responseIndex: number = Math.floor(Math.random()* demoResponseSet.length);
    let newRes = demoResponseSet[responseIndex];

    const newMessageObject: SenderHistory = {
      content: message.trim(),
      sender: "You",
      timestamp: new Date().toLocaleString(),
    }
    const newResponseObject: ReceiverHistory = {
      content: newRes,
      receiver: "Zimi",
      timestamp: new Date().toLocaleString(),
    }
    setChatRecord([...chatRecord, newMessageObject])
    setResponse(newRes);
    setResponseRecord([...responseRecord, newResponseObject])
    setMessage('');
  }
};

// console.log(chatRecord, responseRecord);

const chatRecordString: string = JSON.stringify(chatRecord);
localStorage.setItem("SenderHistory", chatRecordString);
const responseRecordString: string = JSON.stringify(responseRecord);
localStorage.setItem("Receiver History", responseRecordString);


const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
  if (event.key === 'Enter') {
    handleResponseReceived();
  }
};

  return (
    <>
    <Stack spacing={2}>
      <ChatBox text={message} onAddingText={handleTextInput} response={response} onReceivingResponse={handleResponseReceived} keyEvent={handleKeyPress} />
      <Button sx={{width: 80}} variant="contained" endIcon={<SendIcon />} onClick={handleResponseReceived}>Send</Button>
    </Stack>
  </>
  )
}

export default AutoResponse