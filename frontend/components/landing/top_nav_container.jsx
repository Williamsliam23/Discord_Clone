import React from "react"
import { connect } from "react-redux"
import { logout } from "../../actions/session_actions"
import TopNav from "./top_nav"


const mapStateToProps = state => ({
    currentUser: state.session.id
})

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(TopNav)