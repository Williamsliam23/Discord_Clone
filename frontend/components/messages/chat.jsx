import React from "react";
import MessageIndexContainer from "./message_index_container";
import CreateMessageContainer from "./create_message_container";

const Chat = () =>{
  return(
    <div className='chat-wrap'>
    <div className="dischat">
      <MessageIndexContainer/>
      <CreateMessageContainer />
    </div>
    </div>
  )
}


export default Chat