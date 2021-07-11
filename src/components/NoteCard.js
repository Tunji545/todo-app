import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import {
  CardContent,
  IconButton,
  Typography,
  makeStyles,
} from '@material-ui/core';
import { DeleteOutlined } from '@material-ui/icons';
import { Avatar } from '@material-ui/core';
import { blue, green, pink, yellow } from '@material-ui/core/colors';

const useStyles = makeStyles({
  test: {
    border: (note) => {
      if (note.body.category === 'work') {
        return '1px solid red';
      }
    },
  },
  avatar: {
    backgroundColor: (note) => {
      if (note.body.category === 'work') {
        return yellow[700];
      } else if (note.body.category === 'reminder') {
        return pink[500];
      } else if (note.body.category === 'todo') {
        return green[500];
      } else {
        return blue[500];
      }
    },
  },
});

const NoteCard = ({ note, handleDelete }) => {
  const classes = useStyles(note);

  return (
    <div>
      <Card elevation={1} className={classes.test}>
        <CardHeader
          avatar={
            <Avatar className={classes.avatar}>
              {note.body.category[0].toUpperCase()}
            </Avatar>
          }
          action={
            <IconButton onClick={() => handleDelete(note.id)}>
              <DeleteOutlined />
            </IconButton>
          }
          title={note.body.title}
          subheader={note.body.category}
        />
        <CardContent>
          <Typography variant='body2' color='textSecondary'>
            {note.body.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default NoteCard;
