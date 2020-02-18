import React, { useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';

import { Student, UUID } from '../models';
import { StudentDialog } from './StudentDialog';

interface StudentListProps {
  students: Student[];
  selectedStudents: string[];
  toggleSelectStudent: (id: UUID) => void;
  editStudent: (payload: Student) => any
}

export const StudentList = (props: StudentListProps) => {
  const [clickedStudent, setClickedStudent] = useState<Student | undefined>(undefined);
  const [dialogOpened, setDialogOpen] = useState(false);
  const closeDialog = (student?: Student) => {
    if (student?.id) {
      props.editStudent(student);
    }

    setClickedStudent(undefined);
    setDialogOpen(false);
  }

  const editStudent = (student: Student) => {
    setClickedStudent(student);
    setDialogOpen(true)
  }

  return (
    <>
      <Typography variant="h4">
        Students list
      </Typography>
      <List>{props.students.map((s: Student) =>
        <React.Fragment key={s.id.toString()}>
          <ListItem
            alignItems="flex-start"
            onClick={() => editStudent(s)}
            button
          >
            <ListItemAvatar>
              <Avatar alt={s.firstName.toString() + ' ' + s.lastName.toString()} src={s.avatar.toString()} />
            </ListItemAvatar>
            <ListItemText secondary={s.username.toString()}>
              {s.firstName.toString()} {s.lastName.toString()}
            </ListItemText>
            <ListItemSecondaryAction>
              <Checkbox
                edge="end"
                checked={props.selectedStudents.includes(s.id.toString())}
                onClick={() => props.toggleSelectStudent(s.id)}
              />
            </ListItemSecondaryAction>
          </ListItem>
          <Divider component="li" />
        </React.Fragment>)}
      </List>
      <StudentDialog
        title="Edit student"
        opened={dialogOpened}
        closeDialog={closeDialog}
        student={clickedStudent}
      ></StudentDialog>
    </>
  )
}