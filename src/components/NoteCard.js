import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
// import CardContent from '@material-ui/core/CardContent';
import { CardContent, IconButton, Typography } from '@material-ui/core';
import { DeleteOutlined } from '@material-ui/icons';

const NoteCard = ({ note, handleDelete }) => {
  return (
    <div>
      <Card elevation={1}>
        <CardHeader
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
