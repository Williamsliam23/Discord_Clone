import React from "react"
import { connect } from "react-redux"
import { fetchChannel, fetchChannels, createChannel } from "../../actions/channel_actions";
import { fetchChannelMessages } from "../../actions/message_actions";
import ChannelIndex from "./channel_index"

const mapStateToProps = state => ({
  messages: Object.values(state.entities.messages),
  currentUser: state.entities.users,
  activeChannel: state.entities.activeChannel,
  channels: Object.values(state.entities.channels)
})

const mapDispatchToProps = dispatch => ({
  processCreate: channel => dispatch(createChannel(channel)),
  setActiveChannel: id => dispatch(fetchChannel(id)),
  fetchMessages: id => dispatch(fetchChannelMessages(id)),
  fetchChannels: () => dispatch(fetchChannels())
})

export default connect(mapStateToProps, mapDispatchToProps)(ChannelIndex)