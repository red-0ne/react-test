import { Student, UUID, ActionType } from '../../models';

export const ADD_STUDENT = "ADD_STUDENT";
export const DELETE_STUDENTS = "DELETE_STUDENTS";
export const EDIT_STUDENT = "EDIT_STUDENT";
export const TOGGLE_SELECT_STUDENT = "UNSELECT_STUDENT";
export const TOGGLE_SELECT_ALL_STUDENTS = "SELECT_ALL_STUDENTS";
export const FILTER_STUDENTS = "FILTER_STUDENTS";

export interface AddStudentActionType extends ActionType {
  type: typeof ADD_STUDENT;
  payload: Student;
}

export interface DeleteStudentActionTypes extends ActionType {
  type: typeof DELETE_STUDENTS;
}

export interface EditStudentActionType extends ActionType {
  type: typeof EDIT_STUDENT;
  payload: Partial<Student> & Pick<Student, "id">;
}

export interface ToggleSelectStudentActionType extends ActionType {
  type: typeof TOGGLE_SELECT_STUDENT,
  payload: UUID,
}

export interface ToggleSelectAllStudentsActionType extends ActionType {
  type: typeof TOGGLE_SELECT_ALL_STUDENTS;
}

export interface FilterStudentsActionType extends ActionType {
  type: typeof FILTER_STUDENTS;
  payload: string;
}

export type StudentActionTypes =
  AddStudentActionType |
  DeleteStudentActionTypes |
  EditStudentActionType |
  ToggleSelectAllStudentsActionType |
  FilterStudentsActionType |
  ToggleSelectStudentActionType;