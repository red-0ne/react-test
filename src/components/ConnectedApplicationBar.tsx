import { connect } from 'react-redux';
import { AppReducer } from '../store/index';
import { ApplicationBar } from './ApplicationBar';
import { toggleSelectAllStudents, deleteStudents, addStudent } from '../store/student/actions';

const mapStateToProps = (state: ReturnType<typeof AppReducer>) => ({
    selectedStudents: state.students.selectedStudents,
    allSelected: state.students.selectedStudents.length === Object.keys(state.students.entities).length,
});

export const ConnectedApplicationBar = connect(
    mapStateToProps,
    { toggleSelectAllStudents, deleteStudents, addStudent },
)(ApplicationBar);