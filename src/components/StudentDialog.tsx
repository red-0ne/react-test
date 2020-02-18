import React from 'react';
import faker from 'faker';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';  
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';

import { Student, ImageURL, FirstName, Email, LastName, Username } from '../models';

interface StudentDialogProps {
  title: string;
  opened: boolean;
  closeDialog: (student?: Student) => void;
  student?: Student;
}

export const StudentDialog = (props: StudentDialogProps) => {
  const student = props.student || {
    avatar: new ImageURL(faker.internet.avatar()),
    firstName: new FirstName(''),
    lastName: new LastName(''),
    email: new Email(''),
    username: new Username(''),
  };

  return (
    <Dialog
      open={props.opened}
      scroll="paper"
      fullWidth={true}
      maxWidth="md"
    >
      <DialogTitle>
        <div style={{display: 'inline-block', margin: '0px 20px', verticalAlign: 'middle' }}>
          <Avatar src={student.avatar.toString()}>&nbsp;</Avatar>
        </div>
        {props.title} {props?.student?.id ? '(' + props.student?.id?.toString() + ')' : ''} 
      </DialogTitle>
      <DialogContent dividers={true}>
        <DialogContentText component="div">
          <TextField
            label="FirstName"
            margin="normal"
            variant="filled"
            style={{ width: '45%', margin: '10px 2.5%' }}
            required
            defaultValue={student.firstName.toString()}
            onChange={(e) => student.firstName = new FirstName(e.target.value)}
          />
          <TextField
            label="LastName"
            margin="normal"
            variant="filled"
            style={{ width: '45%', margin: '10px 2.5%' }}
            required
            defaultValue={student.lastName.toString()}
            onChange={(e) => student.lastName = new LastName(e.target.value)}
          />

          <TextField
            label="Username"
            margin="normal"
            variant="filled"
            style={{ width: '45%', margin: '10px 2.5%' }}
            required
            defaultValue={student.username.toString()}
            onChange={(e) => student.username = new Username(e.target.value)}
          />
          <TextField
            label="Email"
            margin="normal"
            variant="filled"
            style={{ width: '45%', margin: '10px 2.5%' }}
            defaultValue={student.email.toString()}
            onChange={(e) => student.email = new Email(e.target.value)}
            required
          />

        </DialogContentText>
      </DialogContent>

      <DialogActions>
        <Button color="secondary" onClick={() => props.closeDialog()}>Cancel</Button>
        <Button color="primary" onClick={() => props.closeDialog(student as any)}>Save</Button>
      </DialogActions>

    </Dialog>
  );
}