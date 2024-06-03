
import React from 'react';
import './App.css';
import News from './components/News';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';

function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            News Website
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <News />
      </Container>
    </div>
  );
}

export default App;
