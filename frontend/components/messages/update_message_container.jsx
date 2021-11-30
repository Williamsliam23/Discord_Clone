import { connect } from "react-redux"
import { updateMessage } from "../../actions/message_actions"
import MessageForm from "./message_form"


const mapStateToProps = state => ({
    currentUser: state.session.currentUser,
    formType: "update"
})

const mapDispatchToProps = dispatch => ({
    processUpdate: message => dispatch(updateMessage(message))
})

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm)