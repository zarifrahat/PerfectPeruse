import { connect } from 'react-redux';
import SignupForm from './signupform';
import { signup } from '../../actions/session_actions';


const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
    signup: (user) => dispatch(signup(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);