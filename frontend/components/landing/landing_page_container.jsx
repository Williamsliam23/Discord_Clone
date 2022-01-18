import React from "react"
import { connect } from "react-redux"
import { fetchChannels } from "../../actions/channel_actions"
import { logout } from "../../actions/session_actions"
import LandingPage from "./landing_page"


const mapStateToProps = state => ({
    currentUser: state.session.id,
    channels: state.entities.channels
})

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchChannels: () => dispatch(fetchChannels())
})

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage)