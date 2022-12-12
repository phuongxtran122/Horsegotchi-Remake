import React, { Component } from 'react';
import './Styles/App.css';

import Intro from './Components/Intro';
import Icons from './Assets/Icons.js';
class App extends Component {
  // refreshes the page if clicked on
  refreshPage = () => {
    window.location.reload(false);
  }
  render() {
    
    return (
      <div className="App">
        <div className='center' onClick={this.refreshPage}><img className='center' src={Icons['name']} alt="name"/></div>
        <Intro></Intro>
      </div>
    );    
  }
}


export default App;
