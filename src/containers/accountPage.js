import { connect } from 'react-redux';
import Account from '../components/account';
import { mapStateToProps, mapDisptchToProps } from '../actions/account';

const AccountPage = connect(mapStateToProps, mapDisptchToProps)(Account)

export default AccountPage;