import React from "react"
import { connect } from "react-redux"
import { fetchChannels } from "../../actions/channel_actions";
import ChannelIndex from "./channel_index"

const mapStateToProps = state => ({
  currentUser: state.session.id,
  servers: Object.values(state.entities.servers)
})

const mapDispatchToProps = dispatch => ({
  processCreate: server => dispatch(createServer(server)),
  setActiveServer: id => dispatch(fetchServer(id)),
  fetchChannels: () => dispatch(fetchChannels())
})

export default connect(mapStateToProps, mapDispatchToProps)(ChannelIndex)