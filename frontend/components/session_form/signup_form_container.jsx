import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { removeErrors, signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Sign up',
    navLink: <Link style={{ textDecoration: 'none', color: 'white' }} to="/login">Log in here</Link>,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    removeErrors: () => dispatch(removeErrors())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
