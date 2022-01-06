import React from "react"
import { connect } from "react-redux"
import { fetchChannelMessages } from "../../actions/message_actions";
import MessagesIndex from "./message_index"

const mapStateToProps = state => ({
  messages: Object.values(state.entities.messages),
  currentUser: state.entities.users,
  activeChannel: state.entities.activeChannel[0],
  channels: state.entities.channels
})

const mapDispatchToProps = dispatch => ({
  processUpdate: message => dispatch(updateMessage(message)),
  processCreate: message => dispatch(createMessage(message)),
  fetchMessages: (id) => dispatch(fetchChannelMessages(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(MessagesIndex)