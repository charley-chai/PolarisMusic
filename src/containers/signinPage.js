import { connect } from 'react-redux';
import Signin from '../components/signin';
import { mapStateToProps, mapDisptchToProps } from '../actions/signin';

const newSigninPage = connect(mapStateToProps, mapDisptchToProps)(Signin)

export default newSigninPage