import React from "react"
import { connect } from "react-redux"
import { fetchChannel, createChannel, fetchServerChannels } from "../../actions/channel_actions";
import { fetchChannelMessages } from "../../actions/message_actions";
import ChannelIndex from "./channel_index"

const mapStateToProps = state => ({
  messages: Object.values(state.entities.messages),
  currentUser: state.entities.users,
  activeServer: state.entities.activeServer,
  channels: Object.values(state.entities.channels)
})

const mapDispatchToProps = dispatch => ({
  processCreate: channel => dispatch(createChannel(channel)),
  setActiveChannel: id => dispatch(fetchChannel(id)),
  fetchMessages: id => dispatch(fetchChannelMessages(id)),
  fetchChannels: id => dispatch(fetchServerChannels(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ChannelIndex)