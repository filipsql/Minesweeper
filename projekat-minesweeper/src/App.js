import React, { Component } from 'react';
import './App.css';

import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography';

import Minesweeper from './Minesweeper'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <div className="App">
       <Toolbar>
          <Typography type='title'>
            Minesweeper
          </Typography>
        </Toolbar>
        <Minesweeper/>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
