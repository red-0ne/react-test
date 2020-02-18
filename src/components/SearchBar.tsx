import React, { useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import SearchIcon from '@material-ui/icons/Search';
import Clear from '@material-ui/icons/Clear';

const useStyles = makeStyles(() => createStyles({
  grow: {
    flexGrow: 1,
  },
  search: {
    marginLeft: 20,
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
  },
  searchInput: {
    paddingLeft: 5,
    width: 400,
  },
  verticalDivider: {
    height: 28,
    margin: 4,
  },
}));

interface SearchBarProps {
  filterStudents: (payload: string) => void;
}

export const SearchBar = (props: SearchBarProps) => {
  const classes = useStyles();
  const [filter, setFilter] = useState('');

  const filterStudents = (e: any) => {
    setFilter(filter);
    props.filterStudents(filter);
    e.preventDefault();
  };

  const clearFilter = (e: any) => {
    setFilter('');
    props.filterStudents('');
    e.preventDefault();
  };

  return (
    <Paper component="form" className={classes.search} onSubmit={filterStudents}>
      <InputBase
        className={classes.searchInput}
        placeholder="Search students…"
        onChange={(e) => setFilter(e.target.value)}
        value={filter}
      />

      <Divider
        orientation="vertical"
        className={classes.verticalDivider}
        style={{visibility: (filter ? 'visible' : 'hidden')}}
      />
      <IconButton
        color="inherit"
        size="small"
        onClick={clearFilter}
        style={{visibility: (filter ? 'visible' : 'hidden')}}
      >
        <Clear />
      </IconButton>

      <Divider orientation="vertical" className={classes.verticalDivider} />
      <IconButton color="inherit" size="small" onClick={filterStudents}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}