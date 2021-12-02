import { connect } from "react-redux"
import { logout } from "../../actions/session_actions"
import TopNav from "./top_nav"


const mapStateToProps = state => ({
    currentUser: state.entities.session.id
})

const mapDispatchToProps = dispatch => ({
  logout
})

export default connect(null, mapDispatchToProps)(TopNav)