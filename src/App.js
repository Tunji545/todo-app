import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Notes from './pages/Notes';
import Create from './pages/Create';
import './App.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';
import Layout from './components/Layout';

const theme = createMuiTheme({
  pallete: {
    primary: {
      main: '#fefefe',
    },
    secondary: purple,
  },
});

const App = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <Layout>
        <Switch>
          <Route path='/' exact component={Notes} />
          <Route path='/create' component={Create} />
        </Switch>
      </Layout>
    </Router>
  </ThemeProvider>
);

export default App;
