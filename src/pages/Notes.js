import React, { useEffect, useState } from 'react';
import Axios from '../data/Api.js';
import { Grid } from '@material-ui/core';
// import { Paper } from '@material-ui/core';
import { Container } from '@material-ui/core';
import NoteCard from '../components/NoteCard.js';

const Notes = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    const resp = await Axios.get(`/`);
    const data = await resp.data;
    console.log(data);
    setData(data);
  };

  const handleDelete = async (id) => {
    await Axios.get(`/` + id, {
      method: 'DELETE',
    });

    const newData = data.filter((datum) => datum.id !== id);
    setData(newData);
  };

  return (
    <Container>
      <Grid container spacing={3}>
        {data.map((datum) => (
          <Grid key={datum.id} item sm={12} md={6} lg={4}>
            <NoteCard note={datum} handleDelete={handleDelete} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Notes;
