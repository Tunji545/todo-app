import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { Radio } from '@material-ui/core';
import { RadioGroup } from '@material-ui/core';
import { FormControlLabel } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import { FormLabel } from '@material-ui/core';
import Axios from '../data/Api';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block',
  },
});

const Create = () => {
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [errorTitle, setErrorTitle] = useState(false);
  const [errorDetails, setErrorDetails] = useState(false);
  const [category, setCategory] = useState('todos');

  const fetchApi = async (title, details, category) => {
    await Axios.post(`/`, {
      body: { title, details, category },
    });
    // console.log(resp);
    history.push(`/`);
  };

  // useEffect(() => {
  //   fetchApi();
  // }, []);

  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorTitle(true);
    setErrorDetails(true);

    if (title) {
      setErrorTitle(false);
    }
    if (details) {
      setErrorDetails(false);
    }
    if (title && details) {
      fetchApi(title, details, category);
    }
  };

  return (
    <Container>
      <Typography color='textSecondary' gutterBottom>
        Create.
      </Typography>
      <form noValidate autoComplete='off' onSubmit={handleSubmit}>
        <TextField
          label='Create Note'
          variant='outlined'
          required
          className={classes.field}
          fullWidth
          onChange={(e) => setTitle(e.target.value)}
          error={errorTitle}
        />
        <TextField
          label='Details'
          variant='outlined'
          required
          className={classes.field}
          fullWidth
          multiline
          rows={4}
          onChange={(e) => setDetails(e.target.value)}
          error={errorDetails}
        />
        <FormControl className={classes.field}>
          <FormLabel>Note Category</FormLabel>
          <RadioGroup
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <FormControlLabel value='money' label='Money' control={<Radio />} />
            <FormControlLabel value='todos' label='Todos' control={<Radio />} />
            <FormControlLabel
              value='reminder'
              label='Reminder'
              control={<Radio />}
            />
            <FormControlLabel value='work' label='Work' control={<Radio />} />
          </RadioGroup>
        </FormControl>
        <Button type='submit' variant='contained' color='secondary'>
          SUBMIT
        </Button>
      </form>
    </Container>
  );
};

export default Create;
