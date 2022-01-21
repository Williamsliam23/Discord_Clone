import React from "react"
import { connect } from "react-redux"
import { fetchServer, createServer, fetchServers } from "../../actions/server_actions";
import { fetchChannels } from "../../actions/channel_actions";
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
  fetchServers: () => dispatch(fetchServers()),
  fetchChannels: () => dispatch(fetchServerChannels()),
  logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(ServerIndex)