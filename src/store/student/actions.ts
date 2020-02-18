import { Action } from "../../models";
import {
  ADD_STUDENT,
  DELETE_STUDENTS,
  EDIT_STUDENT,
  TOGGLE_SELECT_ALL_STUDENTS,
  FILTER_STUDENTS,
  TOGGLE_SELECT_STUDENT,
  
  AddStudentActionType,
  DeleteStudentActionTypes,
  EditStudentActionType,
  ToggleSelectAllStudentsActionType,
  FilterStudentsActionType,
  ToggleSelectStudentActionType,
} from "./actionTypes";

export const addStudent: Action<AddStudentActionType> = (payload) => ({
  type: ADD_STUDENT,
  payload,
});

export const deleteStudents: Action<DeleteStudentActionTypes> = () => ({
  type: DELETE_STUDENTS,
});

export const editStudent: Action<EditStudentActionType> = (payload) => ({
  type: EDIT_STUDENT,
  payload,
});

export const toggleSelectStudent: Action<ToggleSelectStudentActionType> = (payload) => ({
  type: TOGGLE_SELECT_STUDENT,
  payload,
})

export const toggleSelectAllStudents: Action<ToggleSelectAllStudentsActionType> = () => ({
  type: TOGGLE_SELECT_ALL_STUDENTS,
});

export const filterStudents: Action<FilterStudentsActionType> = (payload) => ({
  type: FILTER_STUDENTS,
  payload,
});