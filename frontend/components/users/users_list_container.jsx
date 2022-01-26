import React from "react";
import { connect } from "react-redux";
import { deleteMembership, fetchUsers } from "../../actions/membership_action";
import { logout } from "../../actions/session_actions"
import UserList from "./users_list";

const mapStateToProps = state => ({
  messages: Object.values(state.entities.messages),
  currentUser: state.session.id,
  activeServer: state.entities.activeServer,
  channels: Object.values(state.entities.channels),
  members: Object.values(state.entities.members)
})

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers()),
  logout: () => dispatch(logout()),
  deleteMembership: membership => dispatch(deleteMembership(membership)),
  activeServer: id => dispatch(fetchServer(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserList)