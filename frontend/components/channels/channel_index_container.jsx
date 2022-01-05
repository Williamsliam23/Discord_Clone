import React from "react"
import { connect } from "react-redux"
import { fetchChannel } from "../../util/channel_api_util"
import { fetchChannelMessages } from "../../util/message_api_util"
import ChannelIndex from "./channel_index"

const mapStateToProps = state => ({
  messages: Object.values(state.entities.messages),
  currentUser: state.entities.users,
  activeChannel: state.entities.activeChannel
})

const mapDispatchToProps = dispatch => ({
  processCreate: message => dispatch(createChannel(message)),
  setActiveChannel: id => dispatch(fetchChannel(id)),
  fetchMessages: (id) => dispatch(fetchChannelMessages(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ChannelIndex)