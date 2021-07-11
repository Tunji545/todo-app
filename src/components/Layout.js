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
import { AppBar, Toolbar } from '@material-ui/core';
import { format } from 'date-fns';
import MarioAv from '../images/mario-av.png';
import { Avatar } from '@material-ui/core';

const drawith = 240;

const useStyles = makeStyles((theme) => ({
  page: {
    backgroundColor: '#f9f9f9',
    width: '100%',
    padding: theme.spacing(3),
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
  heading: {
    padding: theme.spacing(2),
  },
  appBar: {
    width: `calc(100% - ${drawith}px)`,
  },
  toolbar: theme.mixins.toolbar,
  date: {
    flexGrow: 1,
  },
  mario: {
    marginLeft: theme.spacing(2),
  },
}));

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
      <AppBar color='textSecondary' className={classes.appBar}>
        <Toolbar>
          <Typography className={classes.date}>
            {format(new Date(), 'do MMMM Y')}
          </Typography>
          <Typography>Mario</Typography>
          <Avatar src={MarioAv} className={classes.mario} />
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant='permanent'
        anchor='left'
        classes={{ paper: classes.drawPaper }}
      >
        <div variant='h5' className={classes.heading}>
          <Typography>Note Card</Typography>
        </div>

        <List>
          {makeList.map((list) => (
            <ListItem
              key={list.text}
              button
              onClick={() => history.push(list.path)}
              className={Location.pathname === list.path && classes.active}
            >
              <ListItemIcon>{list.icon}</ListItemIcon>
              <ListItemText primary={list.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {children}
      </div>
    </div>
  );
};

export default Layout;
