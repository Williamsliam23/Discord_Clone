import React from "react";
import ChannelIndexContainer from "./channel_index_container";

const Channels = ({channels}) =>{
  return(
    <>
      <ChannelIndexContainer channels={channels}/>
    </>
  )
}


export default Channels