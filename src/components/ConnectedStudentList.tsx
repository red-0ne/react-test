import { connect } from 'react-redux';
import { AppReducer } from '../store';
import { StudentList } from './StudentList';
import { toggleSelectStudent, editStudent } from '../store/student/actions';

const mapStateToProps = (state: ReturnType<typeof AppReducer>) => ({
    students: Object.values(state.students.entities),
    selectedStudents: state.students.selectedStudents.map(s => s.toString()),
});

export const ConnectedStudentList = connect(
    mapStateToProps,
    { toggleSelectStudent, editStudent },
)(StudentList);