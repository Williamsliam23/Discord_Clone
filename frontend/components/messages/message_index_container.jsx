import React from "react"
import { connect } from "react-redux"
import MessagesIndex from "./message_index"

const mapStateToProps = state => ({
    messages: Object.values(state.entities.messages),
    currentUser: state.entities.users

})

const mapDispatchToProps = dispatch => ({
  processUpdate: message => dispatch(updateMessage(message)),
  processCreate: message => dispatch(createMessage(message))
})

export default connect(mapStateToProps, mapDispatchToProps)(MessagesIndex)