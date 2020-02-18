import * as faker from 'faker';
import { UUID, Student, KeyValue, InitialState, FirstName, LastName, Username, Email, ImageURL } from '../../models';
import {
  ADD_STUDENT,
  DELETE_STUDENTS,
  EDIT_STUDENT,
  TOGGLE_SELECT_STUDENT,
  TOGGLE_SELECT_ALL_STUDENTS,
  FILTER_STUDENTS,
  StudentActionTypes
} from './actionTypes'
import { StatsBase } from 'fs';

const studentsEntities = [...new Array(15)].map(x => ({
  id: new UUID(faker.random.uuid()),
  firstName: new FirstName(faker.name.firstName()),
  lastName: new LastName(faker.name.lastName()),
  username: new Username(faker.internet.userName()),
  email: new Email(faker.internet.email()),
  avatar: new ImageURL(faker.internet.avatar()),
}));

const allStudents = studentsEntities
  .reduce((a, c) => Object.assign(a, { [c.id.toString()]: c }), {} as KeyValue<Student>);

const studentFilterCheck = (filter: string, student: Student) => {
  return (["firstName", "lastName"] as const)
    .map(prop => student[prop].toString().toLowerCase().includes(filter.toLowerCase()))
    .reduce((a, c) => a || c, false);
}

const initialState: InitialState = {
  entities: allStudents,
  selectedStudents: [] as UUID[],
  allEntities: allStudents,
  filter: '',
};

export const studentsReducer = (state = initialState, action: StudentActionTypes): InitialState => {
  switch (action.type) {

    case ADD_STUDENT: {
      const id = action.payload.id.toString();
      const entities = studentFilterCheck(state.filter, action.payload) ?
        { [id]: action.payload, ...state.entities } : 
        state.entities;
      const allEntities = { [id]: action.payload, ...state.allEntities };

      return { ...state, entities, allEntities };
    }

    case DELETE_STUDENTS: {
      const entities = { ...state.entities };
      const allEntities = { ...state.allEntities };

      state.selectedStudents.forEach(id => {
        delete entities[id.toString()]
        delete allEntities[id.toString()]
      });

      return { ...state, entities, allEntities, selectedStudents: [] };
    }

    case EDIT_STUDENT: {
      const id = action.payload.id.toString();
      const editedStudent = { ...state.entities[id], ...action.payload };
      const entities = { ...state.entities, [id]: editedStudent };

      return { ...state, entities };
    }
    case TOGGLE_SELECT_STUDENT: {
      const selected = state.selectedStudents.find(s => s.toString() === action.payload.toString());
      const selectedStudents = selected ? 
        state.selectedStudents.filter(s => s.toString() !== action.payload.toString()) :
        [...state.selectedStudents, action.payload]

      return { ...state, selectedStudents };
    }
    case TOGGLE_SELECT_ALL_STUDENTS: {
      const allStudents = Object.keys(state.entities).map(id => new UUID(id));
      const selectedStudents = allStudents.length === state.selectedStudents.length ? [] : allStudents;

      return { ...state, selectedStudents };
    }
    case FILTER_STUDENTS: {
      const filter = action.payload;
      const entities = Object
        .values(state.allEntities)
        .filter(s => studentFilterCheck(filter, s))
        .reduce((a, c) => Object.assign(a, { [c.id.toString()]: c }), {} as KeyValue<Student>);

      return {
        ...state,
        entities,
        filter,
        selectedStudents: state.selectedStudents.filter(id => entities[id.toString()]),
      };
    }
    default:
      return state;
  }
};