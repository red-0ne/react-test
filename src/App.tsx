import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { ConnectedApplicationBar } from './components/ConnectedApplicationBar';
import { ConnectedStudentList } from './components/ConnectedStudentList';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    paddingTop: 80,
  },
}));

export const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ConnectedApplicationBar title="DemoSchool" />
      <Container maxWidth="md">
        <ConnectedStudentList />
      </Container>
    </div>
  );
}