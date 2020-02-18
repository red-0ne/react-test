import { UUID } from "./UUID";
import { KeyValue } from "./KeyValue";
import { Student } from "./Student";

export interface InitialState {
    entities: KeyValue<Student>
    selectedStudents: UUID[];
    allEntities: KeyValue<Student>;
    filter: string;
}