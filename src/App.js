import React, { Component } from 'react';
import Nav from './components/Nav/Nav';
import Banner from './components/Banner/Banner.js';
import RowLists from './RowLists';
import './App.css';

class App extends Component {
  render () {
    return(
    <div className="app">
      {/* Nav */}
      <Nav />
      {/* Banner */}
      <Banner />
      {/* Row */}
      <RowLists />
    </div>
    );
  }
}
export default App;
