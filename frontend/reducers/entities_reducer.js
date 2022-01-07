import { combineReducers } from 'redux';
import channelsReducer from './channels_reducer';
import messagesReducer from './messages_reducer';
import usersReducer from './users_reducer';
import activeChannelReducer from './active_channel_reducer'
import membershipReducer from './membership_reducer';


const entitiesReducer = combineReducers({
  users: usersReducer,
  messages: messagesReducer,
  channels: channelsReducer,
  activeChannel: activeChannelReducer,
  members: membershipReducer
});

export default entitiesReducer;