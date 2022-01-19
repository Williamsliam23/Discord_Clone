import React from "react"
import { connect } from "react-redux"
import { fetchChannelMessages, createMessage } from "../../actions/message_actions";
import { fetchUsers } from "../../actions/membership_action";
import MessagesIndex from "./message_index"

const mapStateToProps = state => ({
  messages: Object.values(state.entities.messages),
  currentUser: state.entities.users,
  members: state.entities.members,
  activeChannel: state.entities.activeChannel.id,
  channels: state.entities.channels
})

const mapDispatchToProps = dispatch => ({
  processUpdate: message => dispatch(updateMessage(message)),
  processCreate: message => dispatch(createMessage(message)),
  fetchMessages: (id) => dispatch(fetchChannelMessages(id)),
  fetchUsers: () => dispatch(fetchUsers())
})

export default connect(mapStateToProps, mapDispatchToProps)(MessagesIndex)