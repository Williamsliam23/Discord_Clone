import React from "react"
import { connect } from "react-redux"
import { fetchServer, createServer, fetchServers } from "../../actions/server_actions";
import { createMembership } from "../../actions/membership_action";
import ServerIndex from "./server_index"
import { logout } from "../../actions/session_actions";

const mapStateToProps = state => ({
  currentUser: state.session.id,
  servers: Object.values(state.entities.servers),
  activeServer: state.entities.activeServer
})

const mapDispatchToProps = dispatch => ({
  processCreate: server => dispatch(createServer(server)),
  urlServer: id => dispatch(fetchServer(id)),
  fetchServers: (user_id) => dispatch(fetchServers(user_id)),
  fetchChannels: () => dispatch(fetchServerChannels()),
  logout: () => dispatch(logout()),
  createMembership: membership => dispatch(createMembership(membership))
})

export default connect(mapStateToProps, mapDispatchToProps)(ServerIndex)