import React, { useState } from 'react';
import faker from 'faker';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';

import Delete from '@material-ui/icons/Delete';
import CheckBox from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import AddCircle from '@material-ui/icons/AddCircle';

import { ConnectedSearchBar } from './ConnectedSearchBar';
import { UUID, Student } from '../models';
import { StudentDialog } from './StudentDialog';

interface ApplicationBarProps {
  title: string;
  selectedStudents: UUID[];
  allSelected: boolean;
  toggleSelectAllStudents: (payload: void) => any;
  deleteStudents: (payload: void) => any;
  addStudent: (payload: Student) => any
}

export const ApplicationBar = (props: ApplicationBarProps) => {
  const [dialogOpened, setDialogOpen] = useState(false);
  const closeDialog = (student?: Student) => {
    if (student && !student.id) {
      student.id = new UUID(faker.random.uuid());
      props.addStudent(student);
    }
    setDialogOpen(false);
  }

  return (
    <AppBar>
      <Toolbar>

        <Typography variant="h6" noWrap>
          {props.title}
        </Typography>

        <ConnectedSearchBar />
        <div style={{flexGrow: 1}} />

        <Tooltip title="Select all">
          <IconButton color="inherit" onClick={() => props.toggleSelectAllStudents()}>
            {props.allSelected ? <CheckBox /> : <CheckBoxOutlineBlankIcon />}
          </IconButton>
        </Tooltip>

        <Tooltip title="Add student">
          <IconButton color="inherit" onClick={() => setDialogOpen(true)}>
            <AddCircle />
          </IconButton>
        </Tooltip>

        <Tooltip title="Delete students">
          <IconButton color="inherit" onClick={() => props.deleteStudents()}>
            <Badge badgeContent={props.selectedStudents.length} color="secondary" max={99}>
              <Delete />
            </Badge>
          </IconButton>
        </Tooltip>

        <StudentDialog
          title="Add student"
          opened={dialogOpened}
          closeDialog={closeDialog}
        ></StudentDialog>
      </Toolbar>
    </AppBar>
  )
}