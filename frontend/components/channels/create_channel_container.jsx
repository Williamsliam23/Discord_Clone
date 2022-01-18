import { connect } from "react-redux"
import { createChannel, fetchChannels } from "../../actions/channel_actions"
import ChannelForm from "./channel_form"


const mapStateToProps = state => ({
    currentUser: state.session.id,
    formType: "create"
})

const mapDispatchToProps = dispatch => ({
    processCreate: channel => dispatch(createChannel(channel)),
    fetchChannels: () => dispatch(fetchChannels())
})

export default connect(mapStateToProps, mapDispatchToProps)(ChannelForm)