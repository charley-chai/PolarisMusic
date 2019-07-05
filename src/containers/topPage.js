import { connect } from 'react-redux';
import Top from '../components/top';
import { mapStateToProps, mapDisptchToProps } from '../actions/top';

const TopPage = connect(mapStateToProps, mapDisptchToProps)(Top)

export default TopPage