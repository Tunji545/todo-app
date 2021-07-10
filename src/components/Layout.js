import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Drawer } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { List } from '@material-ui/core';
import { ListItem } from '@material-ui/core';
import { ListItemIcon } from '@material-ui/core';
import { ListItemText } from '@material-ui/core';
import { SubjectOutlined, AddCircleOutlineOutlined } from '@material-ui/icons';
import { useHistory, useLocation } from 'react-router-dom';

const drawith = 240;

const useStyles = makeStyles({
  page: {
    backgroundColor: '#f9f9f9',
    width: '100%',
  },
  drawer: {
    width: drawith,
  },
  drawPaper: {
    width: drawith,
  },
  root: {
    display: 'flex',
  },
  active: {
    backgroundColor: '#f4f4f4',
  },
});

const Layout = ({ children }) => {
  const classes = useStyles();
  const history = useHistory();
  const Location = useLocation();

  const makeList = [
    {
      text: 'My Notes',
      icon: <SubjectOutlined color='secondary' />,
      path: `/`,
    },
    {
      text: 'Create Note',
      icon: <AddCircleOutlineOutlined color='secondary' />,
      path: `/create`,
    },
  ];

  return (
    <div className={classes.root}>
      {/* AppBar */}
      <Drawer
        className={classes.drawer}
        variant='permanent'
        anchor='left'
        classes={{ paper: classes.drawPaper }}
      >
        <div variant='h5'>
          <Typography>Note Card</Typography>
        </div>

        <List>
          {makeList.map((list) => (
            <ListItem
              key={list.text}
              button
              onClick={() => history.push(list.path)}
              className={Location.pathname == list.path ? classes.active : null}
            >
              <ListItemIcon>{list.icon}</ListItemIcon>
              <ListItemText primary={list.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <div className={classes.page}>{children}</div>
    </div>
  );
};

export default Layout;
