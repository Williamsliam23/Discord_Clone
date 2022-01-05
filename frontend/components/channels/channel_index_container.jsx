import React from "react"
import { connect } from "react-redux"
import { fetchChannelMessages } from "../../util/message_api_util"
import ChannelIndex from "./channel_index"

const mapStateToProps = state => ({
  messages: Object.values(state.entities.messages),
  currentUser: state.entities.users

})