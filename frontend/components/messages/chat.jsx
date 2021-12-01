import React from "react";
import MessageIndexContainer from "./message_index_container";
import MessageForm from "./message_form";

const Chat = () =>{
  return(
    <div className="dischat">
      <MessageIndexContainer/>
      <MessageForm />
    </div>
  )
}


export default Chat