import { connect } from "react-redux"
import { createServer, fetchServers } from "../../actions/server_actions"
import { createMembership } from "../../actions/membership_action";
import ServerForm from "./server_form"


const mapStateToProps = state => ({
    currentUser: state.session.id
})

const mapDispatchToProps = dispatch => ({
    processCreate: server => dispatch(createServer(server)),
    createMembership: membership => dispatch(createMembership(membership)),
    fetchServers: () => dispatch(fetchServers())
})

export default connect(mapStateToProps, mapDispatchToProps)(ServerForm)