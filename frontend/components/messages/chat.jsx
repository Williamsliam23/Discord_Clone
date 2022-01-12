import React from "react";
import MessageIndexContainer from "./message_index_container";

const Chat = () =>{
  return(
    <div className='chat-wrap'>
    <div className="dischat">
      <MessageIndexContainer/>
    </div>
    </div>
  )
}


export default Chat