
import { connect } from 'react-redux';
import { AppReducer } from '../store/index';
import { SearchBar } from './SearchBar';
import { filterStudents } from '../store/student/actions';

const mapStateToProps = (state: ReturnType<typeof AppReducer>) => ({
    entities: state.students.entities,
});

export const ConnectedSearchBar = connect(
    mapStateToProps,
    { filterStudents },
)(SearchBar);