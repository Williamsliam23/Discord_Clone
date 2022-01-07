import React from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../../actions/membership_action";
import UserList from "./users_list";

const mapStateToProps = state => ({
  messages: Object.values(state.entities.messages),
  currentUser: state.entities.users,
  activeChannel: state.entities.activeChannel,
  channels: Object.values(state.entities.channels),
  members: Object.values(state.entities.members)
})

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers())
})

export default connect(mapStateToProps, mapDispatchToProps)(UserList)