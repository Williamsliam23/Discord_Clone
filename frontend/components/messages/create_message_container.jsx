import { connect } from "react-redux"
import { createMessage } from "../../actions/message_actions"
import MessageForm from "./message_form"


const mapStateToProps = state => ({
    currentUser: state.session.currentUser,
    formType: "create"
})

const mapDispatchToProps = dispatch => ({
    processCreate: message => dispatch(createMessage(message))
})

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm)